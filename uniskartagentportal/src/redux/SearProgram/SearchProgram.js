
import { URLs } from '../../Utils/Api_urls';
import * as actionTypes from '../_types';
import axios from "axios";

const searchProgramRequest = () => ({
    type: actionTypes.SEARCH_PROGRAM_REQUEST,
  });
  
 const searchProgramSuccess = (userData) => ({
    type: actionTypes.SEARCH_PROGRAM_SUCCESS,
    payload: userData,
  });
  
  const searchProgramFailed = (error) => ({
    type: actionTypes.SEARCH_PROGRAM_FAILED,
    payload: error,
  });




export const searchProgramApi = quary => async dispatch => {
  try {
    dispatch(searchProgramRequest());
    const headers = {
        'Content-Type': 'application/json',
      };
    const response = await axios.get(URLs.searchApi(quary),{headers}) 
    const userData = response.data;
    dispatch(searchProgramSuccess(userData));
  } catch (error) {
    dispatch(searchProgramFailed(error.message));
  }
};
