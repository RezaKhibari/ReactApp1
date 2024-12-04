import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState('reserve'); // Tracks active tab

  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to the Conservation Area Reservation System</h1>
        <p>Reserve your time slot to explore and enjoy the beauty of nature!</p>
      </header>
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'reserve' ? 'active' : ''}`}
          onClick={() => setActiveTab('reserve')}
        >
          Reserve Now
        </button>
        <button
          className={`tab ${activeTab === 'info' ? 'active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          About the Areas
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'reserve' && (
          <div className="reserve-tab">
            <h2>Start Your Reservation</h2>
            <p>Click the button below to reserve your visit.</p>
            <Link to="/reservation" className="btn btn-primary">
              Reserve Now
            </Link>
          </div>
        )}
        {activeTab === 'info' && (
          <div className="info-tab">
            <h2>About the Conservation Areas</h2>
            <p>
              Explore the beauty of four unique conservation areas, each offering stunning
              natural landscapes, wildlife, and opportunities for relaxation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;