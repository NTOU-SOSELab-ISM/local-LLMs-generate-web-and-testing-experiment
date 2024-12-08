import React, { useState } from 'react';
import '../styles/textInput.css';

const TextInput = ({ text, onInputChange }) => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
        onInputChange(e.target.value);
    };

    return (
        <div className="text-input">
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onInputChange(inputText);
                    }
                }}
            />
        </div>
    );
};

export default TextInput;