import React from 'react';
import './NavigationBar.css';

export default function NavigationBar({ setCurrentPage, onShowDetails }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => setCurrentPage('landing')}>
        Conference Expense Planner
      </div>
      <div className="navbar-links">
        <button onClick={() => setCurrentPage('venue')}>Venue</button>
        <button onClick={() => setCurrentPage('addons')}>Add-ons</button>
        <button onClick={() => setCurrentPage('meals')}>Meals</button>
      </div>
      <button className="show-details-btn" onClick={onShowDetails}>
        Show Details
      </button>
    </nav>
  );
}