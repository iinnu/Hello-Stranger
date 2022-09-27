import { useContext } from 'react';
import { createContext, useMemo, useReducer } from 'react';
import { Outlet } from 'react-router-dom';
import { indexReducer } from './indexReducer';
import { musicReducer } from './musicReducer';

const initialState = {
  indexReducer: {
    index: 0,
  },
  musicReducer: {
    refresh: 0,
    list: [],
    current: {},
    likeYN: {},
  },
  foodReducer: {
    refresh: 0,
    list: [],
    current: {},
    likeYN: {},
  },
  activityReducer: {
    refresh: 0,
    list: [],
    current: {},
    likeYN: {},
  },
};

const combineReducers = (slices) => (state, action) => {
  return Object.keys(slices).reduce((acc, prop) => {
    return {
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    };
  }, state);
};

const RecommendContext = createContext();
const rootReducer = combineReducers({ indexReducer, musicReducer });

export function RecommendProvider() {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const store = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <RecommendContext.Provider value={store}>
      <Outlet />
    </RecommendContext.Provider>
  );
}

export function useRecommendContext() {
  return useContext(RecommendContext);
}
