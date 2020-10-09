import React from "react";
import { Link } from "react-router-dom";
import classes from "./GIFItem.module.css";

const GifItem = ({ gifSrc, title, gifId }) => {
  return (
    <div className={classes.gif}>
      <img src={gifSrc} alt={title} />
      <Link className={classes.btn} to={`/gif/${gifId}`}>
        View details
      </Link>
    </div>
  );
};

export default GifItem;
