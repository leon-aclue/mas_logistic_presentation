import {configureStore} from '@reduxjs/toolkit';
import {pageSliceReducer} from "./slice/pageSlice";
import {baseSliceReducer} from "../simulation/store/slice/baseSlice";

export const store = configureStore({
  reducer: {
    pageReducer: pageSliceReducer,
    simuBaseReducer: baseSliceReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
