import {ILineSegment, IStation} from "./store/slice/baseSlice";
import {ThreeArr2} from "./component/ThreeBaseComponents";
import {IAgv} from "./component/agv/Agv";
import {ICameraConfig} from "./store/slice/cameraSlice";

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
const createInductiveWireRow = (posX1: number, posX2: number, startPosY: number, steps: number, stepWidth: number) => {
    const wires: ILineSegment[] = [];

    for (let step = 0; step < steps; step++) {
        const posY = startPosY + (step * stepWidth);
        wires.push({
            start: [posX1, posY],
            end: [posX2, posY],
        })
    }

    return wires;
}

export const getZoomCameraConfig = (position: ThreeArr2): ICameraConfig => {
    return {
        fov: 5,
        lookAt: [position[0], 0, position[1]]
    }
}

// base
export const SIM_BASE_WIDTH = 100;
export const SIM_BASE_LENGTH = 130;
export const SIM_BASE_HEIGHT = 0.1;
export const SIM_BASE_POS_X = SIM_BASE_WIDTH / 2;
export const SIM_BASE_POS_Y = SIM_BASE_LENGTH / 2;
export const SIM_BASE_COLOR = 'gray'
export const SIM_DEFAULT_DELAY = 1;

export const SIM_DEFAULT_PRODUCTION_RATE = 10;

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

export const VIRTUAL_ROUTE_COLOR = '#55a';
export const VIRTUAL_ROUTES: ILineSegment[] = [
    // vertical
    {start: [20, 23], end: [20, 121]},
    {start: [50, 23], end: [50, 121]},
    {start: [80, 23], end: [80, 84]},

    // horizontal
    {start: [20, 23], end: [80, 23]},
    {start: [50, 27], end: [80, 27]},
    {start: [20, 84], end: [80, 84]},
    {start: [20, 121], end: [50, 121]},
];

export const INDUCTIVE_WIRE_COLOR = '#a33';
export const INDUCTIVE_WIRES: ILineSegment[] = [
    // Production Stations
    ...createInductiveWireRow(16, 20, 40, 9, 10),
    ...createInductiveWireRow(20, 24, 50, 3, 10),
    ...createInductiveWireRow(20, 24, 90, 3, 10),
    ...createInductiveWireRow(46, 50, 50, 3, 10),
    ...createInductiveWireRow(46, 50, 90, 3, 10),
    ...createInductiveWireRow(50, 54, 50, 3, 10),
    ...createInductiveWireRow(50, 54, 90, 4, 10),
    ...createInductiveWireRow(76, 80, 50, 3, 10),
    ...createInductiveWireRow(80, 84, 40, 5, 10),
    // Storage Stations
    {start: [30, 19], end: [30, 23],},
    {start: [35, 19], end: [35, 23],},
    {start: [40, 19], end: [40, 23],},
    {start: [45, 19], end: [45, 23],},
    {start: [50, 19], end: [50, 23],},
    //Charging Stations
    {start: [60, 19], end: [60, 23],},
    {start: [65, 19], end: [65, 23],},
    {start: [70, 19], end: [70, 23],},
    {start: [75, 19], end: [75, 23],},
    {start: [80, 19], end: [80, 23],},
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

    [30, 30],
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
export const LINE_POS_Y = 0.01;
export const LINE_WIDTH = 3;

// AGV
export const AGV_BASE_WIDTH = 0.8;
export const AGV_BASE_LENGTH = 0.5;
export const AGV_BASE_HEIGHT = 2;
export const AGV_BASE_OFFSET_X = 1.55;
export const AGV_BASE_OFFSET_Y = 0;
export const AGV_BASE_OFFSET_Z = AGV_BASE_HEIGHT / 2;
export const AGV_BASE_COLOR = '#e60'

export const AGV_FORK_WIDTH = 0.2;
export const AGV_FORK_LENGTH = 1.5;
export const AGV_FORK_HEIGHT = 0.1;
export const AGV_FORK_OFFSET_X = 0.55;
export const AGV_FORK_OFFSET_Y = 0.3;
export const AGV_FORK_OFFSET_Z = AGV_FORK_HEIGHT / 2;
export const AGV_FORK_COLOR = '#333'

export const AGV_LASER_SENSOR_RADIUS = 0.07;
export const AGV_LASER_SENSOR_HEIGHT = 0.5;
export const AGV_LASER_SENSOR_OFFSET_X = 1.40;
export const AGV_LASER_SENSOR_OFFSET_Y = 0;
export const AGV_LASER_SENSOR_OFFSET_Z = AGV_LASER_SENSOR_HEIGHT / 2 + AGV_BASE_HEIGHT;
export const AGV_LASER_SENSOR_COLOR = '#333'

export const AGV_PRODUCT_WIDTH = 0.8;
export const AGV_PRODUCT_LENGTH = 1.2;
export const AGV_PRODUCT_HEIGHT = 1;
export const AGV_PRODUCT_OFFSET_X = 0.55;
export const AGV_PRODUCT_OFFSET_Y = 0;
export const AGV_PRODUCT_OFFSET_Z = AGV_PRODUCT_HEIGHT / 2 + 0.05;
export const AGV_PRODUCT_COLOR = '#433'

export const ROT_N = 0;
export const ROT_E = Math.PI * 1.5;
export const ROT_S = Math.PI;
export const ROT_W = Math.PI * 0.5;

export const AGV_STEP_SIZE = 0.5;
export const AGV_STEP_TURN = 0.157;

export const EXAMPLE_AGVS: IAgv[] = [
    {
        position: [60, 19],
        rotation: -1.55,
    },
    {
        position: [65, 19],
        rotation: -1.55,
    },
    {
        position: [20, 70],
        rotation: -1.55,
    },
    {
        position: [40, 84],
        rotation: 0,
    },
    {
        position: [84, 40],
        rotation: -3.1415,
    },
];
export const INITIAL_AGVS: IAgv[] = [
    {
        position: [60, 19],
        rotation: -1.55,
    },
    {
        position: [65, 19],
        rotation: -1.55,
    },
    {
        position: [70, 19],
        rotation: -1.55,
    },
    {
        position: [75, 19],
        rotation: -1.55,
    },
    {
        position: [80, 19],
        rotation: -1.55,
    },
];



