import React from 'react';
import {ThreeBox} from "../BaseComponents";
import {SIM_BASE_HEIGHT, STORAGE_STATION_COLOR, STORAGE_STATION_HEIGHT} from "../../config";
import {Station} from "../../store/slice/baseSlice";


function StorageStation(props: Station) {
    const {width, length, posX, posY} = props;

    const posZ = (SIM_BASE_HEIGHT + STORAGE_STATION_HEIGHT) / 2;

    return (
        <ThreeBox position={[posX, posZ, posY]} rotation={[0,0,0]} size={[width ?? 1, STORAGE_STATION_HEIGHT, length ?? 1]} color={STORAGE_STATION_COLOR} />
    );
}

export default StorageStation;