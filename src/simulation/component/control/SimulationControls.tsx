import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {baseSliceSelector, setSimuDelay, startSimulation, stopSimulation} from "../../store/slice/baseSlice";
import {Button, TextField, Typography} from "@mui/material";
import VerticalContainer from "../../../component/container/VerticalContainer";
import MuiBox from "../../../component/container/MuiBox";
import {allNodes} from "../../nodes";
import {agvSliceSelector, IAgvState, updateAgv} from "../../store/slice/agvSlice";

function SimulationControls() {
    const dispatch = useDispatch();
    const {runSimulation, runDelay} = useSelector(baseSliceSelector);
    const {agvs} = useSelector(agvSliceSelector);

    const handleRunToggle = () => {
        if (runSimulation) {
            dispatch(stopSimulation());
        } else {
            dispatch(startSimulation());
        }
    }

    const handleCreateDefaultPlan = () => {
        const newDest1 = allNodes.productionNodes.get("16-080");
        const newDest2 = allNodes.storageNodes.get("50-019");
        if (newDest1 && newDest2) {
            console.log(newDest1, newDest2);
            let agvState: IAgvState = {...agvs[0]}
            agvState.destinationNodes = [...agvState.destinationNodes, newDest1, newDest2];
            dispatch(updateAgv(agvState));


            agvState = {...agvs[1]}
            agvState.destinationNodes = [...agvState.destinationNodes, newDest1, newDest2];
            dispatch(updateAgv(agvState));


            agvState = {...agvs[2]}
            agvState.destinationNodes = [...agvState.destinationNodes, newDest1, newDest2];
            dispatch(updateAgv(agvState));
        }
    }

    return (
        <VerticalContainer width="100%" flex={1} gap="10px">
            <Button variant="outlined" onClick={handleRunToggle} color={runSimulation ? "error" : "primary"}>
                <Typography>{runSimulation ? "Stop" : "Start"}</Typography>
            </Button>
            <Button variant="outlined" onClick={handleCreateDefaultPlan}>
                <Typography>create default plan</Typography>
            </Button>
            <MuiBox>
                <Typography>Simulations Delay</Typography>
                <TextField
                    value={runDelay}
                    onChange={(event) => {
                        dispatch(setSimuDelay(parseInt(event.target.value)))
                    }}
                    type="number"
                />
            </MuiBox>
        </VerticalContainer>
    );
}

export default SimulationControls;

export const simulationControlsElem = <SimulationControls/>;