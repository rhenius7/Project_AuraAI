// DoctorTips.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function DoctorTips() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  return (
    <div className="container">
      <h2 className="app-title">Doctor's Tips for Emotional Well-Being</h2>

      <p className="app-description">
        Emotions are like the weather—constantly changing. With the right tools, 
        you can navigate through any emotional storm! Here are some doctor-recommended tips
        to help you manage emotions and lead a balanced life.
      </p>

      <div className="motivational-quote">
        <blockquote>
          <em>"Emotions are the colors of the soul."</em> – William Blake
        </blockquote>
      </div>

      <ul className="tips-list">
        <li>😊 <strong>Happiness:</strong> <br />
          – Practice Gratitude: Write down three things you’re thankful for daily.<br />
          – Stay Active: Exercise releases endorphins, the “feel-good” hormones!
        </li>

        <li>😔 <strong>Sadness:</strong> <br />
          – Connect with Loved Ones: A simple conversation can lift your spirits.<br />
          – Express Yourself: Writing, painting, or listening to music can help process sadness.
        </li>

        <li>😨 <strong>Fear:</strong> <br />
          – Deep Breathing: Breathe in for 4 seconds, hold for 4, and exhale for 6.<br />
          – Face Your Fears Gradually: Break challenges into smaller steps to build confidence.
        </li>

        <li>😲 <strong>Surprise:</strong> <br />
          – Stay Open-Minded: Surprises often lead to unexpected growth.<br />
          – Respond with Curiosity: Ask, “What can I learn from this?”
        </li>
      </ul>

      <div className="interactive-section">
        <h3 className="feature-title">How to Stay Emotionally Fit:</h3>
        <p>
          🌟 Mindfulness: Practice 5 minutes of mindfulness daily to stay present.<br />
          📒 Journaling: Write down your thoughts to reflect and gain clarity.<br />
          🎶 Music Therapy: Listen to uplifting music to improve your mood.
        </p>
      </div>

      <div className="fun-fact-section">
        <h3 className="feature-title">Did You Know?</h3>
        <p>
          🧠 Laughing not only relieves stress but also boosts your immune system!<br />
          ❤️ Hugs release oxytocin, often called the “love hormone,” reducing stress.
        </p>
      </div>

      <div className="button-container">
        <Link to="/about">
          <button className="action-button" style={{ animation: 'buttonPop 0.5s' }}>
            Back to About
          </button>
        </Link>

        <Link to="/">
          <button className="action-button" style={{ animation: 'buttonPop 0.5s' }}>
            Know Your Emotion
          </button>
        </Link>
      </div>

      {/* Chatbot Toggle Button */}
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        💬 Let's Chat
      </button>

      {/* Chatbot Frame */}
      {isChatbotVisible && (
        <div className="chatbot-container">
          <iframe
            width="350"
            height="430"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/3612eab7-f4a1-475c-aacd-8e282961f087"
          ></iframe>
        </div>
      )}

      <style>
        {`
          .chatbot-toggle {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
          }

          .chatbot-container {
            position: fixed;
            bottom: 80px;
            right: 20px;
            z-index: 1000;
            background: white;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </div>
  );
}

export default DoctorTips;
