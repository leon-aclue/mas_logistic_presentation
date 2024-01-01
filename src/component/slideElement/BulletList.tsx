import React from 'react';
import VerticalContainer from "../container/VerticalContainer";
import {BoxProps, Typography, useTheme} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import MuiBox from "../container/MuiBox";
import {ArrowForward} from "@mui/icons-material";

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
}

interface IProps {
    header?: string;
    items: ListItem[];
    numberToShow?: number;
    containerProps?: BoxProps;
    fontVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'subtitle1' | 'subtitle2' | 'body1';
}

function BulletList(props: IProps) {
    const {header, items, numberToShow, containerProps, fontVariant} = props;
    const theme = useTheme();
    const bulletFontSize = (theme.typography[fontVariant ?? 'subtitle1'].fontSize as unknown as number) / 1.5;

    return (
        <VerticalContainer
            flex={1}
            overflow='auto'
            {...containerProps}
        >
            {header && (
                <Typography variant={fontVariant}>{header}</Typography>
            )}
            {items
                .slice(0, Math.min(numberToShow ?? items.length, items.length))
                .map((item, index) => {
                    const paddingLeft = (item.tab ?? 0) * 2;
                    let icon;
                    switch (item.type) {
                        case ListItemType.ITEM:
                            icon = <CircleIcon sx={{fontSize: bulletFontSize}}/>;
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
                            <Typography variant={fontVariant}>{item.title}</Typography>
                        </MuiBox>
                    )
                })}
        </VerticalContainer>
    );
}

export default BulletList;