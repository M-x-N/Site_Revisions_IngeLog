'use client';

import { UserAnswer } from '@/types/userAnswer';

interface ResultsDisplayProps {
  userAnswers: UserAnswer[];
}

export default function ResultsDisplay({ userAnswers }: ResultsDisplayProps) {
  return (
    <div className="space-y-6">
      {userAnswers.map((userAnswer, index) => {
        const correctAnswers = userAnswer.question.correctAnswers;
        const selectedAnswers = userAnswer.selectedAnswers;

        // Calcul du score pour cette question
        const questionScore = userAnswer.score;
        const maxScore = correctAnswers.length;

        return (
          <div
            key={userAnswer.question.id}
            className={`bg-white rounded-lg shadow-lg p-6 border-2 ${
              questionScore === maxScore ? 'border-green-500' :
              questionScore > 0 ? 'border-yellow-500' :
              questionScore === 0 ? 'border-gray-400' : 'border-red-500'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {userAnswer.question.theme}
                  </span>
                  <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                    questionScore === maxScore ? 'bg-green-100 text-green-800' :
                    questionScore > 0 ? 'bg-yellow-100 text-yellow-800' :
                    questionScore === 0 ? 'bg-gray-100 text-gray-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {questionScore > 0 ? '+' : ''}{questionScore} / {maxScore} pts
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Question {index + 1} : {userAnswer.question.question}
                </h3>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              {userAnswer.question.choices.map((choice, choiceIndex) => {
                const isCorrectAnswer = correctAnswers.includes(choiceIndex);
                const isSelected = selectedAnswers.includes(choiceIndex);

                let bgColor = 'bg-gray-50';
                let borderColor = 'border-gray-200';
                let textColor = 'text-gray-600';
                let scoreLabel = '';
                let scoreColor = '';

                if (isCorrectAnswer && isSelected) {
                  bgColor = 'bg-green-100';
                  borderColor = 'border-green-500';
                  textColor = 'text-green-800';
                  scoreLabel = '+1';
                  scoreColor = 'text-green-600 bg-green-200';
                } else if (isCorrectAnswer && !isSelected) {
                  bgColor = 'bg-yellow-50';
                  borderColor = 'border-yellow-400';
                  textColor = 'text-yellow-800';
                  scoreLabel = '0 (manqué)';
                  scoreColor = 'text-yellow-600 bg-yellow-200';
                } else if (!isCorrectAnswer && isSelected) {
                  bgColor = 'bg-red-100';
                  borderColor = 'border-red-500';
                  textColor = 'text-red-800';
                  scoreLabel = '-1';
                  scoreColor = 'text-red-600 bg-red-200';
                } else {
                  // Mauvaise réponse non sélectionnée - correct de ne pas l'avoir cochée
                  bgColor = 'bg-gray-50';
                  borderColor = 'border-gray-200';
                  textColor = 'text-gray-500';
                }

                return (
                  <div
                    key={choiceIndex}
                    className={`p-3 rounded-lg border-2 ${bgColor} ${borderColor} ${textColor}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="mr-2">
                          {isSelected ? '☑️' : '☐'}
                        </span>
                        <span className="font-semibold mr-3">
                          {String.fromCharCode(65 + choiceIndex)}.
                        </span>
                        <span>{choice}</span>
                      </div>
                      {scoreLabel && (
                        <span className={`text-xs font-bold px-2 py-1 rounded ${scoreColor}`}>
                          {scoreLabel}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {userAnswer.question.explanation && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <div className="flex items-start">
                    <span className="text-blue-600 text-xl mr-3">💡</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-blue-900 mb-2">Explication :</h4>
                      <p className="text-blue-800 leading-relaxed">
                        {userAnswer.question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
