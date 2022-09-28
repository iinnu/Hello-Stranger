import { createContext, useContext, useMemo, useState } from 'react';

const Context = createContext();

export function ContextProvider({ children }) {
  const [token, setToken] = useState();
  const store = useMemo(() => ({ token, setToken }), [token]);

  return <Context.Provider value={store}>{children}</Context.Provider>;
}

export function useSpotifyContext() {
  return useContext(Context);
}
