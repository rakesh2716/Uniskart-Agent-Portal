// store.js
import {  applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './redux/CombineReducer';
const middleware = [thunk];
const store = configureStore({
    reducer: {
      reducers: rootReducer,
    }
  })

export default store;
