import { call, all, fork, takeLatest, put } from 'redux-saga/effects';
import { SIGNUP_REQUEST, signUpSuccess, signUpFailure } from '../redux/modules/signup';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';
const signUpAPI = (params) => {
  return axios.post('/signup', {
    id: params.id,
    password: params.password,
    nickname: params.nickname,
  });
};

function* signUp(action) {
  try {
    const { data } = yield call(signUpAPI, action.payload);
    console.log(data);
    yield put(signUpSuccess());
  } catch (e) {
    yield put(signUpFailure());
  }
}

function* watchSignUp() {
  yield takeLatest(SIGNUP_REQUEST, signUp);
}

export default function* signUpSaga() {
  yield all([fork(watchSignUp)]);
}