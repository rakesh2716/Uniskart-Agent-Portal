// rootReducer.js
import { combineReducers } from 'redux';
import loginReducer from './Auth/Auth_reducer';
import searchDataReducer from './SearProgram/SearchProgramReducer';


const rootReducer = combineReducers({
  login: loginReducer,
  searchData:searchDataReducer
});

export default rootReducer;
