import React from 'react';
import './Testimonials.css'; // Import the CSS file

const Testimonials = () => {
  return (
    <div className="container py-5 bg-light">
      <div className="row">
        <div className="col-md-4">
          <h5>Support</h5>
          <ul className="list-unstyled testimonial-links">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">AirCover</a></li>
            <li><a href="#">Anti-discrimination</a></li>
            <li><a href="#">Disability support</a></li>
            <li><a href="#">Cancellation options</a></li>
            <li><a href="#">Report neighborhood concern</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Hosting</h5>
          <ul className="list-unstyled testimonial-links">
            <li><a href="#">Airbnb your home</a></li>
            <li><a href="#">AirCover for Hosts</a></li>
            <li><a href="#">Hosting resources</a></li>
            <li><a href="#">Community forum</a></li>
            <li><a href="#">Hosting responsibly</a></li>
            <li><a href="#">Airbnb-friendly apartments</a></li>
            <li><a href="#">Join a free Hosting class</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Airbnb</h5>
          <ul className="list-unstyled testimonial-links">
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">New features</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Gift cards</a></li>
            <li><a href="#">Airbnb.org emergency stays</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
