import React from 'react';
import '../styles/textDisplay.css';

const TextDisplay = ({ text, inputText, onCorrect, onIncorrect, onStopTimer }) => {
    if (!text || !inputText) {
        return null; // 或者你希望的其他處理方式
    }

    const isCorrect = inputText.toLowerCase() === text.slice(0, inputText.length).toLowerCase();

    return (
        <div className="text-display">
            <p style={{ color: isCorrect ? 'green' : 'red' }}>
                {inputText}
            </p>
            {onStopTimer && <button onClick={onStopTimer}>Finish</button>}
        </div>
    );
};

export default TextDisplay;