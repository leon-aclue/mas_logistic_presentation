import React from 'react';
import {ThreeArr2, ThreeArr3, ThreeLine} from "../ThreeBaseComponents";
import {CHARGING_AREA_COLOR, CHARGING_AREA_LENGTH, CHARGING_AREA_WIDTH, LINE_POS_Y, LINE_WIDTH} from "../../config";


function ChargingArea(props: ThreeArr2) {
    const posX = props[0];
    const posY = props[1];

    const difX = CHARGING_AREA_WIDTH / 2;
    const difY = CHARGING_AREA_LENGTH / 2;

    const p1: ThreeArr3 = [posX - difX, LINE_POS_Y, posY - difY];
    const p2: ThreeArr3 = [posX - difX, LINE_POS_Y, posY + difY];
    const p3: ThreeArr3 = [posX + difX, LINE_POS_Y, posY + difY];
    const p4: ThreeArr3 = [posX + difX, LINE_POS_Y, posY - difY];

    return (
        <ThreeLine points={[p1, p2, p3, p4, p1]} color={CHARGING_AREA_COLOR} width={LINE_WIDTH}/>
    );
}

export default ChargingArea;