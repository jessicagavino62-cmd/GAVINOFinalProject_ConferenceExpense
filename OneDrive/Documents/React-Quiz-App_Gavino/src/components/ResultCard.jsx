import React from 'react';

export default function ResultCard({ score, totalQuestions, onRestart, onHome }) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="result-card">
      <h2>Quiz Completed</h2>
      <div className="score-display">
        Your score: <span>{score} / {totalQuestions}</span>
      </div>
      <p>Percentage: {percentage}%</p>
      <div className="result-buttons">
        <button className="btn-primary" onClick={onRestart}>Retake Quiz</button>
        <button className="btn-secondary" onClick={onHome}>Return Home</button>
      </div>
    </div>
  );
}