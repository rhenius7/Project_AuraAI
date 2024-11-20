// About.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function About() {
  return (
    <div className="container">
      <h1 className="app-title">About AuraAI</h1>
      <p className="app-description">
        At AuraAI, we believe in the power of emotions. 
        Our app analyzes facial expressions in real-time to deliver insightful feedback
        that enhances personal and professional interactions. 
        Whether it's in therapy, education, customer service, or just for fun, 
        our technology aims to revolutionize the way people connect.
      </p>

      <blockquote>
        <em>“Technology is best when it brings people closer.”</em> – Matt Mullenweg
      </blockquote>

      <div className="use-cases">
        <h3 className="feature-title">How Can AuraAI Help You?</h3>
        <ul>
          <li>🎓 Teachers: Identify student engagement in online classes.</li>
          <li>👩‍⚕️ Therapists: Monitor emotional responses in therapy sessions.</li>
          <li>📈 Businesses: Improve customer interactions and satisfaction.</li>
          <li>🧠 Self-Discovery: Explore your own emotions through facial analysis!</li>
        </ul>
      </div>

      <div className="vision">
        <h3 className="feature-title">Our Vision</h3>
        <p>
          Our mission is to bridge the gap between technology and emotions. 
          By providing real-time emotional analysis, we aim to promote understanding, empathy, 
          and better communication in every aspect of life.
        </p>
      </div>

      <div className="button-container">
        <Link to="/doctor-tips">
          <button className="action-button" style={{ animation: 'buttonPop 0.5s' }}>
            Explore Doctor's Tips
          </button>
        </Link>

        <button className="action-button" onClick={() => window.history.back()}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default About;
