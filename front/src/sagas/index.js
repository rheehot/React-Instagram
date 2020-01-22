import { all, call } from 'redux-saga/effects';
import signUpSaga from './signup';
import loginSaga from './login';

export default function* rootSaga() {
  yield all([
    call(signUpSaga),
    call(loginSaga)
  ]);
}