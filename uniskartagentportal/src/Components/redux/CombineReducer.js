// rootReducer.js
import { combineReducers } from 'redux';
import loginReducer from './Auth/Auth_reducer';


const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
