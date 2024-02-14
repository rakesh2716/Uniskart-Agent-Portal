import { URLs } from '../../Utils/Api_urls';
import * as actionTypes from '../_types';
import axios from "axios";

const newStudentRequest = () => ({
    type: actionTypes.NEW_STUDENT_REQUEST,
  });
  
 const newStudentSuccess = (res) => ({
    type: actionTypes.NEW_STUDENT_SUCCESS,
    payload: res,
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




/* get student action */

const getStudentsReq = () => ({
  type: actionTypes.GET_ALL_STUDENT_REQUEST,
});

const getStudentsSuccess = (students) =>{

  return{
    type: actionTypes.GET_ALL_STUDENT_SUCCESS,
    payload: students,
  }
} 

const getStudentsFailed = (error) => ({
  type: actionTypes.GET_ALL_STUDENT_FAILED,
  payload: error,
});




export const getStudents = () => async dispatch => {
try {
  dispatch(getStudentsReq());
  const headers = {
      'Content-Type': 'application/json',
    };
  const response = await axios.get(URLs.getAllStudent,{headers}) 
  const student = response.data;

  dispatch(getStudentsSuccess(student));
  return student
} catch (error) {
  dispatch(getStudentsFailed(error.message));
  return error
}
};


const StudentInfoReq = () => ({
  type: actionTypes.STUDENT_INFO_REQUEST,
});

const StudentInfoSuccess = (students) =>{

  return{
    type: actionTypes.STUDENT_INFO_SUCCESS,
    payload: students,
  }
} 

const StudentInfoFailed = (error) => ({
  type: actionTypes.STUDENT_INFO_FAILED,
  payload: error,
});




export const studentInfo = (obj) => async dispatch => {
try {
  dispatch(StudentInfoReq());
  const headers = {
      'Content-Type': 'application/json',
    };
  const response = await axios.post(URLs.saveStudentInfo,obj,{headers}) 
  const student = response.data;

  dispatch(StudentInfoSuccess(student));
  return student
} catch (error) {
  dispatch(StudentInfoFailed(error.message));
  return error
}
};


const getStudentDataByIdReq = () => ({
  type: actionTypes.GET_STUDENT_DATA_BY_ID_REQUEST,
});

const getStudentDataByIdSuccess = (students) =>{

  return{
    type: actionTypes.GET_STUDENT_DATA_BY_ID_SUCCESS,
    payload: students,
  }
} 

const getStudentDataByIdFailed = (error) => ({
  type: actionTypes.GET_STUDENT_DATA_BY_ID_FAILED,
  payload: error,
});




export const getSingleStudentData = (id) => async dispatch => {
try {
  dispatch(getStudentDataByIdReq());
  const headers = {
      'Content-Type': 'application/json',
    };
  const response = await axios.get(URLs.getStudentInfobyId(id),{headers}) 
  const student = response.data;
  dispatch(getStudentDataByIdSuccess(student));
  return student
} catch (error) {
  dispatch(getStudentDataByIdFailed(error.message));
  return error
}
};


const updateStudentInfoReq = () => ({
  type: actionTypes.UPDATE_STUDENT_INFO_REQUEST,
});

const updateStudentInfoSuccess = (students) =>{

  return{
    type: actionTypes.UPDATE_STUDENT_INFO_SUCCESS,
    payload: students,
  }
} 

const updateStudentInfoFailed = (error) => ({
  type: actionTypes.UPDATE_STUDENT_INFO_FAILED,
  payload: error,
});


export const updateStudentInfo = (id,obj) => async dispatch => {
try {
  dispatch(updateStudentInfoReq());
  const headers = {
      'Content-Type': 'application/json',
    };
    
  const response = await axios.patch(URLs.updateStudentinfo(id),obj,{headers}) 
  const student = response.data;
  dispatch(updateStudentInfoSuccess(student));
  return student
} catch (error) {
  dispatch(updateStudentInfoFailed(error.message));
  return error
}
};