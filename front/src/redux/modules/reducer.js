import { combineReducers } from 'redux';

import signup from './signup';
import login from './login';
import user from './user';

export default combineReducers({
  signup,
  login,
  user
});