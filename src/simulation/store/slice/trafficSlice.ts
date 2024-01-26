import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRootState} from "../../../store/store";

export interface ITrafficState {
    blocked: string[];
    drop_planned: string[];
}

const initialState: ITrafficState = {
    blocked: [],
    drop_planned: [],
};

const handleUpdateTraffic = (state: ITrafficState, action: PayloadAction<ITrafficState>): ITrafficState => {
    return {
        ...action.payload,
    }
}

const handleReset = (state: ITrafficState): ITrafficState => {
    return {
        ...initialState,
    }
}

export const trafficSlice = createSlice({
    name: 'trafficStateSlice',
    initialState,
    reducers: {
        updateTraffic: handleUpdateTraffic,
        resetTraffic: handleReset,
    },
});

export const {
    updateTraffic,
    resetTraffic,
} = trafficSlice.actions;

export const trafficSliceSelector = (state: IRootState) => state.trafficReducer;

export const trafficSliceReducer = trafficSlice.reducer;