import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRootState} from "../../../store/store";

export interface Station {
    posX: number,
    posY: number,
    width: number,
    height: number,
}

interface IBaseState {
    width: number | undefined,
    height: number | undefined,
    productionStations: Station[],
    storageStations: Station[],
}

const initialState: IBaseState = {
    width: undefined,
    height: undefined,
    productionStations: [],
    storageStations: [],
};

const handleSetupBase = (state: IBaseState, action: PayloadAction<IBaseState>): IBaseState => {
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