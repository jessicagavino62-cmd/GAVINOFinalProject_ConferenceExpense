import React, { useState } from 'react';
import './App.css';

const burgerList = [
  {
    id: 1,
    name: "Classic Cheese Blast",
    price: 99.15,
    rating: "★★★★★",
    description: "pickles, coleslaw, juicy beef patty, melted cheese, special sauce",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600"
  },
  {
    id: 2,
    name: "Crispy Chicken",
    price: 99.15,
    rating: "★★★★★",
    description: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=600"
  },
  {
    id: 3,
    name: "Ultimate Bacon",
    price: 99.32,
    rating: "★★★★½",
    description: "House patty, cheddar cheese, bacon, onion, mustard",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600"
  }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [selectedBurger, setSelectedBurger] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (burger) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === burger.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === burger.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...burger, quantity: 1 }];
    });
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="dark-theme">
      {/* Header */}
      <header className="header">
        <h1 className="logo-title">Tasty Burger</h1>
        <div className="cart-badge-container" onClick={() => setIsCartOpen(!isCartOpen)}>
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{totalCartCount}</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="main-title">OUR CRAZY<br />BURGERS</h1>
        <p className="description">
          Get ready for a wild ride of flavors! Our crazy burgers are loaded with juicy patties, bold toppings, and irresistible sauces, all stacked on a perfectly toasted bun. Whether you like it cheesy, or extra meaty, we've got a burger that will blow your mind!
        </p>
      </section>

      {/* Main Grid Area (Buong lapad na ang mga burger) */}
      <div className="content-container">
        <main className="burger-grid">
          {burgerList.map((burger) => (
            <div key={burger.id} className="burger-card">
              <div className="image-container" onClick={() => setSelectedBurger(burger)}>
                <img src={burger.image} alt={burger.name} />
                <button className="favorite-btn" onClick={(e) => e.stopPropagation()}>
                  ♥️
                </button>
              </div>

              <div className="card-body">
                <div className="stars">{burger.rating}</div>
                <h3 className="burger-name">{burger.name}</h3>
                <p className="burger-desc">{burger.description}</p>
                
                <div className="card-action">
                  <span className="price-tag">₱{burger.price.toFixed(2)}</span>
                  <button className="add-order-btn" onClick={() => addToCart(burger)}>
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>

      {/* Floating / Sliding Mini Cart sa Itaas-Kanang Gilid kapag clinicick ang Cart Icon */}
      {isCartOpen && (
        <div className="cart-dropdown-modal">
          <div className="mini-cart-dropdown">
            <div className="cart-header">
              <h3>Your Order</h3>
              <button className="close-cart" onClick={() => setIsCartOpen(false)}>&times;</button>
            </div>
            
            {cart.length === 0 ? (
              <p className="empty-msg">Wala pang nakalagay sa iyong order</p>
            ) : (
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div>
                      <h4>{item.name}</h4>
                      <p>₱{item.price.toFixed(2)} × {item.quantity}</p>
                    </div>
                    <span>₱{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <hr className="divider" />
                <div className="cart-total">
                  <span>Total:</span>
                  <span>₱{totalPrice.toFixed(2)}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal Popup para sa Description ng Burger */}
      {selectedBurger && (
        <div className="modal-overlay" onClick={() => setSelectedBurger(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedBurger(null)}>&times;</button>
            <img src={selectedBurger.image} alt={selectedBurger.name} />
            <h2>{selectedBurger.name}</h2>
            <div className="stars">{selectedBurger.rating}</div>
            <p className="modal-desc">{selectedBurger.description}</p>
            <div className="modal-footer">
              <span className="price-tag">₱{selectedBurger.price.toFixed(2)}</span>
              <button 
                className="add-order-btn"
                onClick={() => {
                  addToCart(selectedBurger);
                  setSelectedBurger(null);
                }}
              >
                Add to Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}