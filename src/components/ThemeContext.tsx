import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  isLit: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isLit, setIsLit] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'light';
    } catch {
      return false;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem('theme', isLit ? 'light' : 'dark');
    } catch {}
  }, [isLit]);

  const toggleTheme = () => setIsLit((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isLit, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
