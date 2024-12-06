import { combineReducers, configureStore } from "@reduxjs/toolkit";
import playerReducer from "./player-slice";
import playlistReducer from "./playlist-slice";

const rootReducer = combineReducers({
  player: playerReducer,
  playlist: playlistReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
