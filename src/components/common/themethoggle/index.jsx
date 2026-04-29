import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../../hooks/useTheme';
import './index.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle-btn" 
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="icon-sun" />
      ) : (
        <Moon size={20} className="icon-moon" />
      )}
    </button>
  );
};

export default ThemeToggle;