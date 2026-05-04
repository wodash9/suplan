export type GoalId = 'daily-core' | 'active-day' | 'plant-based' | 'glow' | 'calm-pm' | 'focus-flow';
export type Diet = 'omnivore' | 'vegetarian' | 'vegan';
export type DayMoment = 'morning' | 'afternoon';
export type SafetyStatus = 'demo-ok' | 'review-required' | 'blocked';

export type Supplement = {
  id: string;
  name: string;
  category: 'vitamina' | 'mineral' | 'omega' | 'aminoacido' | 'botanico';
  summary: string;
  claim: string;
  tags: string[];
  defaultMoment: DayMoment;
  vegan: boolean;
  allergens: string[];
  maxDailyUnits: number;
  caution: string[];
};

export type QuizInput = {
  age: number;
  diet: Diet;
  goals: GoalId[];
  allergies: string[];
  isPregnantOrLactating: boolean;
  takesMedication: boolean;
  hasMedicalCondition: boolean;
  caffeineSensitive: boolean;
};

export type RoutineItem = {
  supplement: Supplement;
  moment: DayMoment;
  units: number;
};

export type Recommendation = {
  status: SafetyStatus;
  statusLabel: string;
  morning: RoutineItem[];
  afternoon: RoutineItem[];
  warnings: string[];
  ruleVersion: string;
  selectedGoalLabels: string[];
};
