import { call, all, fork, takeLatest, put } from 'redux-saga/effects';
import { SIGNUP_REQUEST, signUpSuccess, signUpFailure } from '../redux/modules/signup';
import axios from 'axios';

const signUpAPI = (params) => {
  return axios.post('/api/auth/signup', {
    id: params.id,
    password: params.password,
    nickname: params.nickname,
  });
};

function* signUp(action) {
  try {
    const data = yield call(signUpAPI, action.payload);
    yield put(signUpSuccess());
  } catch (e) {
    yield put(signUpFailure({ error: e }));
  }
}

function* watchSignUp() {
  yield takeLatest(SIGNUP_REQUEST, signUp);
}

export default function* signUpSaga() {
  yield all([fork(watchSignUp)]);
}