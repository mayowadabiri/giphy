import * as types from "./types";
import axios from "axios";
import {apikey} from "../apiKey"

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

// Action to fetch gifs with the search value and a limit of 12 gifs
export const fetchGifs = (search) => (dispatch) => {
  dispatch(fetchGifsStart());
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${search}&limit=12&offset=0&rating=Y&lang=en`
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

// Action to fetch a single gif by id 
export const fetchGif = (id) => (dispatch) => {
  dispatch(fetchGifStart());
  axios
    .get(
      `https://api.giphy.com/v1/gifs/${id}?api_key=${apikey}`
    )
    .then((result) => {
      dispatch(fetchGifSuccess(result.data.data));
    })
    .catch((err) => {
      dispatch(fetchGifFailed());
    });
};
