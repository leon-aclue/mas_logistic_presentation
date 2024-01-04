import React, {ReactNode} from 'react';
import StepChecker from "../control/StepChecker";
import BulletList, {ListItem} from "./BulletList";
import {BoxProps} from "@mui/material";
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
    header?: ReactNode;
    footer?: ReactNode;
    containerProps?: BoxProps;
    cameraConfig?: ICameraConfig;
}

interface IProps {
    listItemsList: MultiListItem[];
    step: number;
    fontVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'subtitle1' | 'subtitle2' | 'body1';
}

function MultiList(props: IProps) {
    const {listItemsList, step, fontVariant} = props;
    return (
        <>
            {listItemsList.map((listItems, index) => {
                const {items, header, footer, containerProps, cameraConfig} = listItems
                const startIndex = listItemsList.slice(0, index).flatMap((item) => item.items).length;
                const endIndex = startIndex + items.length;

                return (
                    <StepChecker key={index} minStep={startIndex} maxStep={endIndex - 1}>
                        <CameraHandler cameraConfig={cameraConfig}/>
                        {header && (
                            header
                        )}
                        <BulletList
                            items={items}
                            fontVariant={fontVariant}
                            numberToShow={step - startIndex + 1}
                            containerProps={containerProps}
                        />
                        {footer && (
                            footer
                        )}
                    </StepChecker>
                )
            })}
        </>
    );
}

export default MultiList;

export function getTotalLength(listItemsList: MultiListItem[]): number {
    return listItemsList.flatMap((item) => item.items).length;
}