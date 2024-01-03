import React from 'react';
import {ThreeBox} from "../BaseComponents";
import {PRODUCTION_STATION_COLOR, PRODUCTION_STATION_HEIGHT, SIM_BASE_HEIGHT} from "../../config";
import {IStation} from "../../store/slice/baseSlice";
import StorageArea from "./StorageArea";

interface IProps {
    station: IStation,
    showStorageAreas?: boolean,
}

function ProductionStation(props: IProps) {
    const {station, showStorageAreas} = props
    const {width, length, posX, posY, storageAreas} = station;

    const posZ = (SIM_BASE_HEIGHT + PRODUCTION_STATION_HEIGHT) / 2;

    return (
        <>
            <ThreeBox position={[posX, posZ, posY]} rotation={[0, 0, 0]}
                      size={[width ?? 1, PRODUCTION_STATION_HEIGHT, length ?? 1]} color={PRODUCTION_STATION_COLOR}/>
            {showStorageAreas && storageAreas.map((storageArea, index) => (
                <StorageArea key={index} {...storageArea} />
            ))}
        </>
    );
}

export default ProductionStation;