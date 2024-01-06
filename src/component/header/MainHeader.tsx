import React from 'react';
import {Typography, useTheme} from "@mui/material";
import FullWidthSpaceBetweenContainer from "../container/FullWidthSpaceBetweenContainer";

function MainHeader() {
    const theme = useTheme();
    return (
        <FullWidthSpaceBetweenContainer
            flexDirection='row'
            alignItems='center'
            paddingY='10px'
            paddingX='40px'
            bgcolor={theme.palette.primary.main}
            color={theme.palette.primary.contrastText}
        >
            <img src='/HAW_logo.svg' alt="HAW_Logo" height='20px'/>
                <Typography variant='subtitle2'>
                    BA Seminar: Agenten und Multiagentensysteme
                </Typography>
                <Typography variant='subtitle2'>
                    Leon Schwarzenberger
                </Typography>
        </FullWidthSpaceBetweenContainer>
    );
}

export default MainHeader;