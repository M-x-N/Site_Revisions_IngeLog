export interface Question {
  id: number;
  theme: string;
  question: string;
  choices: string[];
  correctAnswers: number[]; // indices des bonnes réponses (notation canadienne)
  explanationUrl?: string; // URL vers l'explication dans le cours (optionnel)
  explanation?: string; // Explication directe de la réponse
}
