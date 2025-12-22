'use client';

interface ThemeFilterProps {
  themes: string[];
  selectedTheme: string | null;
  onThemeChange: (theme: string | null) => void;
}

export default function ThemeFilter({ themes, selectedTheme, onThemeChange }: ThemeFilterProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-semibold text-gray-700">Filtrer par thème :</span>
        <button
          onClick={() => onThemeChange(null)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
            selectedTheme === null
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Tout
        </button>
        {themes.map((theme) => (
          <button
            key={theme}
            onClick={() => onThemeChange(theme)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              selectedTheme === theme
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
            }`}
          >
            {theme}
          </button>
        ))}
      </div>
    </div>
  );
}
