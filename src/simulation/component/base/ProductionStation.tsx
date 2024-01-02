import React from 'react';
import {ThreeBox} from "../BaseComponents";
import {PRODUCTION_STATION_COLOR, PRODUCTION_STATION_HEIGHT, SIM_BASE_HEIGHT} from "../../config";
import {Station} from "../../store/slice/baseSlice";


function ProductionStation(props: Station) {
    const {width, length, posX, posY} = props;

    const posZ = (SIM_BASE_HEIGHT + PRODUCTION_STATION_HEIGHT) / 2;

    return (
        <ThreeBox position={[posX, posZ, posY]} rotation={[0,0,0]} size={[width ?? 1, PRODUCTION_STATION_HEIGHT, length ?? 1]} color={PRODUCTION_STATION_COLOR} />
    );
}

export default ProductionStation;