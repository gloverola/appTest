import {
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../constants/actionTypes.js';
import axiosInstance from '../helpers/api';

export default ({email, phone, state, password, first_name, last_name}) => (
  dispatch,
) => {
  dispatch({
    type: REGISTER_LOADING,
  });

  const data = {
    email,
    phone,
    first_name,
    last_name,
    state,
    password,
    role: 'user',
  };
  axiosInstance
    .post('/auth/register', data)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log('@err>>>', err.response.data.message);
      dispatch({
        type: REGISTER_FAIL,
        payload: err ? err.response.data.message : 'Something went wrong',
      });
    });
};
