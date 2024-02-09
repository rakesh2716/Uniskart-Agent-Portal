import { URLs } from '../../Utils/Api_urls';
import * as actionTypes from '../_types';
import axios from "axios";

const loginRequest = () => ({
    type: actionTypes.LOGIN_REQUEST,
  });
  
 const loginSuccess = (userData) => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload: userData,
  });
  
  const loginFailed = (error) => ({
    type: actionTypes.LOGIN_FAILED,
    payload: error,
  });




export const loginUser = credentials => async dispatch => {
  try {
    dispatch(loginRequest());
    const headers = {
        'Content-Type': 'application/json',
      };
    const response = await axios.post(URLs.login,credentials,{headers}) 
    const userData = response.data;
    dispatch(loginSuccess(userData));
    return userData
  } catch (error) {
    dispatch(loginFailed(error.message));
    return error
  }
};
