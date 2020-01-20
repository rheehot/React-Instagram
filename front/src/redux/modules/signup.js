import { createAction, handleActions } from 'redux-actions';

export const SIGNUP_REQUEST = 'signup/SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'signup/SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'signup/SIGNUP_FAILURE';

const initialState = {
  signUpSuccess: false,
  signUpLoading: false,
  signUpError: '',
};

const reducer = handleActions({
  SIGNUP_REQUEST: (state, action) => ({
    signUpLoading: true,
  }),

  SIGNUP_SUCCESS: (state, action) => ({
    signUpSuccess: true,
    signUpLoading: false,
  }),

  SIGNUP_FAILURE: (state, action) => ({
    signUpError: action.payload.error,
    signUpLoading: false,
  }),
}, initialState);

// id, password, nickname
export const signUpRequest = createAction(SIGNUP_REQUEST);
export const signUpSuccess = createAction(SIGNUP_SUCCESS);
// error message
export const signUpFailure = createAction(SIGNUP_FAILURE);

export default reducer;