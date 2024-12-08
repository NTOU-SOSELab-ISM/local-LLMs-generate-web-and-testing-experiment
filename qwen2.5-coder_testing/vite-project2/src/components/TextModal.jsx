// src/components/TextModal.jsx
import { useState } from 'react';
import '/src/styles/TextModal.css';

const TextModal = ({ isOpen, onClose, onSubmit }) => {
  const [customText, setCustomText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customText.trim()) {
      onSubmit(customText.trim());
      setCustomText("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Custom Text</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="Enter your custom text here..."
          />
          <div className="modal-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TextModal;
