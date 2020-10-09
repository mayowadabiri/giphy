import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import classes from "./SingleGif.module.css";

const SingleGif = (props) => {
  const { params } = useRouteMatch();

  useEffect(() => {
    props.onfetchGif(params.id);
  }, []);
  const { images, title } = props.gif;
  const { avatar_url, username, profile_url, display_name } =
        props.gif.user || "";
    console.log(props.gif)
  return (
    <section className={classes.single__section}>
      <div className={classes.gif__row}>
        <div className={classes.gif__user}>
          <img
            src={avatar_url}
            alt={username}
            className={classes.gif__user__img}
          />
          <p className={classes.gif__user__username}>@{username}</p>
          <a className={classes.gif__user__link} href={profile_url}>Know more about {username} &rarr;</a>
        </div>
        <div className={classes.gif__container}>
          <img
            src={images.original.url}
            alt={title}
            className={classes.gif__img}
          />
          <h3 className={["heading", classes.gif__text].join(" ")}>{title}</h3>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    gif: state.gif.gif,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onfetchGif: (id) => {
      dispatch(actions.fetchGif(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleGif);
