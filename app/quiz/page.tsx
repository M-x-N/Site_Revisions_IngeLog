'use client';

import HomeButton from '@/components/HomeButton';
import QuestionCard from '@/components/QuestionCard';
import ResultsDisplay from '@/components/ResultsDisplay';
import ScoreDisplay from '@/components/ScoreDisplay';
import ThemeStats from '@/components/ThemeStats';
import { questions } from '@/data/questions';
import { Question } from '@/types/question';
import { UserAnswer, calculateCanadianScore, getMaxScore, getMinScore } from '@/types/userAnswer';
import { useState } from 'react';
import ScrollToBottom from '@/components/ScrollToBottom';

/**
 * Utility: returns a shuffled copy of array
 */
function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Build a question with shuffled choices and remapped correct answer indices.
 * We shuffle indices rather than strings to avoid issues with duplicate choice text.
 */
function withShuffledChoices(q: Question): Question {
  const originalIndices = q.choices.map((_, i) => i);
  const shuffledIndices = shuffleArray(originalIndices);
  const shuffledChoices = shuffledIndices.map(i => q.choices[i]);
  const remappedCorrectAnswers = q.correctAnswers
    .map(origIdx => shuffledIndices.indexOf(origIdx))
    .filter(idx => idx !== -1);
  return {
    ...q,
    choices: shuffledChoices,
    correctAnswers: remappedCorrectAnswers,
  };
}

const subjects = [
  'Domain Driven Design',
  'Test Driven Development',
  'IoC',
  'REST API',
  'Spring Cloud',
];

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuestionCount, setSelectedQuestionCount] = useState<number>(10);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const handleAnswer = (selectedIndices: number[]) => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const score = calculateCanadianScore(selectedIndices, currentQuestion.correctAnswers);

    setUserAnswers(prev => [...prev, {
      question: currentQuestion,
      selectedAnswers: selectedIndices,
      score: score
    }]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const toggleSubject = (subject: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject) // Remove subject if already selected
        : [...prev, subject] // Add subject if not selected
    );
  };

  const filteredQuestions = selectedSubjects.length
    ? questions.filter((q) => selectedSubjects.includes(q.theme))
    : questions;

  const handleStart = () => {
    // Filter questions based on selected subjects
    const filtered = selectedSubjects.length
      ? questions.filter((q) => selectedSubjects.includes(q.theme))
      : questions;

    // Shuffle the filtered questions and select the requested count
    const shuffled = shuffleArray([...filtered]);
    const selected = shuffled.slice(0, selectedQuestionCount);

    // Shuffle choices and remap correct answers for each question
    const remapped = selected.map((q) => withShuffledChoices(q));

    setShuffledQuestions(remapped);
    setUserAnswers([]);
    setCurrentQuestionIndex(0);
    setIsStarted(true);
    setIsFinished(false);
  };

  const handleRestart = () => {
    // Restart gives the user the ability to start over.
    // We'll return to the start screen so they can pick count/themes again.
    setIsStarted(false);
    setIsFinished(false);
    setUserAnswers([]);
    setCurrentQuestionIndex(0);
  };

  const calculateTotalScore = () => {
    const score = userAnswers.reduce((sum, ans) => sum + ans.score, 0);
    const maxScore = userAnswers.reduce((sum, ans) => sum + getMaxScore(ans.question.correctAnswers), 0);
    const minScore = userAnswers.reduce((sum, ans) => sum + getMinScore(ans.question.choices.length, ans.question.correctAnswers), 0);
    return { score, maxScore, minScore };
  };

  if (!isStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            📚 Révisions Ingénierie Logicielle
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Testez vos connaissances avec des QCM à notation canadienne
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <p className="text-amber-800 font-semibold">📊 Système de notation canadienne</p>
            <p className="text-sm text-amber-700 mt-1">
              Plusieurs réponses peuvent être correctes. <br/>
              +1 point par bonne réponse cochée • -1 point par mauvaise réponse cochée
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">
              Nombre de questions
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {[5, 10, 15, 20, 30, questions.length].map(count => (
                <button
                  key={count}
                  onClick={() => setSelectedQuestionCount(count)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                    selectedQuestionCount === count
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {count === questions.length ? 'Toutes' : count}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              {questions.length} questions disponibles au total
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Thèmes couverts :</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {Array.from(new Set(questions.map(q => q.theme))).map(theme => (
                <button
                  key={theme}
                  onClick={() => toggleSubject(theme)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedSubjects.includes(theme)
                      ? 'bg-purple-600 text-white shadow-lg scale-105'
                      : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                  }`}
                >
                  {theme}
                </button>
              ))}
              {selectedSubjects.length > 0 && (
                <button
                  onClick={() => setSelectedSubjects([])}
                  className="px-4 py-2 rounded-lg font-medium bg-red-500 text-white hover:bg-red-600 transition-all duration-200"
                >
                  Effacer le filtre
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStart}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg"
            >
              Commencer le quiz
            </button>
            <HomeButton className="mt-4 sm:mt-0" />
          </div>
        </div>
      </div>
    );
  }

  if (isFinished) {
    const { score, maxScore, minScore } = calculateTotalScore();

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              🎉 Révision terminée !
            </h1>
            <ScoreDisplay score={score} maxScore={maxScore} minScore={minScore} />
          </div>

          <ThemeStats userAnswers={userAnswers} />

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Détail des réponses
            </h2>
            <ResultsDisplay userAnswers={userAnswers} />
          </div>

          <div className="text-center mt-8">
            <button
              onClick={handleRestart}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg"
            >
              Nouvelle révision
            </button>
            <HomeButton className="mt-4" />
          </div>
        </div>
        <ScrollToBottom />
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 animate-fadeIn">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              📚 Révisions Ingénierie Logicielle
            </h1>
            <div className="text-right">
              <div className="text-sm text-gray-600">Question</div>
              <div className="text-lg font-semibold text-gray-800">
                {currentQuestionIndex + 1} / {shuffledQuestions.length}
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
            onNext={handleNextQuestion}
            showResult={false}
          />
        )}

        <div className="mt-6 text-center">
          <HomeButton />
        </div>
      </div>
    </div>
  );
}
