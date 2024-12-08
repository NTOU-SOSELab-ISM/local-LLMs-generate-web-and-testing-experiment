import { useState } from 'react';
import '../styles/TextModal.css';

const TextModal = ({ isOpen, onClose, onSubmit }) => {
  const [text, setText] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text);
      setText('');
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>添加练习文本</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="请输入练习文本..."
        />
        <div className="modal-buttons">
          <button onClick={handleSubmit}>完成</button>
          <button onClick={onClose}>取消</button>
        </div>
      </div>
    </div>
  );
};

export default TextModal; 