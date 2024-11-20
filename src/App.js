// App.js
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import DoctorTips from './DoctorTips';
import './App.css';

function App() {
  const [cameraActive, setCameraActive] = useState(false);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);

  const openCamera = () => setCameraActive(true);
  const closeCamera = () => setCameraActive(false);

  useEffect(() => () => closeCamera(), []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <h1 className="app-title">Welcome to AuraAI</h1>
              <p className="app-description">
                Ever wondered what emotions lie behind a simple smile or frown? 
                AuraAI brings emotions to life through real-time facial analysis! 
                Whether you’re a teacher, therapist, or simply curious – 
                we help unlock the mystery of human expressions. 
              </p>

              <blockquote>
                <em>"Your face speaks what the heart hides."</em> – Old Saying
              </blockquote>

              <div className="button-container">
                <button onClick={openCamera} disabled={cameraActive} className="action-button">
                  Open Camera
                </button>
                <button onClick={closeCamera} disabled={!cameraActive} className="action-button">
                  Close Camera
                </button>
              </div>

              {cameraActive ? (
                <div className="img-container">
                  <p className="camera-status">📹 Camera is Active</p>
                  <img
                    ref={videoRef}
                    src="http://127.0.0.1:5000/video-feed"
                    alt="Video Feed"
                    className="video-feed"
                    onError={() => setError('Failed to load video feed.')}
                  />
                </div>
              ) : (
                <p className="camera-status">🛑 Camera is Off</p>
              )}

              {error && <p className="error-message">{error}</p>}

              <Link to="/about">
                <button className="action-button">Learn More About Us</button>
              </Link>

              <div className="fun-facts">
                <h3 className="feature-title">Fun Facts About Emotions:</h3>
                <ul>
                  <li>😊 People smile approximately 20 times a day on average.</li>
                  <li>😡 It takes more muscles to frown than to smile!</li>
                  <li>🌐 In 2023, emotional AI was valued at $35 billion.</li>
                </ul>
              </div>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/doctor-tips" element={<DoctorTips />} />
      </Routes>
    </Router>
  );
}

export default App;
