import {ILineSegment, IStation} from "./store/slice/baseSlice";
import {PerspectiveCameraProps} from "@react-three/fiber";
import {ThreeArr2} from "./component/BaseComponents";

// help functions
const createStationRow = (width: number, length: number, posX: number, startPosY: number, steps: number, stepWidth: number, storageAreaPosX: number) => {
    const stations: IStation[] = [];

    for (let step = 0; step < steps; step++) {
        const posY = startPosY + (step * stepWidth);
        stations.push({
            width,
            length,
            posX,
            posY,
            storageAreas: [
                [storageAreaPosX, posY,],
            ],
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

export const STORAGE_AREA_WIDTH = 1.5;
export const STORAGE_AREA_LENGTH = 1;
export const STORAGE_AREA_COLOR = 'green';

// production stations
export const PRODUCTION_STATIONS: IStation[] = [
    ...createStationRow(PRODUCTION_STATION_WIDTH, PRODUCTION_STATION_LENGTH, 10, 40, 9, 10, 16),
    ...createStationRow(PRODUCTION_STATION_WIDTH, PRODUCTION_STATION_LENGTH, 30, 50, 3, 10, 24),
    ...createStationRow(PRODUCTION_STATION_WIDTH, PRODUCTION_STATION_LENGTH, 30, 90, 3, 10, 24),
    ...createStationRow(PRODUCTION_STATION_WIDTH, PRODUCTION_STATION_LENGTH, 40, 50, 3, 10, 46),
    ...createStationRow(PRODUCTION_STATION_WIDTH, PRODUCTION_STATION_LENGTH, 40, 90, 3, 10, 46),
    ...createStationRow(PRODUCTION_STATION_WIDTH, PRODUCTION_STATION_LENGTH, 60, 50, 3, 10, 54),
    ...createStationRow(PRODUCTION_STATION_WIDTH, PRODUCTION_STATION_LENGTH, 60, 90, 4, 10, 54),
    ...createStationRow(PRODUCTION_STATION_WIDTH, PRODUCTION_STATION_LENGTH, 70, 50, 3, 10, 76),
    ...createStationRow(PRODUCTION_STATION_WIDTH, PRODUCTION_STATION_LENGTH, 90, 40, 5, 10, 84),
];

export const STORAGE_STATIONS: IStation[] = [
    {
        width: STORAGE_STATION_WIDTH,
        length: STORAGE_STATION_LENGTH,
        posX: 50,
        posY: 10,
        storageAreas: [
            [30, 19],
            [35, 19],
            [40, 19],
            [45, 19],
            [50, 19],
        ],
    }
];

export const DRIVING_AREA_SEGMENT_COLOR = 'yellow';
export const DRIVING_AREA_SEGMENTS: ILineSegment[] = [
    // vertical
    {start: [19, 22], end: [19, 122]},

    {start: [21, 45], end: [21, 83]},
    {start: [21, 85], end: [21, 120]},

    {start: [49, 45], end: [49, 83]},
    {start: [49, 85], end: [49, 120]},

    {start: [51, 45], end: [51, 83]},
    {start: [51, 85], end: [51, 122]},

    {start: [79, 45], end: [79, 83]},

    {start: [81, 22], end: [81, 85]},

    // horizontal
    {start: [19, 22], end: [81, 22]},

    {start: [21, 45], end: [49, 45]},
    {start: [21, 83], end: [49, 83]},
    {start: [21, 85], end: [49, 85]},
    {start: [21, 120], end: [49, 120]},
    {start: [19, 122], end: [51, 122]},

    {start: [51, 45], end: [79, 45]},
    {start: [51, 83], end: [79, 83]},
    {start: [51, 85], end: [81, 85]},
];

export const MAGNETIC_LINE_COLOR = '#a33';
export const MAGNETIC_LINES: ILineSegment[] = [
    // vertical
    {start: [20, 23], end: [20, 121]},
    {start: [50, 23], end: [50, 121]},
    {start: [80, 23], end: [80, 84]},

    // horizontal
    {start: [20, 23], end: [80, 23]},
    {start: [20, 27], end: [80, 27]},
    {start: [20, 84], end: [80, 84]},
    {start: [20, 121], end: [50, 121]},
];

export const REFLECTOR_STATION_WIDTH = 0.2;
export const REFLECTOR_STATION_LENGTH = 0.2;
export const REFLECTOR_STATION_HEIGHT = 4;
export const REFLECTOR_STATION_COLOR = '#333'
export const REFLECTOR_STATIONS: ThreeArr2[] = [
    [18, 25],
    [18, 55],
    [18, 85],
    [18, 115],

    [48, 35],
    [48, 45],
    [48, 65],
    [48, 95],
    [48, 115],

    [78, 35],
    [78, 55],
    [78, 65],

    [30, 31],
    [60, 31],
    [70, 31],

    [35, 80],
    [58, 80],
    [70, 80],
];

export const CHARGING_AREA_WIDTH = 1;
export const CHARGING_AREA_LENGTH = 1.5;
export const CHARGING_AREA_COLOR = 'blue'
export const CHARGING_AREAS: ThreeArr2[] = [
    [60, 19],
    [65, 19],
    [70, 19],
    [75, 19],
    [80, 19],
];


// lines
export const LINE_POS_Y = 0.04;
export const LINE_WIDTH = 3;



