import React from "react";
import "./Searchbar.scss";

const Searchbar = ({ setQuery }) => {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const focusSearch = () => {
    document.getElementsByClassName("search-input")[0].focus();
  };
  return (
    <div className="search">
      <button className="search-button" onMouseEnter={focusSearch}>
        <i class="fas fa-search"></i>
      </button>
      <input
        className="search-input"
        placeholder="Sports, entertainment, politics..."
        onChange={handleChange}
      />
    </div>
  );
};

export default Searchbar;
