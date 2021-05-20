import react from "react";
import "./SearchBox.css";

const SearchBox = ({ handleInputChange }) => {
  return (
    <div className="search-container">
      <input
        onChange={(event) => {
          handleInputChange(event.target.value);
        }}
        type="text"
        className="search-input"
        placeholder="type some words.."
      ></input>
    </div>
  );
};

export default SearchBox;
