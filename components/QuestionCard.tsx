'use client';

import { Question } from '@/types/question';
import { useState } from 'react';

interface QuestionCardProps {
  question: Question;
  onAnswer: (selectedIndices: number[]) => void;
  onNext: () => void;
  showResult?: boolean;
}

export default function QuestionCard({ question, onAnswer, onNext }: QuestionCardProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    setSelectedAnswers(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const handleSubmit = () => {
    if (selectedAnswers.length === 0) return;
    onAnswer(selectedAnswers);
    setTimeout(() => {
      setSelectedAnswers([]);
      onNext();
    }, 300);
  };

  const getChoiceStyle = (index: number) => {
    return selectedAnswers.includes(index)
      ? 'bg-blue-500 text-white border-blue-600'
      : 'bg-white hover:bg-blue-50 border-gray-300';
  };

  const canSubmit = selectedAnswers.length > 0;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 animate-fadeIn">
      <div className="mb-4">
        <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
          {question.theme}
        </span>
        <h2 className="text-xl font-bold text-gray-800 mt-2">{question.question}</h2>
        <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800 font-medium">
            📊 Notation canadienne : Cochez toutes les réponses que vous pensez correctes
          </p>
          <p className="text-xs text-amber-600 mt-1">
            +1 point par bonne réponse cochée • -1 point par mauvaise réponse cochée
          </p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {question.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleToggle(index)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${getChoiceStyle(index)} cursor-pointer`}
          >
            <div className="flex items-center">
              <span className="mr-3 text-lg">
                {selectedAnswers.includes(index) ? '☑️' : '☐'}
              </span>
              <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>
              <span>{choice}</span>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!canSubmit}
        className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
          !canSubmit
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        Valider ({selectedAnswers.length} réponse{selectedAnswers.length > 1 ? 's' : ''} sélectionnée{selectedAnswers.length > 1 ? 's' : ''})
      </button>
    </div>
  );
}
