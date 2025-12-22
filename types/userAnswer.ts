import { Question } from './question';

export interface UserAnswer {
  question: Question;
  selectedAnswers: number[]; // indices des réponses sélectionnées
  score: number; // score canadien: +1 par bonne réponse, -1 par mauvaise
}

// Fonction utilitaire pour calculer le score canadien
export function calculateCanadianScore(
  selectedAnswers: number[],
  correctAnswers: number[]
): number {
  let score = 0;

  for (const selected of selectedAnswers) {
    if (correctAnswers.includes(selected)) {
      score += 1; // Bonne réponse cochée
    } else {
      score -= 1; // Mauvaise réponse cochée
    }
  }

  return score;
}

// Score maximum possible pour une question
export function getMaxScore(correctAnswers: number[]): number {
  return correctAnswers.length;
}

// Score minimum possible pour une question (si on coche toutes les mauvaises)
export function getMinScore(totalChoices: number, correctAnswers: number[]): number {
  return -(totalChoices - correctAnswers.length);
}
