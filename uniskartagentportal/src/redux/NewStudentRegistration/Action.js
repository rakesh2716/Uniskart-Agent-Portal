import { URLs } from '../../Utils/Api_urls';
import * as actionTypes from '../_types';
import axios from "axios";

const newStudentRequest = () => ({
    type: actionTypes.NEW_STUDENT_REQUEST,
  });
  
 const newStudentSuccess = (userData) => ({
    type: actionTypes.NEW_STUDENT_SUCCESS,
    payload: userData,
  });
  
  const newStudentFailed = (error) => ({
    type: actionTypes.NEW_STUDENT_FAILED,
    payload: error,
  });




export const newStudentRegister = obj => async dispatch => {
  try {
    dispatch(newStudentRequest());
    const headers = {
        'Content-Type': 'application/json',
      };
    const response = await axios.post(URLs.newStudent,obj,{headers}) 
    const student = response.data;
    dispatch(newStudentSuccess(student));
    return student
  } catch (error) {
    dispatch(newStudentFailed(error.message));
    return error
  }
};
