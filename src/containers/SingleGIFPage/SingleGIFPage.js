import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import classes from "./SingleGif.module.css";
import Modal from "../../components/Modal/Modal";

const SingleGif = (props) => {
  const { params } = useRouteMatch();
  const [show, setShow] = useState(false);

  // Fetch a single gif on component mounting
  useEffect(() => {
    props.onfetchGif(params.id);
    setShow(true);
  }, []);

  const { images, title } = props.gif;
  const { avatar_url, username, profile_url } = props.gif.user || "";

  const modal = props.onLoad ? (
    <Modal show={show}>Loading gifs</Modal>
  ) : (
    <section className={classes.single__section}>
        <div className={classes.gif__row}>
          
          {/* Not all single gifs have the user object, so in such case, only the gif container should be displayed */}
        {props.gif.user ? (
          <div className={classes.gif__user}>
            <img
              src={avatar_url}
              alt={username}
              className={classes.gif__user__img}
            />
            <p className={classes.gif__user__username}>@{username}</p>
            <a className={classes.gif__user__link} href={profile_url}>
              Know more about {username} &rarr;
            </a>
          </div>
        ) : null}
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

  return <>{modal}</>;
};

const mapStateToProps = (state) => {
  return {
    gif: state.gif.gif,
    onLoad: state.gif.loading,
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
