import React from 'react';
import './ListingCard.css';

const ListingCard = ({ listing }) => {
  return (
    <div className="listing-card">
      <img src={listing.image} alt={listing.title} />
      <h3>{listing.title}</h3>
      <p>{listing.type}</p>
      <p>Guests: {listing.guests} Bedrooms: {listing.bedrooms} Bathrooms: {listing.bathrooms}</p>
      <p>Price: ${listing.price}/night</p>
      <p>Rating: {listing.rating}</p>
    </div>
  );
};

export default ListingCard;
