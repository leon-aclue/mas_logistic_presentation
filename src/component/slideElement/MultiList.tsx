import React, {ReactNode, useEffect, useRef} from 'react';
import BulletList, {Background, ListItem} from "./BulletList";
import {BoxProps, TypographyVariant} from "@mui/material";
import {ICameraConfig} from "../../simulation/store/slice/cameraSlice";
import CameraHandler from "../../simulation/component/control/CameraHandler";
import {SimulationCategory, SimulationWorldItem} from "../../simulation/SimulationWorld";
import VerticalContainer from "../container/VerticalContainer";

interface EmptyStartListItemProps {
    activateSimulationItems?: SimulationWorldItem[],
    deactivateSimulationItems?: SimulationWorldItem[],
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
    children?: ReactNode;
}

interface IProps {
    listItemsList: MultiListItem[];
    page: number;
    step: number;
}

function MultiList(props: IProps) {
    const {listItemsList, page, step} = props;
    const listItems = listItemsList[page];
    const {items, showAllItems, fontVariant, header, footer, containerProps, cameraConfig, children} = listItems

    const boxRef = useRef();
    const numberToShow = showAllItems ? items.length : step + 1;

    // on next step scroll to bottom
    useEffect(() => {
        if (boxRef.current) {
            // @ts-ignore
            boxRef.current.scrollTop = boxRef.current.scrollHeight;
        }
    }, [numberToShow])

    return (
        <>
            <CameraHandler cameraConfig={cameraConfig}/>
            {header && (
                header
            )}
            <VerticalContainer
                flex={1}
                ref={boxRef}
                width="100%"
                overflow='auto'
            >
                <BulletList
                    items={items}
                    fontVariant={fontVariant}
                    numberToShow={numberToShow}
                    containerProps={containerProps}
                />
                {children && (
                    children
                )}
            </VerticalContainer>
            {footer && (
                footer
            )}
        </>
    );
}

export default MultiList;
