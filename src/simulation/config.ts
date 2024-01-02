import {Station} from "./store/slice/baseSlice";
import {PerspectiveCameraProps} from "@react-three/fiber";

// help functions
const createStationRow = (width: number, length: number, posX: number, startPosY: number, steps: number, stepWidth: number) => {
    const stations: Station[] = [];

    for(let step = 0; step < steps; step++) {
        stations.push({
            width,
            length,
            posX,
            posY: startPosY + (step * stepWidth),
        })
    }

    return stations;
}

// base
export const SIM_BASE_WIDTH = 100;
export const SIM_BASE_LENGTH = 130;
export const SIM_BASE_HEIGHT = 0.1;
export const SIM_BASE_POS_X = SIM_BASE_WIDTH / 2;
export const SIM_BASE_POS_Y = SIM_BASE_LENGTH / 2;
export const SIM_BASE_COLOR = 'gray'

export const CAMERA_CONFIG: PerspectiveCameraProps = {fov: 18, position: [-150, 200, SIM_BASE_LENGTH + 120]}

export const PRODUCTION_STATION_WIDTH = 9;
export const PRODUCTION_STATION_LENGTH = 4;
export const PRODUCTION_STATION_HEIGHT = 3;
export const PRODUCTION_STATION_COLOR = 'green';
export const STORAGE_STATION_WIDTH = 90;
export const STORAGE_STATION_LENGTH = 15;
export const STORAGE_STATION_HEIGHT = 20;
export const STORAGE_STATION_COLOR = '#555';

// production stations
export const PRODUCTION_STATIONS: Station[] = [
    ...createStationRow(PRODUCTION_STATION_WIDTH, PRODUCTION_STATION_LENGTH, 10, 40, 9, 10),
    ...createStationRow(PRODUCTION_STATION_WIDTH, PRODUCTION_STATION_LENGTH, 30, 50, 3, 10),
    ...createStationRow(PRODUCTION_STATION_WIDTH, PRODUCTION_STATION_LENGTH, 30, 90, 3, 10),
    ...createStationRow(PRODUCTION_STATION_WIDTH, PRODUCTION_STATION_LENGTH, 40, 50, 3, 10),
    ...createStationRow(PRODUCTION_STATION_WIDTH, PRODUCTION_STATION_LENGTH, 40, 90, 3, 10),
    ...createStationRow(PRODUCTION_STATION_WIDTH, PRODUCTION_STATION_LENGTH, 60, 50, 3, 10),
    ...createStationRow(PRODUCTION_STATION_WIDTH, PRODUCTION_STATION_LENGTH, 60, 90, 4, 10),
    ...createStationRow(PRODUCTION_STATION_WIDTH, PRODUCTION_STATION_LENGTH, 70, 50, 3, 10),
    ...createStationRow(PRODUCTION_STATION_WIDTH, PRODUCTION_STATION_LENGTH, 90, 40, 5, 10),
];

export const STORAGE_STATIONS: Station[] = [
    {
        width: STORAGE_STATION_WIDTH,
        length: STORAGE_STATION_LENGTH,
        posX: 50,
        posY: 10,
    }
]


// lines
export const LINE_POS_Y = 0.05;
export const LINE_WIDTH = 5;



