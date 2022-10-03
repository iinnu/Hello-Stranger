import { useContext, useState } from 'react';
import { createContext, useMemo } from 'react';

const ResultContext = createContext();

export function ResultProvider({ children }) {
  const [currentStore, setCurrentStore] = useState();
  const store = useMemo(
    () => ({ currentStore, setCurrentStore }),
    [currentStore]
  );

  return (
    <ResultContext.Provider value={store}>{children}</ResultContext.Provider>
  );
}

export function useResultContext() {
  return useContext(ResultContext);
}
