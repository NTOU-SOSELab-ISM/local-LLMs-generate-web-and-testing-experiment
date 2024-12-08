import React, { useState } from 'react';
import '../styles/textInput.css';

const TextInput = ({ onChangeText }) => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
        if (typeof onChangeText === 'function') {
            onChangeText(e.target.value);
        }
    };

    return (
        <div className="text-input">
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        if (typeof onChangeText === 'function') {
                            onChangeText(inputText);
                        }
                    }
                }}
            />
        </div>
    );
};

export default TextInput;