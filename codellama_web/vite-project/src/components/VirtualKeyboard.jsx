import { memo } from 'react';
import '../styles/VirtualKeyboard.css';

const VirtualKeyboard = memo(({ pressedKey }) => {
  const keyboardLayout = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ];

  return (
    <div className="virtual-keyboard">
      {keyboardLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <div
              key={key}
              className={`key ${pressedKey.toLowerCase() === key ? 'active' : ''}`}
            >
              {key}
            </div>
          ))}
        </div>
      ))}
      <div className="keyboard-row">
        <div className="key space">Space</div>
      </div>
    </div>
  );
});

export default VirtualKeyboard;