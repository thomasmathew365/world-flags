import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode(theme);
    }
  }, []);

  function setMode(theme) {
    setTheme(theme);
    window.localStorage.setItem('theme', theme);
  }

  function toggleTheme() {
    setMode(theme === 'light' ? 'dark' : 'light');
  }

  return [theme, toggleTheme];
}
