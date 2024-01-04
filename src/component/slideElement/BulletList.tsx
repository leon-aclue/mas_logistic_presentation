import React, {useEffect, useRef} from 'react';
import VerticalContainer from "../container/VerticalContainer";
import {BoxProps, Typography, TypographyVariant, useTheme} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import MuiBox from "../container/MuiBox";
import {ArrowForward} from "@mui/icons-material";
import {SimulationWorldItem} from "../../simulation/SimulationWorld";

export enum ListItemType {
    'NONE',
    'ITEM',
    'ANSWER',
}

export interface ListItem {
    title: string;
    type?: ListItemType,
    tab?: number,
    itemProps?: BoxProps,
    fontVariant?: TypographyVariant,
    activateSimulationItems?: SimulationWorldItem[],
    deactivateSimulationItems?: SimulationWorldItem[],
}

interface IProps {
    items: ListItem[];
    fontVariant?: TypographyVariant;
    numberToShow?: number;
    containerProps?: BoxProps;
}

function BulletList(props: IProps) {
    const {items, fontVariant, numberToShow, containerProps} = props;
    const listFontVariant = fontVariant ?? 'subtitle1';
    const theme = useTheme();
    const boxRef = useRef();

    // on next step scroll to bottom
    useEffect(() => {
        if (boxRef.current) {
            // @ts-ignore
            boxRef.current.scrollTop = boxRef.current.scrollHeight;
        }
    }, [numberToShow])

    return (
        <VerticalContainer
            ref={boxRef}
            flex={1}
            overflow='auto'
            {...containerProps}
        >
            {items
                .slice(0, Math.min(numberToShow ?? items.length, items.length))
                .map((item, index) => {
                    const paddingLeft = (item.tab ?? 0) * 4;

                    const itemFontVariant = item.fontVariant ?? listFontVariant;
                    const bulletFontSize = (theme.typography[itemFontVariant].fontSize as unknown as number);

                    let icon;
                    switch (item.type) {
                        case ListItemType.ITEM:
                            icon = <CircleIcon sx={{fontSize: bulletFontSize / 2}}/>;
                            break;
                        case ListItemType.ANSWER:
                            icon = <ArrowForward sx={{fontSize: bulletFontSize}}/>;
                            break;
                        default:
                            icon = null;
                    }

                    return (
                        <MuiBox key={index} display="flex" flexDirection="row" paddingLeft={paddingLeft}
                                alignItems='center' gap='10px' {...item.itemProps}>
                            {icon}
                            <Typography variant={itemFontVariant}>{item.title}</Typography>
                        </MuiBox>
                    )
                })}
        </VerticalContainer>
    );
}

export default BulletList;