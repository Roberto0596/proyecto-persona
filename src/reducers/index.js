import { combineReducers } from 'redux';
import { getUsers, getUserById } from './User';

export default combineReducers({
  getUsers,
  getUserById
});
