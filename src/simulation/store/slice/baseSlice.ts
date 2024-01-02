import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRootState} from "../../../store/store";
import {ThreeArr2} from "../../component/BaseComponents";

export interface IStorageArea {
    posX: number,
    posY: number,
}
export interface IStation {
    posX: number,
    posY: number,
    width: number,
    length: number,
    storageAreas: IStorageArea[],
}

export interface ILineSegment {
    start: ThreeArr2,
    end: ThreeArr2,
}

export interface ISimulationBaseState {
    width: number | undefined,
    length: number | undefined,
    productionStations: IStation[],
    storageStations: IStation[],
    drivingAreaSegments: ILineSegment[],
}

const initialState: ISimulationBaseState = {
    width: undefined,
    length: undefined,
    productionStations: [],
    storageStations: [],
    drivingAreaSegments: [],
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