'use client';

import HomeButton from '@/components/HomeButton';
import ThemeFilter from '@/components/ThemeFilter';
import { questions } from '@/data/questions';
import { Question } from '@/types/question';
import Link from 'next/link';
import { useState } from 'react';
import ScrollToBottom from '@/components/ScrollToBottom';

export default function FichesPage() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  // Grouper les questions par thème
  const questionsByTheme = questions.reduce((acc, question) => {
    if (!acc[question.theme]) {
      acc[question.theme] = [];
    }
    acc[question.theme].push(question);
    return acc;
  }, {} as Record<string, Question[]>);

  const themes = Object.keys(questionsByTheme);

  // Filtrer par thème si sélectionné
  const filteredThemes = selectedTheme
    ? { [selectedTheme]: questionsByTheme[selectedTheme] }
    : questionsByTheme;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                📚 Fiches de Révision
              </h1>
              <p className="text-gray-600">
                {questions.length} questions organisées par thème
              </p>
            </div>
            {/* Home Button */}
            <HomeButton />
          </div>
        </div>

        {/* Filtre par thème */}
        <ThemeFilter
          themes={themes}
          selectedTheme={selectedTheme}
          onThemeChange={setSelectedTheme}
        />

        {/* Fiches par thème */}
        <div className="space-y-8">
          {Object.entries(filteredThemes).map(([theme, themeQuestions]) => (
            <div key={theme} className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                  <span className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-lg font-semibold mr-3">
                    {theme}
                  </span>
                  <span className="text-gray-500 text-lg font-normal">
                    ({themeQuestions.length} {themeQuestions.length > 1 ? 'questions' : 'question'})
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                {themeQuestions.map((question, index) => (
                  <div
                    key={question.id}
                    className="border-2 border-gray-200 rounded-lg p-5 hover:border-purple-300 transition-colors"
                  >
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-500">
                          Question {index + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                        {question.question}
                      </h3>
                    </div>

                    <div className="space-y-2">
                      {question.choices.map((choice, choiceIndex) => {
                        const correctAnswers = question.correctAnswers;
                        const isCorrect = correctAnswers.includes(choiceIndex);
                        const isMultiple = true; // Toujours multiple avec notation canadienne

                        return (
                          <div
                            key={choiceIndex}
                            className={`p-3 rounded-lg border-2 ${
                              isCorrect
                                ? 'bg-green-50 border-green-500 text-green-800'
                                : 'bg-gray-50 border-gray-200 text-gray-700'
                            }`}
                          >
                            <div className="flex items-center">
                              {isMultiple && (
                                <span className="mr-2">
                                  {isCorrect ? '☑️' : '☐'}
                                </span>
                              )}
                              <span className="font-semibold mr-3">
                                {String.fromCharCode(65 + choiceIndex)}.
                              </span>
                              <span>{choice}</span>
                              {isCorrect && (
                                <span className="ml-auto text-green-600 font-bold">
                                  ✓ Bonne réponse
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {question.explanation && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                          <div className="flex items-start">
                            <span className="text-blue-600 text-xl mr-3">💡</span>
                            <div className="flex-1">
                              <h4 className="font-semibold text-blue-900 mb-2">Explication :</h4>
                              <p className="text-blue-800 leading-relaxed">
                                {question.explanation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer avec retour */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg"
          >
            Commencer le quiz
          </Link>
        </div>

        <ScrollToBottom />
      </div>
    </div>
  );
}
