import { useState } from 'react';
import './Sidebar.css';

function Sidebar({ sections, currentSlideId, onSlideSelect, onClose }) {
  const [expandedSections, setExpandedSections] = useState(
    sections.reduce((acc, section) => ({ ...acc, [section.id]: true }), {})
  );

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Navigation</h3>
        <button onClick={onClose} className="close-btn">×</button>
      </div>

      <div className="sidebar-content">
        {sections.map(section => (
          <div key={section.id} className="section-group">
            <button
              className="section-header"
              onClick={() => toggleSection(section.id)}
            >
              <span>{section.title}</span>
              <span className="toggle-icon">
                {expandedSections[section.id] ? '−' : '+'}
              </span>
            </button>

            {expandedSections[section.id] && (
              <div className="slides-list">
                {section.slides.map(slide => (
                  <button
                    key={slide.id}
                    className={`slide-item ${slide.id === currentSlideId ? 'active' : ''}`}
                    onClick={() => onSlideSelect(slide.id)}
                  >
                    <span className="slide-number">{slide.id}</span>
                    <span className="slide-title">{slide.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
