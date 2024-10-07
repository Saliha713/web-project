import React from 'react';
import './Categories.css';

const Categories = () => {
  return (
    <div className="container text-center py-4">
      <div className="row">
        <div className="col">
          <a href="#" className="navbar-brand">
            <i className="fa-solid fa-ticket" style={{ color: '#787878' }}></i>
            <span>Icons</span>
          </a>
        </div>
        <div className="col">
          <a href="#" className="navbar-brand">
            <i className="fa-solid fa-bed" style={{ color: '#787878' }}></i> 
            <span>Rooms</span>
          </a>
        </div>
        <div className="col">
          <a href="#" className="navbar-brand">
            <i className="fa-regular fa-building" style={{ color: '#787878' }}></i> 
            <span>Top cities</span>
          </a>
        </div>
        <div className="col">
          <a href="#" className="navbar-brand">
            <i className="fa-regular fa-snowflake" style={{ color: '#787878' }}></i> 
            <span>Arctic</span>
          </a>
        </div>
        <div className="col">
          <a href="#" className="navbar-brand">
            <i className="fa-solid fa-house-chimney-window" style={{ color: '#787878' }}></i> 
            <span>Countryside</span>
          </a>
        </div>
        <div className="col">
          <a href="#" className="navbar-brand">
            <i className="fa-solid fa-umbrella-beach" style={{ color: '#787878' }}></i>
            <span>Beach</span>
          </a>
        </div>
        <div className="col">
          <a href="#" className="navbar-brand">
            <i className="fa-solid fa-house-laptop" style={{ color: '#787878' }}></i>
            <span>Domes</span>
          </a>
        </div>
        <div className="col">
          <a href="#" className="navbar-brand">
            <i className="fa-solid fa-water" style={{ color: '#787878' }}></i>
            <span>Lakefront</span>
          </a>
        </div>
        <div className="col">
          <a href="#" className="navbar-brand">
            <i className="fa-solid fa-building-columns" style={{ color: '#787878' }}></i> 
            <span>Mansion</span>
          </a>
        </div>
        <div className="col">
          <a href="#" className="navbar-brand">
            <i className="fa-solid fa-chess-rook" style={{ color: '#787878' }}></i> 
            <span>Castle</span>
          </a>
        </div>
        <div className="col">
          <a href="#" className="navbar-brand">
            <i className="fa-solid fa-mountain-sun" style={{ color: '#787878' }}></i>
            <span>Amazing Views</span>
          </a>
        </div>
        <div className="col">
          <a href="#" className="navbar-brand">
            <i className="fa-solid fa-tree" style={{ color: '#787878' }}></i> 
            <span>Treehouses</span>
          </a>
        </div>
        <div className="col">
          <a href="#" className="navbar-brand">
            <i className="fa-solid fa-ship" style={{ color: '#787878' }}></i>
            <span>Islands</span>
          </a>
        </div>
        <div className="col">
          <a href="#" className="navbar-brand">
            <i className="fa-solid fa-mug-hot" style={{ color: '#787878' }}></i>
            <span> Bed and breakfast</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
