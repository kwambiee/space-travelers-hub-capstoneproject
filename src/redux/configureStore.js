import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { MissionReducer } from './mission/mission';

const rootReducer = combineReducers({ mission: MissionReducer });
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
