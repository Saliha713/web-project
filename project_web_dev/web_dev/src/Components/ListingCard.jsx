import React from 'react';
import './ListingCard.css';

const ListingCard = ({ listing }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={listing.image} className="card-img-top" alt={listing.title} />
        <div className="card-body">
          <h5 className="card-title">{listing.title}</h5>
          <p className="card-text">Hosted by {listing.host}</p>
          <p>{listing.status}</p>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
