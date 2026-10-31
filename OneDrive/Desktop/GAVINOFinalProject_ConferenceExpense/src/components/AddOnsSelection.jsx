import React from 'react';
import './SectionStyles.css';

export default function AddOnsSelection({ addOns, setAddOns }) {
  const handleIncrement = (id) => {
    setAddOns(addOns.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const handleDecrement = (id) => {
    setAddOns(addOns.map(item => item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const totalCost = addOns.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  return (
    <div className="section-container">
      <h2>Add-ons Selection</h2>
      <div className="options-grid">
        {addOns.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} className="card-image" />
            <h3>{item.name}</h3>
            <p className="price">₱{item.price}</p>
            <div className="counter-controls">
              <button onClick={() => handleDecrement(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrement(item.id)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="total-display">
        <h3>Total Cost: ₱{totalCost}</h3>
      </div>
    </div>
  );
}