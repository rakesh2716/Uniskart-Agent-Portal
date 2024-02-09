// rootReducer.js
import { combineReducers } from 'redux';
import loginReducer from "./Auth/Auth_reducer"
import searchDataReducer from './SearProgram/SearchProgramReducer';
import { newStudentRegister } from './NewStudentRegistration/Action';

const rootReducer = combineReducers({
  login: loginReducer,
  searchData: searchDataReducer,
  newStudentRegistration: newStudentRegister,
});

export default rootReducer;

