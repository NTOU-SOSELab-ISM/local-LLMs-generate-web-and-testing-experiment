// src/components/ThemeToggle.jsx
import '/src/styles/ThemeToggle.css';

const ThemeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <button className="theme-toggle" onClick={onToggle}>
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
