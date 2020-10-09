import * as types from "./types";
import axios from "axios";

export const fetchGifsStart = () => {
  return {
    type: types.FETCH__GIFS__START,
  };
};

export const fetchGifsSuccess = (gifs) => {
  return {
    type: types.FETCH__GIFS__SUCCESS,
    gifs,
  };
};

export const fetchGifsFailed = () => {
  return {
    type: types.FETCH__GIFS__FAILED,
  };
};

export const fetchGifs = (search) => (dispatch) => {
  dispatch(fetchGifsStart());
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=eEfp97DSK86cvbquGuAjOqAvL0Y0tbQK&q=${search}&limit=10&offset=0&rating=Y&lang=en`
    )
    .then((result) => {
      dispatch(fetchGifsSuccess(result.data.data));
    })
    .catch((err) => {
      dispatch(fetchGifsFailed(err.response));
    });
};

export const fetchGifStart = () => {
  return {
    type: types.FETCH__GIF__START,
  };
};

export const fetchGifSuccess = (gif) => {
  return {
    type: types.FETCH__GIF__SUCCESS,
    gif,
  };
};

export const fetchGifFailed = () => {
  return {
    type: types.FETCH__GIF__FAILED,
  };
};

export const fetchGif = (id) => (dispatch) => {
  dispatch(fetchGifStart());
  axios
    .get(
      `https://api.giphy.com/v1/gifs/${id}?api_key=eEfp97DSK86cvbquGuAjOqAvL0Y0tbQK&`
    )
    .then((result) => {
      dispatch(fetchGifSuccess(result.data.data));
    })
    .catch((err) => {
      dispatch(fetchGifFailed());
    });
};
