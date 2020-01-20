import { all, call } from 'redux-saga/effects';
import signUpSaga from './signup';

export default function* rootSaga() {
  yield all([call(signUpSaga)]);
}