import React, {ReactNode} from 'react';
import BulletList, {Background, ListItem} from "./BulletList";
import {BoxProps, TypographyVariant} from "@mui/material";
import {ICameraConfig} from "../../simulation/store/slice/cameraSlice";
import CameraHandler from "../../simulation/component/control/CameraHandler";
import {SimulationCategory, SimulationWorldItem} from "../../simulation/SimulationWorld";

interface EmptyStartListItemProps {
    activateItems?: SimulationWorldItem[],
    deactivateItems?: SimulationWorldItem[],
    background?: Background,
}
export const emptyStartListItem = (props?: EmptyStartListItemProps): ListItem => {
    return {
        title: '',
        itemProps: {height: 0},
        ...props,
    }
};

export interface MultiListItem {
    items: ListItem[];
    showAllItems?: boolean;
    header?: ReactNode;
    footer?: ReactNode;
    fontVariant?: TypographyVariant;
    containerProps?: BoxProps;
    cameraConfig?: ICameraConfig;
    simulationCategory: SimulationCategory;
    background?: Background;
}

interface IProps {
    listItemsList: MultiListItem[];
    page: number;
    step: number;
}

function MultiList(props: IProps) {
    const {listItemsList, page, step} = props;
    const listItems = listItemsList[page];
    const {items, showAllItems, fontVariant, header, footer, containerProps, cameraConfig} = listItems

    const numberToShow = showAllItems ? items.length : step + 1;

    return (
        <>
            <CameraHandler cameraConfig={cameraConfig}/>
            {header && (
                header
            )}
            <BulletList
                items={items}
                fontVariant={fontVariant}
                numberToShow={numberToShow}
                containerProps={containerProps}
            />
            {footer && (
                footer
            )}
        </>
    );
}

export default MultiList;
