import React from 'react';
import {ThreeBox} from "../BaseComponents";
import {SIM_BASE_COLOR, SIM_BASE_POS_X, SIM_BASE_POS_Y, SIM_BASE_HEIGHT} from "../../config";

interface IProps {
    width?: number,
    length?: number,
}

function Base(props: IProps) {
    const {width, length} = props;

    return (
        <ThreeBox position={[SIM_BASE_POS_X, 0, SIM_BASE_POS_Y]} rotation={[0,0,0]} size={[width ?? 1, SIM_BASE_HEIGHT, length ?? 1]} color={SIM_BASE_COLOR} />
    );
}

export default Base;