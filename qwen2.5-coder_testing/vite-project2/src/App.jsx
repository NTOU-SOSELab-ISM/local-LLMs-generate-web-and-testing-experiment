// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TypingPage from './pages/TypingPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TypingPage />} />
      </Routes>
    </Router>
  );
}

export default App;