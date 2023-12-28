import { configureStore } from '@reduxjs/toolkit';
import pageReducer from "./slice/pageSlice";

export const store = configureStore({
  reducer: {
    pageStateSlice: pageReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
