import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRootState} from "../../../store/store";

const MAX_TASKS_IN_LIST = 20;

export interface ITask {
    id: number,
    pickUpNodeId: string,
    waitingTime: number,
}

export interface INewTask {
    pickUpNodeId: string,
}

export interface ITaskState {
    readyForPickup: ITask[],
    waitingForPickup: ITask[],
    inTransport: ITask[],
    delivered: ITask[],
    nextTaskId: number,
}

const initialState: ITaskState = {
    readyForPickup: [],
    waitingForPickup: [],
    inTransport: [],
    delivered: [],
    nextTaskId: 1,
};

const handleAddTask = (state: ITaskState, action: PayloadAction<INewTask>): ITaskState => {
    const task: ITask = {
        ...action.payload,
        id: state.nextTaskId,
        waitingTime: 0,
    }
    return {
        ...state,
        readyForPickup: [...state.readyForPickup, task],
        nextTaskId: state.nextTaskId + 1,
    }
}

const handleAcceptTask = (state: ITaskState, action: PayloadAction<number>): ITaskState => {
    const task = state.readyForPickup.find((task) => task.id === action.payload);
    if (!task) {
        return state;
    }

    return {
        ...state,
        readyForPickup: [...state.readyForPickup.filter((task) => task.id !== action.payload)],
        waitingForPickup: [...state.waitingForPickup, task],
    }
}

const handlePickupTask = (state: ITaskState, action: PayloadAction<number>): ITaskState => {
    const task = state.waitingForPickup.find((task) => task.id === action.payload);
    if (!task) {
        return state;
    }

    return {
        ...state,
        waitingForPickup: [...state.waitingForPickup.filter((task) => task.id !== action.payload)],
        inTransport: [...state.inTransport, task],
    }
}

const handleDeliverTask = (state: ITaskState, action: PayloadAction<number>): ITaskState => {
    const task = state.inTransport.find((task) => task.id === action.payload);
    if (!task) {
        return state;
    }

    return {
        ...state,
        inTransport: [...state.inTransport.filter((task) => task.id !== action.payload)],
        delivered: [...state.delivered.slice(state.delivered.length >= MAX_TASKS_IN_LIST ? 1 : 0), task],
    }
}


export const taskSlice = createSlice({
    name: 'taskStateSlice',
    initialState,
    reducers: {
        addTask: handleAddTask,
        acceptTask: handleAcceptTask,
        pickupTask: handlePickupTask,
        deliverTask: handleDeliverTask,
    },
});

export const {
    addTask,
    acceptTask,
    pickupTask,
    deliverTask,
} = taskSlice.actions;

export const taskSliceSelector = (state: IRootState) => state.taskReducer;

export const taskSliceReducer = taskSlice.reducer;