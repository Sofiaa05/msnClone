import React from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  return (

    <div className="search-bar-container">
        <FaSearch className="search-icon" />
        <input
            type="text"
            className="search-input"
            placeholder="Search the web"
        />
        <img src="/msnlogo.png" alt="MSN logo" className="msnLogo" />

    </div>
  );
}

export default SearchBar;
