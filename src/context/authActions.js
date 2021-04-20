import {
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../constants/actionTypes.js';
import axiosInstance from '../helpers/api';

export default ({email, phone, name, state, password, role}) => (dispatch) => {
  dispatch({
    type: REGISTER_LOADING,
  });

  const data = {email, phone, name, state, password, role};
  axiosInstance
    .post('/auth/register', data)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAIL,
        payload: err ? err.response.data.message : 'Something went wrong',
      });
    });
};
