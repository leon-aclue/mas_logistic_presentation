import React from 'react';
import {Typography, useTheme} from "@mui/material";
import FullWidthSpaceBetweenContainer from "../container/FullWidthSpaceBetweenContainer";
import VerticalContainer from "../container/VerticalContainer";

function MainHeader() {
    const theme = useTheme();
    return (
       <FullWidthSpaceBetweenContainer
           flexDirection='row'
           paddingY='10px'
           paddingX='40px'
           bgcolor={theme.palette.primary.main}
           color={theme.palette.primary.contrastText}
       >
           <img src='/HAW_logo.svg' alt="HAW_Logo" height='50px'/>
           <VerticalContainer>
               <Typography variant='subtitle1'>
                   BA Seminar
               </Typography>
               <Typography variant='subtitle1'>
                   Agenten und Multiagentensysteme
               </Typography>
           </VerticalContainer>
           <VerticalContainer>
               <Typography variant='subtitle1'>
                    Leon
               </Typography>
               <Typography variant='subtitle1'>
                    Schwarzenberger
               </Typography>
           </VerticalContainer>
       </FullWidthSpaceBetweenContainer>
    );
}

export default MainHeader;