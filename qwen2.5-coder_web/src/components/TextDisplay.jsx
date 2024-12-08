import React from 'react';
import '../styles/textDisplay.css';

const TextDisplay = ({ text, onStartTimer, onStopTimer }) => {
    return (
        <div className="text-display" onClick={onStartTimer}>
            <p>{text}</p>
            {onStopTimer && <button onClick={onStopTimer}>Finish</button>}
        </div>
    );
};

export default TextDisplay;