  import React, { useState } from "react";
  import "./SearchBar.css";

  export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          const results = json.filter((user) => {
            return (
              value &&
              user &&
              user.name &&
              user.name.toLowerCase().includes(value)
            );
          });
          setResults(results)
        });
    };

    const handleChange = (value) => {
      setInput(value);
      fetchData(value);
    };

    return (
      <div className="input-wrapper">
        <i class="fa-solid fa-magnifying-glass" id="search-icon"></i>
        <input
          type="text"
          name=""
          id=""
          placeholder="Type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    );
  };

  export default SearchBar;
