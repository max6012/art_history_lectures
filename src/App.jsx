import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LectureViewer from './components/LectureViewer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/lecture/:lectureId" element={<LectureViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
