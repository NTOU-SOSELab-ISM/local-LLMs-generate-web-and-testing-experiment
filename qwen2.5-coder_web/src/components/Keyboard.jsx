import React from 'react';
import '../styles/keyboard.css';

const Keyboard = ({ onKeyPress }) => {
    const keys = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ];

    return (
        <div className="keyboard">
            {keys.map((row, index) => (
                <div key={index} className="key-row">
                    {row.map((key) => (
                        <button
                            key={key}
                            onClick={() => onKeyPress(key)}
                            className="key"
                        >
                            {key}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Keyboard;