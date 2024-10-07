import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  const handleSearch = () => {
    console.log(`Location: ${location}, Check-in: ${checkIn}, Check-out: ${checkOut}, Guests: ${guests}`);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="search-bar-container">
            <button
              className="btn search-btn search-destination"
              onClick={() => setLocation(prompt("Enter location"))}
            >
              <b>Where</b><br />Search destinations
            </button>
            <button
              className="btn search-btn search-checkin"
              onClick={() => setCheckIn(prompt("Enter check-in date"))}
            >
              <b>Check in</b><br />Add dates
            </button>
            <button
              className="btn search-btn search-checkout"
              onClick={() => setCheckOut(prompt("Enter check-out date"))}
            >
              <b>Check out</b><br />Add dates
            </button>
            <button
              className="btn search-btn search-guests"
              onClick={() => setGuests(prompt("Enter number of guests"))}
            >
              <b>Who</b><br />Add guests
            </button>
            <button className="btn btn-danger search-btn-icon" onClick={handleSearch}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
