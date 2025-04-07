import React, { useState } from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5001/api/search?q=${query}`);
      if (response.data.url) {
        window.open(response.data.url, '_blank');
      }
    } catch (error) {
      alert("No result found for your keyword.");
      console.log(error.message);
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
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(e);
            }
          }}        
        />
        <img src="/msnlogo.png" alt="MSN logo" className="msnLogo" />
    </div>
  );
}

export default SearchBar;