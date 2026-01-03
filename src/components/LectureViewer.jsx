import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { lectures } from '../data/lectures';
import Sidebar from './Sidebar';
import './LectureViewer.css';

function LectureViewer() {
  const { lectureId } = useParams();
  const navigate = useNavigate();
  const lecture = lectures.find(l => l.id === lectureId);

  const [currentSlideId, setCurrentSlideId] = useState(1);
  const [showSidebar, setShowSidebar] = useState(true);
  const [presenterMode, setPresenterMode] = useState(false);

  // Flatten all slides for easier navigation
  const allSlides = lecture?.sections.flatMap(section => section.slides) || [];
  const currentSlide = allSlides.find(s => s.id === currentSlideId);
  const currentIndex = allSlides.findIndex(s => s.id === currentSlideId);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        navigate('/');
      } else if (e.key === 'p' || e.key === 'P') {
        setPresenterMode(prev => !prev);
      } else if (e.key === 's' || e.key === 'S') {
        setShowSidebar(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlideId]);

  const nextSlide = () => {
    if (currentIndex < allSlides.length - 1) {
      setCurrentSlideId(allSlides[currentIndex + 1].id);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentSlideId(allSlides[currentIndex - 1].id);
    }
  };

  if (!lecture) {
    return <div>Lecture not found</div>;
  }

  return (
    <div className={`lecture-viewer ${presenterMode ? 'presenter-mode' : ''}`}>
      {showSidebar && (
        <Sidebar
          sections={lecture.sections}
          currentSlideId={currentSlideId}
          onSlideSelect={setCurrentSlideId}
          onClose={() => setShowSidebar(false)}
        />
      )}

      <div className="main-content">
        <div className="slide-container">
          <div className="slide">
            <h1 className="slide-title">{currentSlide?.title}</h1>
            <div className="slide-content">
              {currentSlide?.content.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>

          <div className="slide-footer">
            <span className="slide-counter">
              {currentIndex + 1} / {allSlides.length}
            </span>
          </div>
        </div>

        {presenterMode && (
          <div className="notes-panel">
            <div className="notes-header">Speaker Notes</div>
            <div className="notes-content">
              {currentSlide?.notes}
            </div>
          </div>
        )}
      </div>

      <div className="controls">
        <button onClick={() => navigate('/')} className="control-btn">
          Home
        </button>
        {!showSidebar && (
          <button onClick={() => setShowSidebar(true)} className="control-btn">
            Show Sidebar (S)
          </button>
        )}
        <button onClick={() => setPresenterMode(!presenterMode)} className="control-btn">
          {presenterMode ? 'Hide' : 'Show'} Notes (P)
        </button>
        <button onClick={prevSlide} disabled={currentIndex === 0} className="control-btn">
          ← Prev
        </button>
        <button onClick={nextSlide} disabled={currentIndex === allSlides.length - 1} className="control-btn">
          Next →
        </button>
      </div>
    </div>
  );
}

export default LectureViewer;
