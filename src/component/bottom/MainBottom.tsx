import React from 'react';
import {IconButton, Typography, useTheme} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../store/store";
import {decreasePage, decreaseStep, increasePage, increaseStep, setPage, setStep} from "../../store/slice/pageSlice";
import FullWidthCenterContainer from "../container/FullWidthCenterContainer";

function MainBottom() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const {page, step} = useSelector((state: IRootState) => state.pageStateSlice);

    const handleClickHome = () => {
        dispatch(setPage(0));
        dispatch(setStep(0));
    }

    const handleClickNextStep = () => {
        dispatch(increaseStep());
    }

    const handleClickNext = () => {
        dispatch(increasePage());
        dispatch(setStep(0));
    }

    const handleClickPreviousStep = () => {
        dispatch(decreaseStep());
    }

    const handleClickPrevious = () => {
        dispatch(decreasePage());
        dispatch(setStep(0));
    }

    return (
        <FullWidthCenterContainer
            flexDirection='row'
            gap='20px'
            paddingY='10px'
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
        </FullWidthCenterContainer>
    );
}

export default MainBottom;