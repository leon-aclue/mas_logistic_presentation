import React from 'react';
import VerticalContainer from "../container/VerticalContainer";
import {BoxProps, Typography, TypographyVariant, useTheme} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import MuiBox from "../container/MuiBox";
import {ArrowForward} from "@mui/icons-material";
import {SimulationWorldItem} from "../../simulation/SimulationWorld";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export enum ListItemType {
    'NONE',
    'ITEM',
    'ANSWER',
    'PLUS',
    'MINUS',
    'CHECK',
    'CLOSE',
}

export interface Background {
    image: string,
    title: string,
    variant?: 'contain' | 'cover'
}

export interface ListItem {
    title: string;
    type?: ListItemType,
    tab?: number,
    itemProps?: BoxProps,
    fontVariant?: TypographyVariant,
    activateSimulationItems?: SimulationWorldItem[],
    deactivateSimulationItems?: SimulationWorldItem[],
    background?: Background,
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


    return (
        <VerticalContainer
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
                        case ListItemType.PLUS:
                            icon = <AddCircleOutlineIcon sx={{fontSize: bulletFontSize, color: 'success.main'}}/>;
                            break;
                        case ListItemType.MINUS:
                            icon = <RemoveCircleOutlineIcon sx={{fontSize: bulletFontSize, color: 'error.main'}}/>;
                            break;
                        case ListItemType.CHECK:
                            icon = <CheckIcon sx={{fontSize: bulletFontSize * 1.4, color: 'success.main'}}/>;
                            break;
                        case ListItemType.CLOSE:
                            icon = <CloseIcon sx={{fontSize: bulletFontSize * 1.4, color: 'error.main'}}/>;
                            break;
                        default:
                            icon = null;
                    }

                    return (
                        <MuiBox key={index} display="flex" flexDirection="row" paddingLeft={paddingLeft}
                                alignItems='center' gap='10px' {...item.itemProps}>
                            {icon && (
                                <MuiBox minWidth='20px' width='20px'>
                                    {icon}
                                </MuiBox>
                            )}
                            <Typography variant={itemFontVariant} paddingY='0.3rem'
                                        style={{whiteSpace: 'pre-line', lineHeight: '1.2rem'}}>{item.title}</Typography>
                        </MuiBox>
                    )
                })}
        </VerticalContainer>
    );
}

export default BulletList;