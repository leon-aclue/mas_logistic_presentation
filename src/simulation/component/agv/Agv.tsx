import React from 'react';
import {ThreeArr2} from "../ThreeBaseComponents";
import AgvBase from "./AgvBase";
import AgvFork from "./AgvFork";
import AgvLaserSensor from "./AgvLaserSensor";

export interface IAgv {
    position: ThreeArr2;
    rotation: number;
    hasProduct?: boolean;
}

function Agv(props: IAgv) {

    return (
        <>
            <AgvBase {...props} />
            <AgvFork {...props} />
            <AgvLaserSensor {...props} />
        </>
    );
}

export default Agv;