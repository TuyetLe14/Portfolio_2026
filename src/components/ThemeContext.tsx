import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ThemeContextType {
  isLit: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isLit, setIsLit] = useState(false);
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