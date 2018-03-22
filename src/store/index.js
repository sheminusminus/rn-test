import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import root from '../modules/root/reducer';
import rootSaga from '../modules/root/saga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware];

  const store = createStore(
    root,
    {},
    compose(
      applyMiddleware(
        ...middleware,
      ),
    ),
  );

  sagaMiddleware.run(rootSaga);

  persistStore(store);

  return store;
}
