import React, {ReactNode} from 'react';
import BulletList, {ListItem} from "./BulletList";
import {BoxProps, TypographyVariant} from "@mui/material";
import {ICameraConfig} from "../../simulation/store/slice/cameraSlice";
import CameraHandler from "../../simulation/component/control/CameraHandler";
import {SimulationWorldItem} from "../../simulation/SimulationWorld";

export const emptyStartListItem = (activateItems?: SimulationWorldItem[], deactivateItems?: SimulationWorldItem[]): ListItem => {
    return {
        title: '',
        itemProps: {height: 0},
        activateSimulationItems: activateItems,
        deactivateSimulationItems: deactivateItems,
    }
};

export interface MultiListItem {
    items: ListItem[];
    fontVariant?: TypographyVariant;
    header?: ReactNode;
    footer?: ReactNode;
    containerProps?: BoxProps;
    cameraConfig?: ICameraConfig;
}

interface IProps {
    listItemsList: MultiListItem[];
    page: number;
    step: number;
}

function MultiList(props: IProps) {
    const {listItemsList, page, step} = props;
    const listItems = listItemsList[page];
    const {items, fontVariant, header, footer, containerProps, cameraConfig} = listItems

    return (
        <>
            <CameraHandler cameraConfig={cameraConfig}/>
            {header && (
                header
            )}
            <BulletList
                items={items}
                fontVariant={fontVariant}
                numberToShow={step + 1}
                containerProps={containerProps}
            />
            {footer && (
                footer
            )}
        </>
    );
}

export default MultiList;
