import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export const THEMES = [
  { id: 'midnight', label: 'Midnight', icon: '🌙' },
  { id: 'daylight', label: 'Daylight', icon: '☀️' },
  { id: 'ocean', label: 'Ocean', icon: '🌊' },
];

const STORAGE_KEY = 'ys-portfolio-theme';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'midnight';
    return localStorage.getItem(STORAGE_KEY) || 'midnight';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const cycleTheme = () => {
    const idx = THEMES.findIndex((t) => t.id === theme);
    const next = THEMES[(idx + 1) % THEMES.length];
    setTheme(next.id);
  };

  const value = useMemo(
    () => ({ theme, setTheme, cycleTheme, themes: THEMES }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
