import React, { useEffect, useState } from 'react';

const DarkModeToggle: React.FC = () => {
  const [dark, setDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      aria-label="Toggle dark mode"
      className="rounded-full p-2 bg-sky-300 dark:bg-gray-700 hover:bg-sky-400 dark:hover:bg-gray-600 transition"
      onClick={() => setDark((d) => !d)}
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
};

export default DarkModeToggle;
