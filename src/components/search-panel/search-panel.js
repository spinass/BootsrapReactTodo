import React from "react";

import "./search-panel.css";

const SearchPanel = () => {
  let searchText = "Iveskite teksta";
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder={searchText}
    />
  );
};

export default SearchPanel;
