import React from 'react';

const ToggleButton = ({ isDarkMode, onToggle }) => {
    return (
        <button onClick={onToggle}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ToggleButton;