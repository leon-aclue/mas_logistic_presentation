import React from 'react';
import {ThreeArr2, ThreeBox} from "../BaseComponents";
import {
    REFLECTOR_STATION_COLOR,
    REFLECTOR_STATION_HEIGHT,
    REFLECTOR_STATION_LENGTH,
    REFLECTOR_STATION_WIDTH,
    SIM_BASE_HEIGHT
} from "../../config";


function ReflectorStation(props: ThreeArr2) {
    const posX = props[0];
    const posY = props[1];
    const posZ = (SIM_BASE_HEIGHT + REFLECTOR_STATION_HEIGHT) / 2;

    return (
        <ThreeBox position={[posX, posZ, posY]}
                  rotation={[0, 0, 0]}
                  size={[REFLECTOR_STATION_WIDTH, REFLECTOR_STATION_HEIGHT, REFLECTOR_STATION_LENGTH]}
                  color={REFLECTOR_STATION_COLOR}/>
    );
}

export default ReflectorStation;