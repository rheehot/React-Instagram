import { createAction, handleActions } from 'redux-actions';

export const SIGNUP_REQUEST = 'signup/SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'signup/SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'signup/SIGNUP_FAILURE';
const SIGNUP_COMPLETE = 'signup/SIGNUP_COMPLETE';

const initialState = {
  signUpSuccess: false,
  signUpLoading: false,
  signUpError: null,
};

const reducer = handleActions({
  [SIGNUP_REQUEST]: (state, action) => ({
    ...state,
    signUpLoading: true,
  }),

  [SIGNUP_SUCCESS]: (state, action) => ({
    ...state,
    signUpSuccess: true,
    signUpLoading: false,
  }),

  [SIGNUP_FAILURE]: (state, action) => ({
    ...state,
    signUpError: action.payload.error,
    signUpLoading: false,
  }),

  [SIGNUP_COMPLETE]: (state, action) => initialState,
}, initialState);

// id, password, nickname
export const signUpRequest = createAction(SIGNUP_REQUEST);
export const signUpSuccess = createAction(SIGNUP_SUCCESS);
// error message
export const signUpFailure = createAction(SIGNUP_FAILURE);
// completion
export const signUpComplete = createAction(SIGNUP_COMPLETE);

export default reducer;