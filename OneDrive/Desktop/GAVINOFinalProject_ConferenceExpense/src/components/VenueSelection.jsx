import React from 'react';
import './SectionStyles.css';

export default function VenueSelection({ venues, setVenues }) {
  const handleIncrement = (id) => {
    setVenues(venues.map(v => v.id === id ? { ...v, quantity: v.quantity + 1 } : v));
  };

  const handleDecrement = (id) => {
    setVenues(venues.map(v => v.id === id && v.quantity > 0 ? { ...v, quantity: v.quantity - 1 } : v));
  };

  const totalCost = venues.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  return (
    <div className="section-container">
      <h2>Venue Room Selection</h2>
      <div className="options-grid">
        {venues.map(venue => (
          <div key={venue.id} className="card">
            <img src={venue.image} alt={venue.name} className="card-image" />
            <h3>{venue.name}</h3>
            <p className="price">₱{venue.price}</p>
            <div className="counter-controls">
              <button onClick={() => handleDecrement(venue.id)}>-</button>
              <span>{venue.quantity}</span>
              <button onClick={() => handleIncrement(venue.id)}>+</button>
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