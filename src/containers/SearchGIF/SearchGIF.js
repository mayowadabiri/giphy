import React, { useState } from "react";
import classes from "./SearchGIF.module.css";
import Search from "../Search/Search";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import GIFItems from "../GIFItems/GIFItems";

const SearchGIF = (props) => {
  const [value, setValue] = useState("");

  const changeHandler = ({ target }) => {
    setValue(target.value);
  };

  const fetchGifHandler = (event) => {
    event.preventDefault();
    setValue("");
    props.onfetchGifs(value);
  };
  return (
    <div className={classes.search__gif}>
      <h3 className={["heading", classes.search__content].join(" ")}>Search Your Favourite GIF Now</h3>
      <Search
        value={value}
        changeValue={changeHandler}
        gifFetch={fetchGifHandler}
      />
      <div className={classes.gifs__container}>
        <GIFItems />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onfetchGifs: (value) => {
      dispatch(actions.fetchGifs(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(SearchGIF);
