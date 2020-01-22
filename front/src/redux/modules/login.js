import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

export const LOGIN_REQUEST = 'login/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'login/LOGIN_FAILURE';
const LOGIN_INIT = 'login/LOGIN_INIT';

const initialState = Map({
  loginSuccess: false,
  loginLoading: false,
  loginError: null,
  user: Map({
    name: null,
    profile: null,
    intro: null,
    followers: List([]),
    followings: List([]),
    posts: List([]),
  }),
});

const reducer = handleActions({
  [LOGIN_REQUEST]: (state, action) => (
    state.set('loginLoading', true)
  ),

  [LOGIN_SUCCESS]: (state, action) => (
    state.merge({
      loginSuccess: true,
      loginLoading: false
    }).mergeIn(['user'], {
      name: action.payload.name,
      profile: action.payload.profile,
      intro: action.payload.intro,
      followers: List(action.payload.followers),
      followings: List(action.payload.followings),
      posts: List(action.payload.posts)
    })
  ),

  [LOGIN_FAILURE]: (state, action) => (
    state.merge({
      loginLoading: false,
      loginError: action.payload.error
    })
  ),

  [LOGIN_INIT]: (state, action) => initialState,
}, initialState);

// id, password, nickname
export const loginRequest = createAction(LOGIN_REQUEST);
export const loginSuccess = createAction(LOGIN_SUCCESS);
// error message
export const loginFailure = createAction(LOGIN_FAILURE);
// completion
export const loginInit = createAction(LOGIN_INIT);

export default reducer;