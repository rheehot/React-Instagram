import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules/reducer';
import rootSaga from '../sagas/index';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
  sagaMiddleware.run(rootSaga);
  return store;
};