import React, { useState } from 'react';
import { questionsData } from './questions';
import QuestionCard from './components/QuestionCard';
import ResultCard from './components/ResultCard';
import './App.css';

export default function App() {
  const [gameState, setGameState] = useState('home'); // 'home', 'quiz', 'result'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);

  // Start Quiz
  const handleStartQuiz = () => {
    setGameState('quiz');
    setCurrentIndex(0);
    setSelectedAnswers({});
    setScore(0);
  };

  // Select Answer for current question
  const handleSelectAnswer = (choice) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIndex]: choice
    });
  };

  // Next / Submit Button Action
  const handleNext = () => {
    // Check if correct and calculate score at the end or per question
    const currentQuestion = questionsData[currentIndex];
    let currentScore = score;
    
    // Calculate total score dynamically before finishing
    if (currentIndex === questionsData.length - 1) {
      let finalScore = 0;
      questionsData.forEach((q, index) => {
        if (selectedAnswers[index] === q.correctAnswer) {
          finalScore += 1;
        }
      });
      setScore(finalScore);
      setGameState('result');
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="app-container">
      {gameState === 'home' && (
        <div className="home-page">
          <h1>Welcome to the Frontend Quiz!</h1>
          <p>Test your knowledge with multiple-choice questions.</p>
          <button className="btn-primary" onClick={handleStartQuiz}>
            Start Quiz
          </button>
        </div>
      )}

      {gameState === 'quiz' && (
        <div className="quiz-page">
          <QuestionCard 
            question={questionsData[currentIndex]}
            currentQuestionIndex={currentIndex}
            totalQuestions={questionsData.length}
            selectedAnswer={selectedAnswers[currentIndex]}
            onSelectAnswer={handleSelectAnswer}
          />
          <button 
            className="btn-primary submit-btn"
            disabled={!selectedAnswers[currentIndex]}
            onClick={handleNext}
          >
            {currentIndex === questionsData.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      )}

      {gameState === 'result' && (
        <ResultCard 
          score={score}
          totalQuestions={questionsData.length}
          onRestart={handleStartQuiz}
          onHome={() => setGameState('home')}
        />
      )}
    </div>
  );
}