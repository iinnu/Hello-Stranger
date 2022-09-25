import { configureStore } from '@reduxjs/toolkit'
import axios from "axios";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';


function userInputList(state, action) {
  const userInputInfo = {...state}
  if (action.type === 'getUserChoice') {
    axios({
      url: 'http://localhost:8081/api/user/choice',
      method:'get',
      })
      .then(res=>{
        userInputInfo.food=res.data.food
        userInputInfo.activity=res.data.activity
        userInputInfo.music=res.data.music
        console.log(userInputInfo)
        window.location.href ="/guide/first"
      })
      .catch(err=>{
          console.log(err)
          window.location.href ="/guide/first" //일단 다음으로 넘어가려고 해놓음
      })
  }
  return userInputInfo

}

const reducers = combineReducers({
    userInputList: userInputList,
  });

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist:['userInputList']
  };

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
