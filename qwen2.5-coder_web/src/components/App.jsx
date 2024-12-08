import React, { useState } from 'react';
import Keyboard from './Keyboard';
import TextInput from './TextInput';
import TextDisplay from './TextDisplay';
import ToggleButton from './ToggleButton';
import '../styles/App.css';

const App = () => {
  const [text, setText] = useState('The quick brown fox jumps over the lazy dog. This is a longer text to practice typing.');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [inputText, setInputText] = useState('');

  const handleTextChange = (newText) => {
    setText(newText);
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
      alert(`Completed in ${minutes.toFixed(2)} minutes with WPM: ${Math.round(wordsTyped / minutes)}`);
    }
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <header>
        <h1>Typing Practice</h1>
        <ToggleButton isDarkMode={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
      </header>
      <section>
        <TextDisplay text={text} inputText={inputText} onStartTimer={startTimer} onStopTimer={stopTimer} />
        <TextInput onChangeText={(newText) => {
          handleTextChange(newText);
          setInputText(newText); // 更新 inputText
        }} onKeyPress={(key) => console.log(key)} />
        <Keyboard onKeyPress={(key) => console.log(key)} />
      </section>
    </div>
  );
};

export default App;