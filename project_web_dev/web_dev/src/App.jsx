import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar.jsx';
import Categories from './Components/Categories';
import ListingCard from './Components/ListingCard';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Fetch mock listing data
    const fetchListings = async () => {
      const response = await fetch('mock-listings.json'); // Use a mock file or API
      const data = await response.json();
      setListings(data);
    };
    fetchListings();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Categories />
      <div className="listing-grid">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
