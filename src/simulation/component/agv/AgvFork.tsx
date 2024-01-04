import React from 'react';
import {IAgv} from "./Agv";
import {rotateOffset2D} from "../../utils/util";
import {
    AGV_FORK_COLOR,
    AGV_FORK_HEIGHT,
    AGV_FORK_LENGTH,
    AGV_FORK_OFFSET_X,
    AGV_FORK_OFFSET_Y,
    AGV_FORK_OFFSET_Z,
    AGV_FORK_WIDTH
} from "../../config";
import {ThreeBox} from "../ThreeBaseComponents";


function AgvFork(props: IAgv) {
    const {position, rotation} = props;

    const rotatedPositionA = rotateOffset2D(position, [AGV_FORK_OFFSET_X, AGV_FORK_OFFSET_Y], rotation);
    const rotatedPositionB = rotateOffset2D(position, [AGV_FORK_OFFSET_X, -AGV_FORK_OFFSET_Y], rotation);

    return (
        <>
            <ThreeBox
                position={[rotatedPositionA[0], AGV_FORK_OFFSET_Z, rotatedPositionA[1]]}
                rotation={[0, rotation, 0]}
                size={[AGV_FORK_LENGTH, AGV_FORK_HEIGHT, AGV_FORK_WIDTH]}
                color={AGV_FORK_COLOR}
            />
            <ThreeBox
                position={[rotatedPositionB[0], AGV_FORK_OFFSET_Z, rotatedPositionB[1]]}
                rotation={[0, rotation, 0]}
                size={[AGV_FORK_LENGTH, AGV_FORK_HEIGHT, AGV_FORK_WIDTH]}
                color={AGV_FORK_COLOR}
            />
        </>
    );
}

export default AgvFork;