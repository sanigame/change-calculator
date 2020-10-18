import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from './reducers';

const logger = createLogger({});

const middlewares = [thunk, logger]

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
);

export default store;
