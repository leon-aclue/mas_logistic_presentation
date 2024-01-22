import React, {ReactNode, useEffect, useState} from 'react';
import {Button, Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {
    decreaseStep,
    increaseStep,
    nextFullPage,
    previousFullPage,
    setPage,
    setStep
} from "../../store/slice/pageSlice";
import {activatePrintMode} from "../../store/slice/globalSlice";
import FullWidthSpaceBetweenContainer from "../container/FullWidthSpaceBetweenContainer";
import MuiBox from "../container/MuiBox";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FullWidthCenterContainer from "../container/FullWidthCenterContainer";

interface EntryProps {
    text: string;
    icon: ReactNode;
}

function Entry(props: EntryProps) {
    return (
        <FullWidthSpaceBetweenContainer alignItems="center">
            <MuiBox display="flex" justifyContent="center" width="20px">
                {props.icon}
            </MuiBox>
            <Typography>{props.text}</Typography>
        </FullWidthSpaceBetweenContainer>
    )
}


function KeyHandler() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(true);

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
        setOpen(false);
    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            console.log(event.key)
            switch (event.key) {
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
                case 'h':
                    handleClickOpen();
                    break;
                case 'p':
                    handleClickPrint();
                    break;
                case 's':
                    handleClickHome();
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    });

    return (
        <Dialog open={open}>
            <DialogTitle width={300} display="flex" justifyContent="center">
                <Typography variant="subtitle1">Steuerung</Typography>
            </DialogTitle>
            <DialogContent>
                <Entry text="nächster Schritt" icon={<KeyboardArrowRightIcon/>}/>
                <Entry text="vorheriger Schritt" icon={<KeyboardArrowLeftIcon/>}/>
                <Entry text="nächste Seite" icon={<KeyboardArrowDownIcon/>}/>
                <Entry text="vorherige Seite" icon={<KeyboardArrowUpIcon/>}/>
                <Entry text="Hilfe" icon={<Typography>h</Typography>}/>
                <Entry text="zum Start" icon={<Typography>s</Typography>}/>
                <Entry text="PPT erstellen" icon={<Typography>p</Typography>}/>
            </DialogContent>
            <FullWidthCenterContainer paddingBottom="20px">
                <Button onClick={handleClickClose} variant="outlined">
                    <Typography>Verstanden</Typography>
                </Button>
            </FullWidthCenterContainer>
        </Dialog>
    );
}

export default KeyHandler;