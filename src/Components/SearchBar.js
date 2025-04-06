import React, { useState } from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && query.trim() !== '') {
      window.open(`https://www.bing.com/search?q=${(query)}`, '_blank');
    }
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
        onKeyDown={handleKeyPress}  // eventhandler runs a function when a key is pressed down on your keyboard.
      />
      <img src="/msnlogo.png" alt="MSN logo" className="msnLogo" />
    </div>
  );
}

export default SearchBar;
