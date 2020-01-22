import { createAction, handleActions } from 'redux-actions';

export const LOGIN_REQUEST = 'login/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'login/LOGIN_FAILURE';
const LOGIN_INIT = 'login/LOGIN_INIT';

const initialState = {
  loginSuccess: false,
  loginLoading: false,
  loginError: null,
  user: {
    name: null,
    profile: null,
    intro: null,
    followers: [],
    followings: [],
    posts: [],
  },
};

const reducer = handleActions({
  [LOGIN_REQUEST]: (state, action) => ({
    ...state,
    loginLoading: true,
  }),

  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    loginSuccess: true,
    loginLoading: false,
    user: {
      name: action.payload.nickname,
      profile: action.payload.profile,
      intro: action.payload.intro,
      followers: action.payload.followers,
      followings: action.payload.followings,
      posts: action.payload.posts,
    },
  }),

  [LOGIN_FAILURE]: (state, action) => ({
    ...state,
    loginError: action.payload.error,
    loginLoading: false,
  }),

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