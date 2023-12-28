import React from 'react';
import {IconButton, Typography, useTheme} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../store/store";
import {decreaseStep, increaseStep, setPage, setStep} from "../../store/slice/pageSlice";
import FullWidthCenterContainer from "../container/FullWidthCenterContainer";

function MainBottom() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const {page, step} = useSelector((state: IRootState) => state.pageStateSlice);

    const handleClickHome = () => {
        dispatch(setPage(0));
        dispatch(setStep(0));
    }

    const handleClickNext = () => {
        dispatch(increaseStep());
    }

    const handleClickPrevious = () => {
        dispatch(decreaseStep());
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
                <HomeIcon />
            </IconButton>
            <IconButton onClick={handleClickPrevious}>
                <ArrowBackIosNewIcon />
            </IconButton>
            <Typography variant='subtitle1'>
                {`${page}:${step}`}
            </Typography>
            <IconButton onClick={handleClickNext}>
                <ArrowForwardIosIcon />
            </IconButton>
        </FullWidthCenterContainer>
    );
}

export default MainBottom;