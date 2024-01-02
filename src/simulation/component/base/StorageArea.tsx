import React from 'react';
import {ThreeArr3, ThreeLine} from "../BaseComponents";
import {LINE_POS_Y, LINE_WIDTH, STORAGE_AREA_COLOR, STORAGE_AREA_LENGTH, STORAGE_AREA_WIDTH} from "../../config";
import {IStorageArea} from "../../store/slice/baseSlice";


function StorageArea(props: IStorageArea) {
    const {posX, posY} = props;

    const difX = STORAGE_AREA_WIDTH / 2;
    const difY = STORAGE_AREA_LENGTH / 2;

    const p1: ThreeArr3 = [posX - difX, LINE_POS_Y, posY - difY];
    const p2: ThreeArr3 = [posX - difX, LINE_POS_Y, posY + difY];
    const p3: ThreeArr3 = [posX + difX, LINE_POS_Y, posY + difY];
    const p4: ThreeArr3 = [posX + difX, LINE_POS_Y, posY - difY];

    return (
        <ThreeLine points={[p1, p2, p3, p4, p1]} color={STORAGE_AREA_COLOR} width={LINE_WIDTH}/>
    );
}

export default StorageArea;