import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRootState} from "../../../store/store";
import {SIM_BASE_LENGTH, SIM_BASE_WIDTH} from "../../config";
import {ThreeArr3} from "../../component/ThreeBaseComponents";


export const defaultCameraPosition: ThreeArr3 = [-150, 200, SIM_BASE_LENGTH + 120];
export const defaultCameraFov: number = 18;
export const defaultCameraLookAt: ThreeArr3 = [SIM_BASE_WIDTH / 2, 0, SIM_BASE_LENGTH / 2];

export interface ICameraState {
    position: ThreeArr3;
    fov: number;
    lookAt: ThreeArr3;
}

export interface ICameraConfig {
    position?: ThreeArr3;
    fov?: number;
    lookAt?: ThreeArr3;
}

const initialState: ICameraState = {
    position: defaultCameraPosition,
    fov: defaultCameraFov,
    lookAt: defaultCameraLookAt,
};

const handleSetConfig = (state: ICameraState, action: PayloadAction<ICameraConfig | undefined>): ICameraState => {
    let position = defaultCameraPosition;
    let fov = defaultCameraFov;
    let lookAt = defaultCameraLookAt;

    if (action.payload?.position) {
        position = [...action.payload.position]
    }
    if (action.payload?.fov) {
        fov = action.payload.fov
    }
    if (action.payload?.lookAt) {
        lookAt = [...action.payload.lookAt]
    }

    return {
        position,
        fov,
        lookAt,
    }
}

export const cameraSlice = createSlice({
    name: 'cameraStateSlice',
    initialState,
    reducers: {
        setCameraConfig: handleSetConfig,
    },
});

export const {
    setCameraConfig,
} = cameraSlice.actions;

export const cameraSliceSelector = (state: IRootState) => state.cameraReducer;

export const cameraSliceReducer = cameraSlice.reducer;