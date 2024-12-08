// src/pages/TypingPage.jsx
import { useState, useCallback, useEffect } from 'react';
import Timer from '../components/Timer';
import TextDisplay from '../components/TextDisplay';
import InputArea from '../components/InputArea';
import Keyboard from '../components/Keyboard';
import ThemeToggle from '../components/ThemeToggle';
import TextModal from '../components/TextModal';
import '/src/styles/TypingPage.css';

const DEFAULT_TEXT = "The quick brown fox jumps over the lazy dog. Programming is both an art and a science. Practice makes perfect.";

const TypingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentText, setCurrentText] = useState(DEFAULT_TEXT);
  const [userInput, setUserInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [pressedKey, setPressedKey] = useState("");

  const calculateWPM = useCallback(() => {
    if (startTime && endTime) {
      const timeInMinutes = (endTime - startTime) / 1000 / 60;
      const wordsTyped = userInput.trim().split(/\s+/).length;
      return Math.round(wordsTyped / timeInMinutes);
    }
    return 0;
  }, [startTime, endTime, userInput]);

  const handleInputChange = useCallback((value) => {
    if (!startTime) {
      setStartTime(Date.now());
    }
    setUserInput(value);
    
    if (value === currentText) {
      setEndTime(Date.now());
    }
  }, [currentText, startTime]);

  const handleKeyPress = useCallback((key) => {
    setPressedKey(key);
    setTimeout(() => setPressedKey(""), 200);
  }, []);

  const handleCustomTextSubmit = useCallback((text) => {
    setCurrentText(text);
    setUserInput("");
    setStartTime(null);
    setEndTime(null);
    setWpm(0);
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    if (endTime) {
      setWpm(calculateWPM());
    }
  }, [endTime, calculateWPM]);

  return (
    <div className={`typing-page ${isDarkMode ? 'dark' : 'light'}`}>
      <ThemeToggle isDarkMode={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
      <Timer startTime={startTime} endTime={endTime} wpm={wpm} />
      <button 
        className="custom-text-btn"
        onClick={() => setIsModalOpen(true)}
      >
        Add Custom Text
      </button>
      <TextDisplay text={currentText} userInput={userInput} />
      <InputArea 
        value={userInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <Keyboard pressedKey={pressedKey} />
      <TextModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCustomTextSubmit}
      />
    </div>
  );
};

export default TypingPage;