import {
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../constants/actionTypes.js';

export const authInitialState = {
  isAuthenticated: false,
  error: null,
  loading: false,
  data: null,
};

const authReducer = (state, {type, payload}) => {
  switch (type) {
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default authReducer;
