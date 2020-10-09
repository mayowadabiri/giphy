import React, { useState } from "react";
import classes from "./SearchGIF.module.css";
import Search from "../Search/Search";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import GIFItems from "../GIFItems/GIFItems";
import Modal from "../../components/Modal/Modal";

const SearchGIF = (props) => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);

  const changeHandler = ({ target }) => {
    setValue(target.value);
  };

  // function to fetch all gifs by search value
  const fetchGifHandler = (event) => {
    event.preventDefault();
    setValue("");
    props.onfetchGifs(value);
    setShow(true);
  };

  const modal = props.onLoad ? <Modal show={show}>Loading gifs</Modal> : null;

  return (
    <>
      {modal}
      <div className={classes.search__gif}>
        <h3 className={["heading", classes.search__content].join(" ")}>
          Search Your Favourite GIF Now
        </h3>
        <Search
          value={value}
          changeValue={changeHandler}
          gifFetch={fetchGifHandler}
        />
        <div className={classes.gifs__container}>
          <GIFItems />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    onLoad: state.gif.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onfetchGifs: (value) => {
      dispatch(actions.fetchGifs(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchGIF);
