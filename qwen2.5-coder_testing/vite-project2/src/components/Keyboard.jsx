// src/components/Keyboard.jsx
import '/src/styles/Keyboard.css';

const Keyboard = ({ pressedKey }) => {
  const keyboardLayout = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ];

  return (
    <div className="keyboard">
      {keyboardLayout.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.map(key => (
            <div
              key={key}
              className={`key ${pressedKey.toLowerCase() === key ? 'active' : ''}`}
            >
              {key.toUpperCase()}
            </div>
          ))}
        </div>
      ))}
      <div className="keyboard-row">
        <div className={`key space ${pressedKey === ' ' ? 'active' : ''}`}>
          SPACE
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
