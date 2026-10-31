import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import NavigationBar from './components/NavigationBar';
import VenueSelection from './components/VenueSelection';
import AddOnsSelection from './components/AddOnsSelection';
import MealsSelection from './components/MealsSelection';
import DetailsModal from './components/DetailsModal';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [venues, setVenues] = useState([
    { id: 1, name: 'Conference Room (Capacity: 15)', price: 1500, quantity: 0, image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4' },
    { id: 2, name: 'Auditorium Hall (Capacity: 200)', price: 5500, quantity: 0, image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2' },
    { id: 3, name: 'Presentation Room (Capacity: 50)', price: 3500, quantity: 0, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c' },
    { id: 4, name: 'Large Meeting Room (Capacity: 10)', price: 1000, quantity: 0, image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1' },
    { id: 5, name: 'Small Meeting Room (Capacity: 5)', price: 800, quantity: 0, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf' }
  ]);

  const [addOns, setAddOns] = useState([
    { id: 1, name: 'Projectors', price: 200, quantity: 0, image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97' },
    { id: 2, name: 'Speaker', price: 35, quantity: 0, image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d' },
    { id: 3, name: 'Microphones', price: 45, quantity: 0, image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc' },
    { id: 4, name: 'Whiteboards', price: 80, quantity: 0, image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12' },
    { id: 5, name: 'Signage', price: 80, quantity: 0, image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3' }
  ]);

  const [meals, setMeals] = useState([
    { id: 1, name: 'Breakfast', price: 50, selected: false, image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666' },
    { id: 2, name: 'High Tea', price: 25, selected: false, image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3' },
    { id: 3, name: 'Lunch', price: 65, selected: false, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5' },
    { id: 4, name: 'Dinner', price: 70, selected: false, image: 'https://images.unsplash.com/photo-1544025162-d76694265947' }
  ]);
   
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app-container">
      {currentPage === 'landing' ? (
        <LandingPage onGetStarted={() => setCurrentPage('venue')} />
      ) : (
        <>
          <NavigationBar 
            setCurrentPage={setCurrentPage} 
            onShowDetails={() => setShowModal(true)} 
          />
          <div className="main-content">
            {currentPage === 'venue' && (
              <VenueSelection venues={venues} setVenues={setVenues} />
            )}
            {currentPage === 'addons' && (
              <AddOnsSelection addOns={addOns} setAddOns={setAddOns} />
            )}
            {currentPage === 'meals' && (
              <MealsSelection 
                meals={meals} 
                setMeals={setMeals} 
                numberOfPeople={numberOfPeople} 
                setNumberOfPeople={setNumberOfPeople} 
              />
            )}
          </div>
        </>
      )}

      {showModal && (
        <DetailsModal 
          venues={venues} 
          addOns={addOns} 
          meals={meals} 
          numberOfPeople={numberOfPeople} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </div>
  );
}