import React, { useState } from 'react';
import '../styles/textInput.css';

const TextInput = ({ onChangeText, onKeyPress }) => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
        onChangeText(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (onKeyPress) {
            onKeyPress(e.key);
        }
    };

    return (
        <div className="text-input">
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default TextInput;