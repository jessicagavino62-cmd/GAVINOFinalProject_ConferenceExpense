import React from 'react';

export default function AnswerOption({ choice, isSelected, onSelect }) {
  return (
    <div 
      className={`answer-option ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <input 
        type="radio" 
        checked={isSelected} 
        onChange={() => {}} 
      />
      <span>{choice}</span>
    </div>
  );
}
