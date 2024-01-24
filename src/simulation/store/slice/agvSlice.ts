import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRootState} from "../../../store/store";
import {INITIAL_AGVS} from "../../config";
import {IAgv} from "../../component/agv/Agv";
import {ThreeArr2} from "../../component/ThreeBaseComponents";

export enum AgvCommand {
    NONE,
    LOAD,
    UNLOAD,
    DRIVE,
    TURN,
}

export interface IAgvPlan {
    location: ThreeArr2,
    rotation: number,
    command: AgvCommand,
}

export interface IAgvState {
    id: number,
    agv: IAgv,
    plans: IAgvPlan[],
}

export interface IAGVsState {
    agvs: IAgvState[],
}

const initialState: IAGVsState = {
    agvs: INITIAL_AGVS.map((agv, index): IAgvState => ({
        id: index,
        agv,
        plans: [],
    })),
};

const handleInitAGVs = (state: IAGVsState): IAGVsState => {
    return {
        ...state,
        agvs: INITIAL_AGVS.map((agv, index): IAgvState => ({
            id: index,
            agv,
            plans: [],
        })),
    }
}

const handleUpdateAGVs = (state: IAGVsState, action: PayloadAction<IAgvState[]>): IAGVsState => {
    return {
        ...state,
        agvs: action.payload,
    }
}

export interface IAGVPlanUpdate {
    agvId: number,
    plans: IAgvPlan[],
}
const handleUpdateAGVPlan = (state: IAGVsState, action: PayloadAction<IAGVPlanUpdate>): IAGVsState => {
    const planUpdate: IAGVPlanUpdate = action.payload;

    const agvs = [...state.agvs.filter((agv) => agv.id !== planUpdate.agvId)];

    let agvState: IAgvState | undefined = state.agvs.find((agv) => agv.id === planUpdate.agvId);
    if(agvState) {
        agvState = {...agvState};
        agvState.plans = planUpdate.plans;
        agvs.push(agvState);
    }

    return {
        ...state,
        agvs
    };
}


export const agvSlice = createSlice({
    name: 'agvStateSlice',
    initialState,
    reducers: {
        initAGVs: handleInitAGVs,
        updateAGVs: handleUpdateAGVs,
        updateAgvPlan: handleUpdateAGVPlan,
    },
});

export const {
    initAGVs,
    updateAGVs,
    updateAgvPlan,
} = agvSlice.actions;

export const agvSliceSelector = (state: IRootState) => state.agvReducer;

export const agvSliceReducer = agvSlice.reducer;