import { useState, useCallback } from 'react';
import './App.css';
import Timer from './components/Timer';
import TextDisplay from './components/TextDisplay';
import TypingArea from './components/TypingArea';
import VirtualKeyboard from './components/VirtualKeyboard';
import TextModal from './components/TextModal';

const DEFAULT_TEXT = "The quick brown fox jumps over the lazy dog. This pangram contains every letter of the English alphabet at least once. Typing practice is an essential skill for modern computer users.";

function App() {
  const [theme, setTheme] = useState('light');
  const [text, setText] = useState(DEFAULT_TEXT);
  const [userInput, setUserInput] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [pressedKey, setPressedKey] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!isStarted) setIsStarted(true);
    setUserInput(value);
    
    if (value === text) {
      setIsFinished(true);
    }
  };

  const handleKeyPress = (e) => {
    setPressedKey(e.key);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleAddText = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleTextSubmit = (newText) => {
    setText(newText);
    setUserInput('');
    setIsStarted(false);
    setIsFinished(false);
  };

  return (
    <div className={`app-container ${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        切换主题
      </button>
      
      <Timer 
        isStarted={isStarted}
        isFinished={isFinished}
        totalWords={text.length}
      />
      
      <TextDisplay
        text={text}
        userInput={userInput}
        onAddText={handleAddText}
      />
      
      <TypingArea
        value={userInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        disabled={isFinished}
      />
      
      <VirtualKeyboard pressedKey={pressedKey} />
      
      <TextModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleTextSubmit}
      />
    </div>
  );
}

export default App;
