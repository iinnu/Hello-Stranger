import { createContext, useContext, useMemo, useState } from 'react';

const SpotifyContext = createContext();
const LoginContext = createContext();

export function ContextProvider({ children }) {
  const [spotify, setSpotify] = useState();
  const [login, setLogin] = useState();
  const spotifyStore = useMemo(() => ({ spotify, setSpotify }), [spotify]);
  const loginStore = useMemo(() => ({ login, setLogin }), [login]);

  return (
    <SpotifyContext.Provider value={spotifyStore}>
      <LoginContext.Provider value={loginStore}>
        {children}
      </LoginContext.Provider>
    </SpotifyContext.Provider>
  );
}

export function useSpotifyToken() {
  return useContext(SpotifyContext);
}

export function useLoginToken() {
  return useContext(LoginContext);
}
