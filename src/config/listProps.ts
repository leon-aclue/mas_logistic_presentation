import {ICameraConfig} from "../simulation/store/slice/cameraSlice";
import {SimulationWorldItem} from "../simulation/SimulationWorld";

export const baseItemProps = {
    paddingTop: '20px',
};


export const navigationSystemsCameraConfig: ICameraConfig = {
    position: [0, 60, 60],
    lookAt: [30, 0, 30],
    fov: 40,
};

export const simulationWorldBaseItems: SimulationWorldItem[] = ['Base', 'ProductionStations', 'StorageStations', 'StorageAreas', 'DrivingArea'];

export const simulationWorldNavigationSystemsBaseItems: SimulationWorldItem[] = ['Base', 'ExampleWalls', 'ExampleAgv'];

export const baseTitleImagePath = "/titleImages/";