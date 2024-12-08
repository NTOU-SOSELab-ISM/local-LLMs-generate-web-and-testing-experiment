// src/components/TextDisplay.jsx
import '/src/styles/TextDisplay.css';

const TextDisplay = ({ text, userInput }) => {
  return (
    <div className="text-display">
      {text.split('').map((char, index) => {
        let className = 'char';
        if (index < userInput.length) {
          className += userInput[index] === char ? ' correct' : ' incorrect';
        }
        return <span key={index} className={className}>{char}</span>;
      })}
    </div>
  );
};

export default TextDisplay;
