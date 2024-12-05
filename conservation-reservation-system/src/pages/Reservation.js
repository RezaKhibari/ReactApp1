import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Reservation.css';

const Reservation = () => {
  const [reservationDetails, setReservationDetails] = useState({
    area: '',
    date: '',
    timeSlot: '',
  });
  const navigate = useNavigate();

  const timeSlots = ['9:00 AM - 12:00 PM', '12:00 PM - 3:00 PM', '3:00 PM - 6:00 PM'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reservationDetails.area && reservationDetails.date && reservationDetails.timeSlot) {
      navigate('/confirmation', { state: reservationDetails });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="reservation">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select Conservation Area:
          <select
            value={reservationDetails.area}
            onChange={(e) =>
              setReservationDetails({ ...reservationDetails, area: e.target.value })
            }
          >
            <option value="">-- Choose an area --</option>
            <option value="Forest Preserve">Forest Preserve</option>
            <option value="Wetlands Reserve">Wetlands Reserve</option>
            <option value="Mountain Trail">Mountain Trail</option>
            <option value="Lake View Park">Lake View Park</option>
          </select>
        </label>
        <label>
          Select Date:
          <input
            type="date"
            value={reservationDetails.date}
            onChange={(e) =>
              setReservationDetails({ ...reservationDetails, date: e.target.value })
            }
          />
        </label>
        <label>
          Select Time Slot:
          <select
            value={reservationDetails.timeSlot}
            onChange={(e) =>
              setReservationDetails({ ...reservationDetails, timeSlot: e.target.value })
            }
          >
            <option value="">-- Choose a time slot --</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Confirm Reservation</button>
      </form>
    </div>
  );
};

export default Reservation;