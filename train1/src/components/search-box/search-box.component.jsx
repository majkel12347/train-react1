import React from "react";

export const SearchBox = ({ placeholder, chandleChange }) => {
  return (
    <div className="searchBox">
      <input type="search" placeholder={placeholder} onChange={chandleChange} />
    </div>
  );
};
