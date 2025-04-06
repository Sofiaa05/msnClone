import React, { useState } from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <FaSearch className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Search the web"
        value={query}
        onChange={handleInputChange}
      />
      <img src="/msnlogo.png" alt="MSN logo" className="msnLogo" />
    </div>
  );
}

export default SearchBar;
