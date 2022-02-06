import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import jobsReducer from '../src/common/redux/reducer/reducer';
import errorsReducer from './common/redux/reducer/errors';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    jobs: jobsReducer,
    errors: errorsReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;