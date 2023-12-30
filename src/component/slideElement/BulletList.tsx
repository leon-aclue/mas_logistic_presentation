import React from 'react';
import VerticalContainer from "../container/VerticalContainer";
import {Box, BoxProps, Typography, useTheme} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

interface IProps {
    items: string[];
    numberToShow?: number;
    containerProps?: BoxProps;
    fontVariant: 'h1' | 'h2' | 'h3' | 'h4' | 'subtitle1' | 'subtitle2' | 'body1';
}

function BulletList(props: IProps) {
    const {items, numberToShow, containerProps, fontVariant} = props;
    const theme = useTheme();
    const bulletFontSize = (theme.typography[fontVariant].fontSize as unknown as number) / 1.5;

    return (
        <VerticalContainer {...containerProps}>
            {items
                .slice(0, Math.min(numberToShow ?? items.length, items.length))
                .map((item, index) => (
                <Box key={index} component='div' display="flex" flexDirection="row" alignItems='center' gap='10px' paddingY='10px'>
                    <CircleIcon sx={{fontSize: bulletFontSize}}/>
                    <Typography variant={fontVariant}>{item}</Typography>
                </Box>
            ))}
        </VerticalContainer>
    );
}

export default BulletList;