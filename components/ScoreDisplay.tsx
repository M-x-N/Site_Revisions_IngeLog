'use client';

interface ScoreDisplayProps {
  score: number;
  maxScore: number;
  minScore: number;
}

export default function ScoreDisplay({ score, maxScore, minScore }: ScoreDisplayProps) {
  // Calcul du pourcentage sur la plage [min, max]
  const range = maxScore - minScore;
  const normalizedScore = score - minScore;
  const percentage = range > 0 ? Math.round((normalizedScore / range) * 100) : 0;

  const getScoreColor = () => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    if (percentage >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreBgColor = () => {
    if (percentage >= 80) return 'bg-green-100';
    if (percentage >= 60) return 'bg-yellow-100';
    if (percentage >= 40) return 'bg-orange-100';
    return 'bg-red-100';
  };

  const getBorderColor = () => {
    if (percentage >= 80) return 'border-green-500';
    if (percentage >= 60) return 'border-yellow-500';
    if (percentage >= 40) return 'border-orange-500';
    return 'border-red-500';
  };

  const getEmoji = () => {
    if (percentage >= 80) return '🎉';
    if (percentage >= 60) return '💪';
    if (percentage >= 40) return '📚';
    return '😰 Ravuuuuus';
  };

  const getMessage = () => {
    if (percentage >= 80) return 'Excellent travail !';
    if (percentage >= 60) return 'Bon travail, continuez !';
    if (percentage >= 40) return 'Des progrès à faire !';
    return 'Continuez à réviser pour pas finir au chomage avec moi (donner stage svp) !';
  };

  return (
    <div className={`${getScoreBgColor()} rounded-lg p-6 mb-6 border-2 ${getBorderColor()}`}>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Score</h3>
        <div className={`text-4xl font-bold ${getScoreColor()} mb-2`}>
          {score > 0 ? '+' : ''}{score} / {maxScore}
        </div>
        <div className="text-sm text-gray-600 mb-2">
          (Min: {minScore} • Max: {maxScore})
        </div>
        <div className={`text-2xl font-semibold ${getScoreColor()}`}>
          {percentage}%
        </div>
        <p className={`${getScoreColor()} mt-2 font-medium`}>
          {getEmoji()} {getMessage()}
        </p>
      </div>

      {/* Barre de progression visuelle */}
      <div className="mt-4 relative">
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className={`h-full ${percentage >= 80 ? 'bg-green-500' : percentage >= 60 ? 'bg-yellow-500' : percentage >= 40 ? 'bg-orange-500' : 'bg-red-500'} transition-all duration-500`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{minScore}</span>
          <span>0</span>
          <span>{maxScore}</span>
        </div>
      </div>
    </div>
  );
}
