import React from 'react';
import './DetailsModal.css';

export default function DetailsModal({ venues, addOns, meals, numberOfPeople, onClose }) {
  const venueTotal = venues.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  const addOnsTotal = addOns.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  const mealsTotal = meals.reduce((acc, curr) => curr.selected ? acc + (curr.price * numberOfPeople) : acc, 0);
  const grandTotal = venueTotal + addOnsTotal + mealsTotal;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Conference Expense Summary</h2>
        <h3>TOTAL COST FOR THE EVENT: ₱{grandTotal}</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Unit Cost</th>
              <th>Quantity</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {venues.filter(v => v.quantity > 0).map(v => (
              <tr key={`v-${v.id}`}>
                <td>{v.name}</td>
                <td>₱{v.price}</td>
                <td>{v.quantity}</td>
                <td>₱{v.price * v.quantity}</td>
              </tr>
            ))}
            {addOns.filter(a => a.quantity > 0).map(a => (
              <tr key={`a-${a.id}`}>
                <td>{a.name}</td>
                <td>₱{a.price}</td>
                <td>{a.quantity}</td>
                <td>₱{a.price * a.quantity}</td>
              </tr>
            ))}
            {meals.filter(m => m.selected).map(m => (
              <tr key={`m-${m.id}`}>
                <td>{m.name}</td>
                <td>₱{m.price}</td>
                <td>For {numberOfPeople} people</td>
                <td>₱{m.price * numberOfPeople}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}