import React from 'react';
import {ThreeBox} from "../BaseComponents";
import {SIM_BASE_HEIGHT, STORAGE_STATION_COLOR, STORAGE_STATION_HEIGHT} from "../../config";
import {IStation} from "../../store/slice/baseSlice";
import StorageArea from "./StorageArea";

interface IProps {
    station: IStation,
    showStorageAreas?: boolean,
}

function StorageStation(props: IProps) {
    const {station, showStorageAreas} = props
    const {width, length, posX, posY, storageAreas} = station;

    const posZ = (SIM_BASE_HEIGHT + STORAGE_STATION_HEIGHT) / 2;

    return (
        <>
            <ThreeBox position={[posX, posZ, posY]} rotation={[0, 0, 0]}
                      size={[width ?? 1, STORAGE_STATION_HEIGHT, length ?? 1]} color={STORAGE_STATION_COLOR}/>
            {showStorageAreas && storageAreas.map((storageArea) => (
                <StorageArea {...storageArea} />
            ))}
        </>

    );
}

export default StorageStation;