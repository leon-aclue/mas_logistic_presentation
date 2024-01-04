import {configureStore} from '@reduxjs/toolkit';
import {pageSliceReducer} from "./slice/pageSlice";
import {baseSliceReducer} from "../simulation/store/slice/baseSlice";
import {cameraSliceReducer} from "../simulation/store/slice/cameraSlice";

export const store = configureStore({
    reducer: {
        pageReducer: pageSliceReducer,
        simuBaseReducer: baseSliceReducer,
        cameraReducer: cameraSliceReducer,
    },
});

export type IRootState = ReturnType<typeof store.getState>;
