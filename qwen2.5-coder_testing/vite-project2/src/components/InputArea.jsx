// src/components/InputArea.jsx
import '/src/styles/InputArea.css';

const InputArea = ({ value, onChange, onKeyPress }) => {
  const handleKeyDown = (e) => {
    onKeyPress(e.key);
    onChange(e.target.value);
  };

  return (
    <textarea
      className="input-area"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Start typing here..."
    />
  );
};

export default InputArea;
