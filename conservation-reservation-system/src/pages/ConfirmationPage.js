import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  const { state } = useLocation();

  if (!state) {
    return <div>No reservation details found. Please go back to the home page.</div>;
  }

  return (
    <div className="confirmation">
      <h2>Reservation Confirmed</h2>
      <p>Thank you for your reservation!</p>
      <ul>
        <li><strong>Conservation Area:</strong> {state.area}</li>
        <li><strong>Date:</strong> {state.date}</li>
        <li><strong>Time Slot:</strong> {state.timeSlot}</li>
      </ul>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default ConfirmationPage;