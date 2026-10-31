import React from 'react';
import AnswerOption from './AnswerOption';

export default function QuestionCard({ question, currentQuestionIndex, totalQuestions, selectedAnswer, onSelectAnswer }) {
  return (
    <div className="question-card">
      <div className="question-number-header">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </div>
      <h3 className="question-text">{question.questionText}</h3>
      <div className="choices-container">
        {question.choices.map((choice, index) => (
          <AnswerOption 
            key={index}
            choice={choice}
            isSelected={selectedAnswer === choice}
            onSelect={() => onSelectAnswer(choice)}
          />
        ))}
      </div>
    </div>
  );
}