import { useRef, useEffect } from 'react';
import '../styles/TypingArea.css';

const TypingArea = ({ value, onChange, onKeyPress, disabled }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="typing-area">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyPress}
        disabled={disabled}
        placeholder="点击这里开始打字..."
      />
    </div>
  );
};

export default TypingArea;