// @flow
import { createAction, handleActions, type ActionType } from 'redux-actions';
import produce from 'immer';

export const LOGIN_REQUEST = 'login/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'login/LOGIN_FAILURE';
const LOGIN_INIT = 'login/LOGIN_INIT';

// Payload type
type LoginFailurePayload = { error: string };

export const loginRequest = createAction(LOGIN_REQUEST);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE, (payload: LoginFailurePayload) => payload);
export const loginInit = createAction(LOGIN_INIT);

// Action creator type
type LoginRequestAction = ActionType<typeof loginRequest>;
type LoginSuccessAction = ActionType<typeof loginSuccess>;
type LoginFailureAction = ActionType<typeof loginFailure>;
type LoginInitAction = ActionType<typeof loginInit>;

// State type
type Login = {
  loginSuccess: boolean,
  loginLoading: boolean,
  loginError: string,
};

const initialState: Login = {
  loginSuccess: false,
  loginLoading: false,
  loginError: '',
};

const reducer = handleActions({
  [LOGIN_REQUEST]: (state, action : LoginRequestAction) => {
    return produce(state, (draft) => {
      draft.loginLoading = true;
    });
  },

  [LOGIN_SUCCESS]: (state, action : LoginSuccessAction) => {
    return produce(state, (draft) => {
      draft.loginLoading = true;
      draft.loginSuccess = true;
    });
  },

  [LOGIN_FAILURE]: (state, action : LoginFailureAction) => {
    return produce(state, (draft) => {
      draft.loginLoading = false;
      draft.loginError = action.payload.error
    });
  },

  [LOGIN_INIT]: (state, action : LoginInitAction) => {
    return produce(state, (draft) => draft = initialState);
  }
}, initialState);


export default reducer;