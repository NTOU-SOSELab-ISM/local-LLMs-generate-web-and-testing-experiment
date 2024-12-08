import React, { useState } from 'react';
import Keyboard from './Keyboard';
import TextInput from './TextInput';
import TextDisplay from './TextDisplay';
import ToggleButton from './ToggleButton';
import '../styles/App.css';

const App = () => {
  const [text, setText] = useState('The quick brown fox jumps over the lazy dog');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleAddText = () => {
    // Implement add text functionality
  };

  const handleKeyPress = (key) => {
    // Implement key press functionality
  };

  const startTimer = () => {
    setStartTime(Date.now());
  };

  const stopTimer = () => {
    setEndTime(Date.now());
    calculateWPM();
  };

  const calculateWPM = () => {
    if (startTime && endTime) {
      const elapsedTime = endTime - startTime;
      const wordsTyped = text.split(' ').length;
      const minutes = elapsedTime / 1000 / 60;
      const wpm = Math.round(wordsTyped / minutes);
      alert(`Completed in ${minutes.toFixed(2)} minutes with WPM: ${wpm}`);
    }
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <header>
        <h1>Typing Practice</h1>
        <ToggleButton isDarkMode={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
      </header>
      <section>
        <TextDisplay text={text} onStartTimer={startTimer} onStopTimer={stopTimer} />
        <TextInput onChangeText={handleTextChange} onKeyPress={handleKeyPress} />
        <Keyboard onKeyPress={handleKeyPress} />
      </section>
    </div>
  );
};

export default App;