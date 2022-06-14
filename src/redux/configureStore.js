import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { MissionReducer } from './mission/mission';
import rocketReducer from './rockets/rocket';
import fetchRocketThunk from './rockets/rocketThunk';

const rootReducer = combineReducers({ MissionReducer, rocketReducer });
const store = configureStore({ reducer: rootReducer }, applyMiddleware(logger, thunk));
store.dispatch(fetchRocketThunk());

export default store;
