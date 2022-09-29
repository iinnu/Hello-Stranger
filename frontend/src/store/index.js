import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import userInputList from './userInput';
import spotifyReducer from './Spotify';

const reducers = combineReducers({
  userInputList,
  spotifyReducer,
});

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['userInputList'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
