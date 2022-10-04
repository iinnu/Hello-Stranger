import { createContext, useContext, useReducer } from 'react';

const initialState = {
  location: { lat: 36.1081964, lng: 128.413952 },
  range: 2,
};

/* Main context */
function reducer(state, action) {
  switch (action.type) {
    case 'location':
      return { ...state, location: action.location };
    case 'range':
      return { ...state, range: action.range };
    default:
      throw new Error();
  }
}

const MainStateContext = createContext();
const MainDispatchContext = createContext();

export function MainProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainStateContext.Provider value={state}>
      <MainDispatchContext.Provider value={dispatch}>
        {children}
      </MainDispatchContext.Provider>
    </MainStateContext.Provider>
  );
}

/* context custom hook */
export function useMainState() {
  return useContext(MainStateContext);
}

export function useMainDispatch() {
  return useContext(MainDispatchContext);
}
