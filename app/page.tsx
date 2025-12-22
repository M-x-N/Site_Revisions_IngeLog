'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          📚 Bienvenue sur le site de révision d'Ingé Log
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Choisissez une option pour commencer :
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/quiz"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg"
          >
            📝 Commencer le Quiz
          </Link>
          <Link
            href="/fiches"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all duration-200 shadow-lg"
          >
            📖 Voir les Fiches
          </Link>
        </div>
      </div>
    </div>
  );
}
