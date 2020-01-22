import { call, all, fork, takeLatest, put } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginSuccess, loginFailure } from '../redux/modules/login';
import axios from 'axios';

const loginAPI = (params) => {
  return axios.post('/api/auth/login', {
    id: params.id,
    password: params.password,
  });
};

function* login(action) {
  try {
    const data = yield call(loginAPI, action.payload);
    yield put(loginSuccess());
  } catch (e) {
    yield put(loginFailure({ error: e }));
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export default function* loginSaga() {
  yield all([fork(watchLogin)]);
}