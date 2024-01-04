import React from 'react';
import {IAgv} from "./Agv";
import {rotateOffset2D} from "../../utils/util";
import {
    AGV_LASER_SENSOR_COLOR,
    AGV_LASER_SENSOR_HEIGHT,
    AGV_LASER_SENSOR_OFFSET_X,
    AGV_LASER_SENSOR_OFFSET_Y,
    AGV_LASER_SENSOR_OFFSET_Z,
    AGV_LASER_SENSOR_RADIUS
} from "../../config";
import {ThreeCylinder} from "../ThreeBaseComponents";


function AgvLaserSensor(props: IAgv) {
    const {position, rotation} = props;

    const rotatedPosition = rotateOffset2D(position, [AGV_LASER_SENSOR_OFFSET_X, AGV_LASER_SENSOR_OFFSET_Y], rotation);

    return (
        <ThreeCylinder
            position={[rotatedPosition[0], AGV_LASER_SENSOR_OFFSET_Z, rotatedPosition[1]]}
            rotation={[0, rotation, 0]}
            size={[AGV_LASER_SENSOR_RADIUS, AGV_LASER_SENSOR_RADIUS, AGV_LASER_SENSOR_HEIGHT]}
            color={AGV_LASER_SENSOR_COLOR}
        />
    );
}

export default AgvLaserSensor;