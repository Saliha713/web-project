import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import Navbar from './Components/Navbar.jsx';
import SearchBar from './Components/SearchBar.jsx';
import Categories from './Components/Categories.jsx';
import ListingGallery from './Components/ListingGallery.jsx'; 
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer.jsx';

import './App.css';

const App = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Fetch mock listing data (if using a real API or mock JSON file)
    const fetchListings = async () => {
      const response = await fetch('mock-listings.json'); // Use a mock file or API
      const data = await response.json();
      setListings(data);
    };
    fetchListings();
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Airbnb</title>
        {/* Bootstrap CSS */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="mmksjc.css" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap" rel="stylesheet" />
      </Helmet>
      <Navbar />
      <SearchBar />
      <Categories />
      
      {/* Pass listings as a prop to ListingGallery if needed */}
      <ListingGallery listings={listings} /> 
      <Testimonials /> 
      <Footer />
    </div>
  );
};

export default App;
