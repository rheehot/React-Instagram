// @flow
import { createAction, handleActions, type ActionType } from 'redux-actions';
import produce from 'immer';

export const SIGNUP_REQUEST = 'signup/SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'signup/SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'signup/SIGNUP_FAILURE';
const SIGNUP_INIT = 'signup/SIGNUP_INIT';

// Payload type
type SignUpFailurePayload = { error: string };

export const signUpRequest = createAction(SIGNUP_REQUEST);
export const signUpSuccess = createAction(SIGNUP_SUCCESS);
export const signUpFailure = createAction(SIGNUP_FAILURE, (payload: SignUpFailurePayload) => payload);
export const signUpInit = createAction(SIGNUP_INIT);

// Action creator type
type SignUpRequestAction = ActionType<typeof signUpRequest>;
type SignUpSuccessAction = ActionType<typeof signUpSuccess>;
type SignUpFailureAction = ActionType<typeof signUpFailure>;

// State type
type SignUp = {
  signUpSuccess: boolean,
  signUpLoading: boolean,
  signUpError: string,
};

const initialState : SignUp =  {
  signUpSuccess: false,
  signUpLoading: false,
  signUpError: '',
};

const reducer = handleActions({
  [SIGNUP_REQUEST]: (state, action : SignUpRequestAction) => {
    return produce(state, (draft) => {
      draft.signUpLoading = true;
    });
  },

  [SIGNUP_SUCCESS]: (state, action : SignUpSuccessAction) => {
    return produce(state, (draft) => {
      draft.signUpLoading = false;
      draft.signUpSuccess = true;
    });
  },

  [SIGNUP_FAILURE]: (state, action : SignUpFailureAction) => {
    return produce(state, (draft) => {
      draft.signUpLoading = false;
      draft.signUpFailure = true;
    });
  }
}, initialState);

export default reducer;