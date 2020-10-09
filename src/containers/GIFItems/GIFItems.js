import classes from "./GIFItems.module.css";
import React from "react";
import { connect } from "react-redux";
import GIFItem from "../../components/GIFItem/GIFItem";

const GIFItems = (props) => {
  return (
    <div className={classes.gifs}>
      {props.gifs.map((gif) => (
        <GIFItem
          gifSrc={gif.images.original.url}
          title={gif.title}
          key={gif.id}
          gifId={gif.id}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    gifs: state.gif.gifs,
  };
};
export default connect(mapStateToProps)(GIFItems);
