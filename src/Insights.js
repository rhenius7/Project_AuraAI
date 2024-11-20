// Insights.js
import React from 'react';
import emotionInsights from './emotionInsights';
import './Insights.css'; // Import styling for the Insights component

const Insights = ({ currentEmotion }) => {
  return (
    <div className="insights">
      <h2>Insights for {currentEmotion.charAt(0).toUpperCase() + currentEmotion.slice(1)}</h2>
      <ul>
        {emotionInsights[currentEmotion]?.map((insight, index) => (
          <li key={index}>{insight}</li>
        ))}
      </ul>
    </div>
  );
};

export default Insights;
