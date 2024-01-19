import React, {useEffect, useState} from 'react';
import {IconButton, Typography, useTheme} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {useDispatch, useSelector} from "react-redux";
import {
    decreasePage,
    decreaseStep,
    increasePage,
    increaseStep, nextFullPage,
    pageSliceSelector, previousFullPage,
    setPage,
    setStep
} from "../../store/slice/pageSlice";
import FullWidthCenterContainer from "../container/FullWidthCenterContainer";
import PrintIcon from "@mui/icons-material/Print";
import {activatePrintMode} from "../../store/slice/globalSlice";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import MuiBox from "../container/MuiBox";
function MainFooter() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const {page, step} = useSelector(pageSliceSelector);
    const [showFooter, setShowFooter] = useState(true);

    const handleClickHome = () => {
        dispatch(setPage(0));
        dispatch(setStep(0));
    }

    const handleClickNextStep = () => {
        dispatch(increaseStep());
    }

    const handleClickNext = () => {
        dispatch(nextFullPage());
    }

    const handleClickPreviousStep = () => {
        dispatch(decreaseStep());
    }

    const handleClickPrevious = () => {
        dispatch(previousFullPage());
    }

    const handleClickPrint = () => {
        dispatch(activatePrintMode());
    }

    const handleClickClose = () => {
        setShowFooter(false);
    }

    const handleClickOpen = () => {
        setShowFooter(true);
    }

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'Escape':
                    handleClickOpen();
                    break;
                case 'ArrowUp':
                    handleClickPrevious();
                    break;
                case 'ArrowDown':
                    handleClickNext();
                    break;
                case 'ArrowLeft':
                    handleClickPreviousStep();
                    break;
                case 'ArrowRight':
                    handleClickNextStep();
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    });


    return (
        <>
            <MuiBox display="flex" width="100%" justifyContent="end" height={0} maxHeight={0} overflow="overflow">
                <MuiBox marginTop="-25px" paddingRight="10px">
                    <Typography variant="subtitle2" color="primary.main" paddingBottom="5px">{page}</Typography>
                </MuiBox>
            </MuiBox>
            {showFooter && (
                <FullWidthCenterContainer
                    flexDirection='row'
                    gap='20px'
                    bgcolor={theme.palette.background.default}
                    color={theme.palette.primary.contrastText}
                >
                    <IconButton onClick={handleClickHome}>
                        <HomeIcon/>
                    </IconButton>
                    <IconButton onClick={handleClickPrevious}>
                        <KeyboardDoubleArrowLeftIcon/>
                    </IconButton>
                    <IconButton onClick={handleClickPreviousStep}>
                        <ArrowBackIosNewIcon/>
                    </IconButton>
                    <Typography variant='subtitle1'>
                        {`${page}:${step}`}
                    </Typography>
                    <IconButton onClick={handleClickNextStep}>
                        <ArrowForwardIosIcon/>
                    </IconButton>
                    <IconButton onClick={handleClickNext}>
                        <KeyboardDoubleArrowRightIcon/>
                    </IconButton>
                    <IconButton onClick={handleClickPrint}>
                        <PrintIcon/>
                    </IconButton>
                    <IconButton onClick={handleClickClose}>
                        <CloseFullscreenIcon/>
                    </IconButton>
                </FullWidthCenterContainer>
            )}
        </>
    );
}

export default MainFooter;