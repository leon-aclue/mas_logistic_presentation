import React from 'react';
import {IAgv} from "./Agv";
import {rotateOffset2D} from "../../utils/util";
import {
    AGV_BASE_COLOR,
    AGV_BASE_HEIGHT,
    AGV_BASE_LENGTH,
    AGV_BASE_OFFSET_X,
    AGV_BASE_OFFSET_Y,
    AGV_BASE_OFFSET_Z,
    AGV_BASE_WIDTH
} from "../../config";
import {ThreeBox} from "../ThreeBaseComponents";


function AgvBase(props: IAgv) {
    const {position, rotation} = props;

    const rotatedPosition = rotateOffset2D(position, [AGV_BASE_OFFSET_X, AGV_BASE_OFFSET_Y], rotation);
    const rotatedPosition2 = rotateOffset2D(position, [AGV_BASE_OFFSET_X + AGV_BASE_LENGTH, AGV_BASE_OFFSET_Y], rotation);

    return (
        <>
            <ThreeBox
                position={[rotatedPosition[0], AGV_BASE_OFFSET_Z, rotatedPosition[1]]}
                rotation={[0, rotation, 0]}
                size={[AGV_BASE_LENGTH, AGV_BASE_HEIGHT, AGV_BASE_WIDTH]}
                color={AGV_BASE_COLOR}
            />
            <ThreeBox
                position={[rotatedPosition2[0], AGV_BASE_OFFSET_Z / 2, rotatedPosition2[1]]}
                rotation={[0, rotation, 0]}
                size={[AGV_BASE_LENGTH, AGV_BASE_HEIGHT / 2, AGV_BASE_WIDTH]}
                color={AGV_BASE_COLOR}
            />
        </>
    );
}

export default AgvBase;