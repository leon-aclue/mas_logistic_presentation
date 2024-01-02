import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRootState} from "../../../store/store";

export interface Station {
    posX: number,
    posY: number,
    width: number,
    length: number,
}

export interface ISimulationBaseState {
    width: number | undefined,
    length: number | undefined,
    productionStations: Station[],
    storageStations: Station[],
}

const initialState: ISimulationBaseState = {
    width: undefined,
    length: undefined,
    productionStations: [],
    storageStations: [],
};

const handleSetupBase = (state: ISimulationBaseState, action: PayloadAction<ISimulationBaseState>): ISimulationBaseState => {
    return {
        ...state,
        ...action.payload
    }
}

export const baseSlice = createSlice({
    name: 'baseStateSlice',
    initialState,
    reducers: {
        setupSimulationBase: handleSetupBase,
    },
});

export const {
    setupSimulationBase,
} = baseSlice.actions;

export const baseSliceSelector = (state: IRootState) => state.simuBaseReducer;

export const baseSliceReducer = baseSlice.reducer;