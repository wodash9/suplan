import { goalLabels, RULE_VERSION, supplements } from './catalog';
import type { DayMoment, QuizInput, Recommendation, RoutineItem, SafetyStatus, Supplement } from './types';

const uniqueById = (items: Supplement[]) => Array.from(new Map(items.map((item) => [item.id, item])).values());

export function evaluateSafety(input: QuizInput): { status: SafetyStatus; warnings: string[] } {
  const warnings: string[] = [];

  if (input.age < 18) {
    return {
      status: 'blocked',
      warnings: ['La demo no genera rutinas para menores de 18 años.'],
    };
  }

  if (input.isPregnantOrLactating) {
    warnings.push('Embarazo o lactancia: recomendamos revisión profesional antes de consumir complementos.');
  }
  if (input.takesMedication) {
    warnings.push('Medicación declarada: algunas combinaciones pueden requerir revisión profesional.');
  }
  if (input.hasMedicalCondition) {
    warnings.push('Condición médica declarada: esta demo no sustituye consejo sanitario.');
  }

  return {
    status: warnings.length > 0 ? 'review-required' : 'demo-ok',
    warnings,
  };
}

export function candidateSupplements(input: QuizInput): Supplement[] {
  const goalNames = input.goals.map((goal) => goalLabels[goal]);
  const byGoal = supplements.filter((supplement) => supplement.tags.some((tag) => goalNames.includes(tag)));
  const filtered = byGoal.filter((supplement) => {
    if (input.diet === 'vegan' && !supplement.vegan) return false;
    if (supplement.allergens.some((allergen) => input.allergies.includes(allergen))) return false;
    if (input.caffeineSensitive && supplement.id === 'l-theanine') return false;
    return true;
  });
  return uniqueById(filtered).slice(0, 6);
}

export function splitRoutine(items: Supplement[], overrides: Record<string, DayMoment> = {}): RoutineItem[] {
  return items.map((supplement) => ({
    supplement,
    moment: overrides[supplement.id] ?? supplement.defaultMoment,
    units: 1,
  }));
}

export function generateRecommendation(
  input: QuizInput,
  overrides: Record<string, DayMoment> = {},
): Recommendation {
  const safety = evaluateSafety(input);
  const items = safety.status === 'blocked' ? [] : splitRoutine(candidateSupplements(input), overrides);
  const cautionWarnings = items.flatMap((item) => {
    const cautions = item.supplement.caution;
    const messages: string[] = [];
    if (input.takesMedication && cautions.includes('medication')) {
      messages.push(`${item.supplement.name}: revisar con profesional si tomas medicación.`);
    }
    if (input.hasMedicalCondition && cautions.includes('medical-condition')) {
      messages.push(`${item.supplement.name}: requiere revisión si hay condición médica.`);
    }
    return messages;
  });

  const warnings = Array.from(new Set([...safety.warnings, ...cautionWarnings]));

  return {
    status: warnings.length > 0 && safety.status !== 'blocked' ? 'review-required' : safety.status,
    statusLabel:
      safety.status === 'blocked'
        ? 'Demo bloqueada'
        : warnings.length > 0
          ? 'Requiere revisión'
          : 'Demo informativa lista',
    morning: items.filter((item) => item.moment === 'morning'),
    afternoon: items.filter((item) => item.moment === 'afternoon'),
    warnings,
    ruleVersion: RULE_VERSION,
    selectedGoalLabels: input.goals.map((goal) => goalLabels[goal]),
  };
}
