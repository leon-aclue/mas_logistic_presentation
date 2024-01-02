import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRootState} from "../../../store/store";
import {ThreeArr2} from "../../component/BaseComponents";
import {
    DRIVING_AREA_SEGMENTS,
    MAGNETIC_LINES,
    PRODUCTION_STATIONS,
    REFLECTOR_STATIONS,
    SIM_BASE_LENGTH,
    SIM_BASE_WIDTH,
    STORAGE_STATIONS
} from "../../config";

export interface IStation {
    posX: number,
    posY: number,
    width: number,
    length: number,
    storageAreas: ThreeArr2[],
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
    magneticLines: ILineSegment[],
    reflectorStations: ThreeArr2[],
}

const initialState: ISimulationBaseState = {
    width: SIM_BASE_WIDTH,
    length: SIM_BASE_LENGTH,
    productionStations: PRODUCTION_STATIONS,
    storageStations: STORAGE_STATIONS,
    drivingAreaSegments: DRIVING_AREA_SEGMENTS,
    magneticLines: MAGNETIC_LINES,
    reflectorStations: REFLECTOR_STATIONS,
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