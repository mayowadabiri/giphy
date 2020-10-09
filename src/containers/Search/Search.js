import React from "react";
import classes from "./Search.module.css";

const Search = ({ value, changeValue, gifFetch }) => {
  return (
    <form className={classes.search}>
      <input
        value={value}
        onChange={changeValue}
        className={classes.search__input}
        placeholder="Search"
      />
      <button type="submit" className={classes.button} onClick={gifFetch}>
        Search
      </button>
    </form>
  );
};

export default Search;
