import React from "react";
import { useState } from "react";
import SearchLogo from "../assets/SearchLogo.png";
import "../css/searchbar.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="searchbar">
      <input
        id="search"
        type="search"
        name="search"
        placeholder="Where Do You Wanna Go?"
        value={search}
        onChange={(f) => setSearch(f.target.value)}
      />
      <img src={SearchLogo} className="searchIcon" alt="Search Logo" />
    </div>
  );
};

export default SearchBar;
