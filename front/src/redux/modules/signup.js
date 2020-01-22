import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

export const SIGNUP_REQUEST = 'signup/SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'signup/SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'signup/SIGNUP_FAILURE';
const SIGNUP_INIT = 'signup/SIGNUP_INIT';

const initialState = Map({
  signUpSuccess: false,
  signUpLoading: false,
  signUpError: null,
});

const reducer = handleActions({
  [SIGNUP_REQUEST]: (state, action) => (
    state.set('signUpLoading', true)
  ),

  [SIGNUP_SUCCESS]: (state, action) => (
    state.set('signUpLoading', false)
      .set('signUpSuccess', true)
  ),

  [SIGNUP_FAILURE]: (state, action) => (
    state.set('signUpLoading', false)
      .set('signUpError', action.payload.error)
  ),

  [SIGNUP_INIT]: (state, action) => initialState,
}, initialState);

// id, password, nickname
export const signUpRequest = createAction(SIGNUP_REQUEST);
export const signUpSuccess = createAction(SIGNUP_SUCCESS);
// error message
export const signUpFailure = createAction(SIGNUP_FAILURE);
// completion
export const signUpInit = createAction(SIGNUP_INIT);

export default reducer;