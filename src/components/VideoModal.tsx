import React from 'react';
import './VideoModal.css';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="video-container">
          <div className="video-placeholder">
            <div className="play-button-large">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2"/>
                <path d="M10 8L16 12L10 16V8Z" fill="white"/>
              </svg>
            </div>
            <h3>Fashion Collection 2026</h3>
            <p>Watch our latest runway show and discover the season's hottest trends</p>
            <div className="video-info">
              <span>🎬 Duration: 2:45</span>
              <span>👁️ 125K views</span>
            </div>
          </div>
        </div>
        <div className="video-actions">
          <button className="video-action-btn">
            <span>❤️</span> Save to Favorites
          </button>
          <button className="video-action-btn">
            <span>📤</span> Share Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
