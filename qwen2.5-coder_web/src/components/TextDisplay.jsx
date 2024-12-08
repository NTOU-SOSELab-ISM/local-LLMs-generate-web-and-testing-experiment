import React from 'react';
import '../styles/textDisplay.css';

const TextDisplay = ({ text, inputText }) => {
    if (!text || !inputText) {
        return null; // 或者你希望的其他處理方式
    }

    const isCorrect = inputText.toLowerCase() === text.slice(0, inputText.length).toLowerCase();
    let displayText = '';

    for (let i = 0; i < text.length; i++) {
        if (i < inputText.length) {
            displayText += isCorrect ? inputText[i] : text[i];
        } else {
            displayText += text[i];
        }
    }

    return (
        <div className="text-display">
            <p style={{ color: isCorrect ? 'green' : 'red', whiteSpace: 'pre-wrap' }}>
                {displayText}
            </p>
        </div>
    );
};

export default TextDisplay;