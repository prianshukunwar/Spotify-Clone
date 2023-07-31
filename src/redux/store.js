import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import { spotifyScraperApi } from "./services/shazamCore";

export const store = configureStore({
  reducer: {
    [spotifyScraperApi.reducerPath]: spotifyScraperApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spotifyScraperApi.middleware),
});
