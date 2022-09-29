import { createSlice } from '@reduxjs/toolkit';

export const spotifySlice = createSlice({
  name: 'authToken',
  initialState: {
    authenticated: false,
    token: null,
  },
  reducers: {
    SET_SPOTIFY_TOKEN: (state, action) => {
      state.authenticated = true;
      state.token = action.payload;
    },
    DELETE_SPOTIFY_TOKEN: (state, action) => {
      state.authenticated = false;
      state.token = null;
    },
  },
});

export const { SET_SPOTIFY_TOKEN, DELETE_SPOTIFY_TOKEN } = spotifySlice.actions;

export default spotifySlice.reducer;
