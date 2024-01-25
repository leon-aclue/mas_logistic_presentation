import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRootState} from "../../../store/store";
import {INITIAL_AGVS} from "../../config";
import {IAgv} from "../../component/agv/Agv";
import {allNodes, positionToNode, TNode} from "../../nodes";

export enum AgvCommand {
    NONE,
    LOAD,
    UNLOAD,
}

export interface Destination {
    node: TNode,
    command: AgvCommand,
}

export interface IAgvState {
    id: number,
    agv: IAgv,
    destinations: Destination[],
    currentNode: TNode,
    nextNode?: TNode,
    nextRotation?: number,
    taskId?: number,
}

export interface IAGVsState {
    agvs: IAgvState[],
}

const initialState: IAGVsState = {
    agvs: INITIAL_AGVS.map((agv, index): IAgvState => ({
        id: index,
        agv,
        destinations: [],
        currentNode: positionToNode(agv.position, allNodes.nodes)!,
    })),
};

const handleInitAGVs = (state: IAGVsState): IAGVsState => {
    return {
        ...state,
        agvs: INITIAL_AGVS.map((agv, index): IAgvState => ({
            id: index,
            agv,
            destinations: [],
            currentNode: positionToNode(agv.position, allNodes.chargingNodes)!,
        })),
    }
}

const handleUpdateAGVs = (state: IAGVsState, action: PayloadAction<IAgvState[]>): IAGVsState => {
    return {
        ...state,
        agvs: action.payload,
    }
}

const handleUpdateAGV = (state: IAGVsState, action: PayloadAction<IAgvState>): IAGVsState => {
    const agvState: IAgvState = action.payload;

    const agvs = [...state.agvs.filter((agv) => agv.id !== agvState.id)];

    agvs.push(agvState);

    return {
        ...state,
        agvs,
    };
}


export const agvSlice = createSlice({
    name: 'agvStateSlice',
    initialState,
    reducers: {
        initAGVs: handleInitAGVs,
        updateAGVs: handleUpdateAGVs,
        updateAgv: handleUpdateAGV,
    },
});

export const {
    initAGVs,
    updateAGVs,
    updateAgv,
} = agvSlice.actions;

export const agvSliceSelector = (state: IRootState) => state.agvReducer;

export const agvSliceReducer = agvSlice.reducer;