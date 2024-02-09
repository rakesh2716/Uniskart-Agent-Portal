
import { URLs } from '../../Utils/Api_urls';
import * as actionTypes from '../_types';
import axios from "axios";

const stateRequest = () => ({
    type: actionTypes.GET_ALL_STATE_REQUEST,
  });
  
 const stateSuccess = (userData) => ({
    type: actionTypes.GET_ALL_STATE_SUCCESS,
    payload: userData,
  });
  
  const stateFailed = (error) => ({
    type: actionTypes.GET_ALL_STATE_FAILED,
    payload: error,
  });




export const getStatesApi = quary => async dispatch => {
  try {
    dispatch(stateRequest());
    const headers = {
        'Content-Type': 'application/json',
      };
    const response = await axios.get(URLs.getState(quary),{headers}) 
    const userData = response.data;
    dispatch(stateSuccess(userData));
    return userData
  } catch (error) {
    dispatch(stateFailed(error.message));
  }
};
