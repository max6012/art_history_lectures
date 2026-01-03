import { Link } from 'react-router-dom';
import { lectures } from '../data/lectures';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Art History Lecture Series</h1>
        <p>Select a lecture to begin</p>
      </header>

      <div className="lecture-grid">
        {lectures.map(lecture => (
          <Link
            key={lecture.id}
            to={`/lecture/${lecture.id}`}
            className="lecture-card"
          >
            <h2>{lecture.title}</h2>
            <p>{lecture.sections.length} sections • {
              lecture.sections.reduce((total, section) => total + section.slides.length, 0)
            } slides</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
