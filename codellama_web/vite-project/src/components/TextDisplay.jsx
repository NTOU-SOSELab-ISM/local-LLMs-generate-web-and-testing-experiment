import { memo } from 'react';
import '../styles/TextDisplay.css';

const TextDisplay = memo(({ text, userInput, onAddText }) => {
  return (
    <div className="text-display">
      <div className="text-content">
        {text.split('').map((char, index) => {
          let className = 'char';
          if (index < userInput.length) {
            className += userInput[index] === char ? ' correct' : ' incorrect';
          }
          return (
            <span key={index} className={className}>
              {char}
            </span>
          );
        })}
      </div>
      <button className="add-text-btn" onClick={onAddText}>
        添加文本
      </button>
    </div>
  );
});

export default TextDisplay;