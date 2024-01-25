import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRootState} from "../../../store/store";
import {ThreeArr2} from "../../component/ThreeBaseComponents";
import {
    CHARGING_AREAS,
    DRIVING_AREA_SEGMENTS,
    INDUCTIVE_WIRES,
    PRODUCTION_STATIONS,
    REFLECTOR_STATIONS,
    SIM_BASE_LENGTH,
    SIM_BASE_WIDTH,
    SIM_DEFAULT_DELAY,
    SIM_DEFAULT_PRODUCTION_RATE,
    STORAGE_STATIONS,
    VIRTUAL_ROUTES
} from "../../config";

export interface IStation {
    posX: number,
    posY: number,
    width: number,
    length: number,
    storageAreas: ThreeArr2[],
    hasProduct?: boolean,
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
    virtualRoutes: ILineSegment[],
    reflectorStations: ThreeArr2[],
    inductiveWire: ILineSegment[],
    chargingAreas: ThreeArr2[],
    runSimulation: boolean,
    runDelay: number,
    currentStep: number,
    productionRate: number,
    generateTasks: boolean,
}

const initialState: ISimulationBaseState = {
    width: SIM_BASE_WIDTH,
    length: SIM_BASE_LENGTH,
    productionStations: PRODUCTION_STATIONS,
    storageStations: STORAGE_STATIONS,
    drivingAreaSegments: DRIVING_AREA_SEGMENTS,
    virtualRoutes: VIRTUAL_ROUTES,
    reflectorStations: REFLECTOR_STATIONS,
    inductiveWire: INDUCTIVE_WIRES,
    chargingAreas: CHARGING_AREAS,
    runSimulation: false,
    runDelay: SIM_DEFAULT_DELAY,
    currentStep: 0,
    productionRate: SIM_DEFAULT_PRODUCTION_RATE,
    generateTasks: false,
};

const handleSetupBase = (state: ISimulationBaseState, action: PayloadAction<ISimulationBaseState>): ISimulationBaseState => {
    return {
        ...state,
        ...action.payload
    }
}

const handleStartSimulation = (state: ISimulationBaseState): ISimulationBaseState => {
    return {
        ...state,
        runSimulation: true,
    }
}

const handleStopSimulation = (state: ISimulationBaseState): ISimulationBaseState => {
    return {
        ...state,
        runSimulation: false,
    }
}

const handleSimuStep = (state: ISimulationBaseState): ISimulationBaseState => {
    const currentStep = state.currentStep + 1;
    return {
        ...state,
        currentStep: currentStep >= state.runDelay ? 0 : currentStep,
    }
}

const handelSetSimuDelay = (state: ISimulationBaseState, action: PayloadAction<number>): ISimulationBaseState => {
    return {
        ...state,
        runDelay: action.payload,
    }
}

const handelSetSimuProdRate = (state: ISimulationBaseState, action: PayloadAction<number>): ISimulationBaseState => {
    return {
        ...state,
        productionRate: action.payload,
    }
}


const handleStartTaskGen = (state: ISimulationBaseState): ISimulationBaseState => {
    return {
        ...state,
        generateTasks: true,
    }
}

const handleStopTaskGen = (state: ISimulationBaseState): ISimulationBaseState => {
    return {
        ...state,
        generateTasks: false,
    }
}

export const baseSlice = createSlice({
    name: 'baseStateSlice',
    initialState,
    reducers: {
        setupSimulationBase: handleSetupBase,
        startSimulation: handleStartSimulation,
        stopSimulation: handleStopSimulation,
        simuStep: handleSimuStep,
        setSimuDelay: handelSetSimuDelay,
        setSimuProductionRate: handelSetSimuProdRate,
        startAutoTaskGen: handleStartTaskGen,
        stopAutoTaskGen: handleStopTaskGen,
    },
});

export const {
    setupSimulationBase,
    startSimulation,
    stopSimulation,
    simuStep,
    setSimuDelay,
    setSimuProductionRate,
    startAutoTaskGen,
    stopAutoTaskGen,
} = baseSlice.actions;

export const baseSliceSelector = (state: IRootState) => state.simuBaseReducer;

export const baseSliceReducer = baseSlice.reducer;