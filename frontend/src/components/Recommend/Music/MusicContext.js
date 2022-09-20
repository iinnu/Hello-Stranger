import { createContext, useContext, useState } from "react";

const CurrentMusic = createContext();
const setCurrentMusic = createContext();

export function MusicProvider({children}) {
  const [current, setCurrent] = useState();

  return(
   <CurrentMusic.Provider value={current}>
    <setCurrentMusic.Provider value={setCurrent}>
      {children}
    </setCurrentMusic.Provider>
   </CurrentMusic.Provider> 
  )
}

export function useCurrentMusic() {
  return useContext(CurrentMusic);
}

export function useSetCurrentMusic() {
  return useContext(setCurrentMusic);
}