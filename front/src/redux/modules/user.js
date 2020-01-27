// @flow
import { createAction, handleActions, type ActionType } from 'redux-actions';
import produce from 'immer';

export const USER_LOGIN = 'user/USER_LOGIN';
export const USER_LOGOUT = 'user/USER_LOGOUT';

// Payload type
type UserLoginPayload = {
  id: string,
  name: string,
  posts: Array<number>,
  followings: Array<number>,
  followers: Array<number>
};

export const userLogin = createAction(USER_LOGIN, (payload: UserLoginPayload) => payload);
export const userLogout = createAction(USER_LOGOUT);

// Action type
type UserLoginAction = ActionType<typeof userLogin>;
type UserLogoutAction = ActionType<typeof userLogout>;

// State type
type User = {
  id: string,
  name: string,
  posts: Array<number>,
  followings: Array<number>,
  followers: Array<number>
};

const initialState: User = {
  id: '',
  name: '',
  posts: [],
  followings: [],
  followers: []
};

const reducer = handleActions({
  [USER_LOGIN]: (state, action : UserLoginAction) => {
    return produce(state, (draft) => {
      draft = { ...action.payload };
    });
  },
  [USER_LOGOUT]: (state, action : UserLogoutAction) => {
    return produce(state, (draft) => {
      draft = { ...initialState };
    });
  }
}, initialState);

export default reducer;