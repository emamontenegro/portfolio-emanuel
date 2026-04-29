import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import './index.css';

const ThemeToggle = () => {

  const [theme, setTheme] = useState(() => {
    
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme ? savedTheme : "dark";
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    
    localStorage.setItem('theme', nextTheme);
  };

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