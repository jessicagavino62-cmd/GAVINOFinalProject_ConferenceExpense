import React from 'react';
import './MealsSelection.css';

export default function MealsSelection({ meals, setMeals, numberOfPeople, setNumberOfPeople }) {
  const handleCheckboxChange = (id) => {
    setMeals(meals.map(m => m.id === id ? { ...m, selected: !m.selected } : m));
  };

  const totalCost = meals.reduce((acc, curr) => {
    return curr.selected ? acc + (curr.price * numberOfPeople) : acc;
  }, 0);

  return (
    <div className="meals-section-wrapper">
      {/* Dark Blue Header Banner */}
      <div className="meals-header-banner">
        <h2>Meals Selection</h2>
      </div>

      <div className="meals-body-content">
        {/* Number of People Input */}
        <div className="meals-people-container">
          <label htmlFor="people-input">Number of People: </label>
          <input 
            id="people-input"
            type="number" 
            min="0" 
            value={numberOfPeople} 
            onChange={(e) => setNumberOfPeople(parseInt(e.target.value) || 0)} 
          />
        </div>

        {/* 2x2 Meals Grid Alignment */}
        <div className="meals-custom-grid">
          {meals.map(meal => (
            <div key={meal.id} className="meal-option-card">
              <div className="meal-top-row">
                <input 
                  type="checkbox" 
                  checked={meal.selected} 
                  onChange={() => handleCheckboxChange(meal.id)} 
                />
                <span className="meal-label-name">{meal.name}</span>
              </div>
              <div className="meal-bottom-row">
                <span className="meal-label-price">${meal.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Total Cost Display Box */}
        <div className="meals-total-box">
          <h3>Total Cost: ${totalCost}</h3>
        </div>
      </div>
    </div>
  );
}
