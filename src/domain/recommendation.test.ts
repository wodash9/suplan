import { describe, expect, it } from 'vitest';
import { candidateSupplements, evaluateSafety, generateRecommendation } from './recommendation';
import type { QuizInput } from './types';

const baseInput: QuizInput = {
  age: 32,
  diet: 'omnivore',
  goals: ['daily-core', 'active-day'],
  allergies: [],
  isPregnantOrLactating: false,
  takesMedication: false,
  hasMedicalCondition: false,
  caffeineSensitive: false,
};

describe('Suplan recommendation engine', () => {
  it('blocks demo recommendations for minors', () => {
    const safety = evaluateSafety({ ...baseInput, age: 17 });

    expect(safety.status).toBe('blocked');
    expect(safety.warnings[0]).toContain('menores de 18');
  });

  it('marks routines as review-required when medication is declared', () => {
    const recommendation = generateRecommendation({ ...baseInput, takesMedication: true });

    expect(recommendation.status).toBe('review-required');
    expect(recommendation.warnings.some((warning) => warning.includes('Medicación'))).toBe(true);
  });

  it('filters non-vegan supplements for vegan users', () => {
    const candidates = candidateSupplements({ ...baseInput, diet: 'vegan', goals: ['plant-based', 'daily-core'] });

    expect(candidates.length).toBeGreaterThan(0);
    expect(candidates.every((candidate) => candidate.vegan)).toBe(true);
    expect(candidates.map((candidate) => candidate.id)).not.toContain('vitamin-d3');
  });

  it('splits a normal routine into morning and afternoon sachets', () => {
    const recommendation = generateRecommendation(baseInput);

    expect(recommendation.status).toBe('demo-ok');
    expect(recommendation.morning.length).toBeGreaterThan(0);
    expect(recommendation.afternoon.length).toBeGreaterThan(0);
    expect(recommendation.ruleVersion).toContain('suplan-demo-rules');
  });

  it('applies explicit morning/afternoon overrides', () => {
    const recommendation = generateRecommendation(baseInput, { magnesium: 'morning' });

    expect(recommendation.morning.map((item) => item.supplement.id)).toContain('magnesium');
  });
});
