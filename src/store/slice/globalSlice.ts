import {createSlice} from '@reduxjs/toolkit';
import {IRootState} from "../store";

interface IGlobalState {
    printMode: boolean;
}

const initialState: IGlobalState = {
    printMode: false,
};

const handleActivatePrintMode = (state: IGlobalState): IGlobalState => {
    return {
        ...state,
        printMode: true,
    };
};

const handleDeactivatePrintMode = (state: IGlobalState): IGlobalState => {
    return {
        ...state,
        printMode: false,
    };
};

export const globalSlice = createSlice({
    name: 'globalStateSlice',
    initialState,
    reducers: {
        activatePrintMode: handleActivatePrintMode,
        deactivatePrintMode: handleDeactivatePrintMode,
    },
});

export const {
    activatePrintMode,
    deactivatePrintMode,
} = globalSlice.actions;

export const globalSliceSelector = (state: IRootState) => state.globalReducer;

export const globalSliceReducer = globalSlice.reducer;
