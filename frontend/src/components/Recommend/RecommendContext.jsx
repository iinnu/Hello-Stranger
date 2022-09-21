import { useContext } from 'react';
import { createContext, useMemo, useReducer } from 'react';
import { Outlet } from 'react-router-dom';

const initialState = {
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'recommend/index/decrease':
      return { ...state, index: state.index - 1 };
    case 'recommend/index/increase':
      return { ...state, index: state.index + 1 };
    default:
      throw new Error();
  }
}

const RecommendContext = createContext();

export function RecommendProvider() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <RecommendContext.Provider value={value}>
      <Outlet />
    </RecommendContext.Provider>
  );
}

export function useRecommendContext() {
  return useContext(RecommendContext);
}
