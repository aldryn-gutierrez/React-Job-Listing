import { combineReducers } from 'redux';
import jobsReducer from './jobs';

export default combineReducers({
  jobResults: jobsReducer
});