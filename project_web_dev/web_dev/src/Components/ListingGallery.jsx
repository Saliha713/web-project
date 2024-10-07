import React from 'react';
import ListingCard from './ListingCard.jsx';

const listings = [
  {
    image: 'listing1.webp',
    title: "Stay in Prince's Purple Rain house",
    host: 'Wendy and Lisa',
    status: 'Coming September',
  },
  {
    image: 'listing2.webp',
    title: "Sleepover at Polly's Pocket Compact",
    host: 'Polly Pocket',
    status: 'Booking closed',
  },
  {
    image: 'listing3.webp',
    title: "Playdate at Polly's Pocket Compact",
    host: 'Polly Pocket',
    status: 'Booking closed',
  },
  {
    image: 'listing4.webp',
    title: 'Go VIP with Kevin Hart',
    host: 'Kevin Hart',
    status: 'Sold out',
  },
  {
    image: 'listing5.webp',
    title: 'Train at the X-Mansion',
    host: 'Jubilee',
    status: 'Sold out',
  },
];

const ListingGallery = () => {
  return (
    <div className="container py-5">
      <div className="row">
        {listings.map((listing, index) => (
          <ListingCard key={index} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default ListingGallery;
