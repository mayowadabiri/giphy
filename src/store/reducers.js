import * as types from "./types";

const initalState = {
  gifs: [],
  gif: {
    images:{
      original : {}
    },
    url:{}
  },
  loading: false,
  error: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case types.FETCH__GIFS__START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH__GIFS__SUCCESS:
      return {
        ...state,
        loading: false,
        gifs: action.gifs,
      };
    case types.FETCH__GIFS__FAILED:
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    case types.FETCH__GIF__START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH__GIF__SUCCESS:
      return {
        ...state,
        gif: action.gif,
        loading: false,
      };
    case types.FETCH__GIF__FAILED:
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    default:
      return state;
  }
};

export default reducer;
