'use client';

import { UserAnswer } from '@/types/userAnswer';

interface ThemeStatsProps {
  userAnswers: UserAnswer[];
}

export default function ThemeStats({ userAnswers }: ThemeStatsProps) {
  // Calculer les stats par thème avec le système canadien
  const statsByTheme = userAnswers.reduce((acc, answer) => {
    const theme = answer.question.theme;
    if (!acc[theme]) {
      acc[theme] = { score: 0, maxScore: 0, totalQuestions: 0 };
    }
    acc[theme].totalQuestions++;
    acc[theme].score += answer.score;
    acc[theme].maxScore += answer.question.correctAnswers.length;
    return acc;
  }, {} as Record<string, { score: number; maxScore: number; totalQuestions: number }>);

  if (Object.keys(statsByTheme).length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        📊 Statistiques par thème (Notation Canadienne)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(statsByTheme).map(([theme, stats]) => {
          const percentage = stats.maxScore > 0
            ? Math.round((stats.score / stats.maxScore) * 100)
            : 0;
          const getColor = () => {
            if (percentage >= 80) return 'text-green-600';
            if (percentage >= 60) return 'text-yellow-600';
            if (percentage >= 40) return 'text-orange-600';
            return 'text-red-600';
          };

          return (
            <div
              key={theme}
              className="border-2 border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-700 text-sm">{theme}</span>
                <span className={`font-bold text-lg ${getColor()}`}>
                  {percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    percentage >= 80
                      ? 'bg-green-500'
                      : percentage >= 60
                      ? 'bg-yellow-500'
                      : percentage >= 40
                      ? 'bg-orange-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${Math.max(0, percentage)}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500">
                {stats.score > 0 ? '+' : ''}{stats.score} / {stats.maxScore} pts • {stats.totalQuestions} questions
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
