import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {baseSliceSelector, setSimuDelay, startSimulation, stopSimulation} from "../../store/slice/baseSlice";
import {Button, TextField, Typography} from "@mui/material";
import {AgvCommand, IAGVPlanUpdate, IAgvState, updateAgvPlan, updateAGVs} from "../../store/slice/agvSlice";
import {ROT_E, ROT_N, ROT_S} from "../../config";
import VerticalContainer from "../../../component/container/VerticalContainer";
import MuiBox from "../../../component/container/MuiBox";

function SimulationControls() {
    const dispatch = useDispatch();
    const {runSimulation, runDelay} = useSelector(baseSliceSelector);

    const handleRunToggle = () => {
        if (runSimulation) {
            dispatch(stopSimulation());
        } else {
            dispatch(startSimulation());
        }
    }

    const handleCreateDefaultPlan = () => {
        const newStates: IAgvState[] = [
            {
                id: 0,
                agv: {
                    position: [60, 19],
                    rotation: ROT_E,
                },
                plans: []
            },
            {
                id: 1,
                agv: {
                    position: [65, 19],
                    rotation: ROT_E,
                },
                plans: []
            },
        ];
        dispatch(updateAGVs(newStates));

        const agv1PlanUpdate: IAGVPlanUpdate = {
            agvId: 0,
            plans: [
                {
                    location: [60, 22],
                    rotation: ROT_E,
                    command: AgvCommand.DRIVE,
                },
                {
                    location: [60, 22],
                    rotation: ROT_S,
                    command: AgvCommand.DRIVE,
                },
                {
                    location: [50, 22],
                    rotation: ROT_S,
                    command: AgvCommand.DRIVE,
                },
                {
                    location: [50, 22],
                    rotation: ROT_E,
                    command: AgvCommand.DRIVE,
                },
                {
                    location: [50, 80],
                    rotation: ROT_E,
                    command: AgvCommand.DRIVE,
                },
            ],
        };
        dispatch(updateAgvPlan(agv1PlanUpdate));

        const agv2PlanUpdate: IAGVPlanUpdate = {
            agvId: 1,
            plans: [
                {
                    location: [65, 22],
                    rotation: ROT_E,
                    command: AgvCommand.DRIVE,
                },
                {
                    location: [65, 22],
                    rotation: ROT_N,
                    command: AgvCommand.DRIVE,
                },
                {
                    location: [80, 22],
                    rotation: ROT_N,
                    command: AgvCommand.DRIVE,
                },
                {
                    location: [80, 22],
                    rotation: ROT_E,
                    command: AgvCommand.DRIVE,
                },
                {
                    location: [80, 80],
                    rotation: ROT_E,
                    command: AgvCommand.DRIVE,
                },
                {
                    location: [80, 80],
                    rotation: ROT_S,
                    command: AgvCommand.DRIVE,
                },
                {
                    location: [84, 80],
                    rotation: ROT_S,
                    command: AgvCommand.DRIVE,
                },
            ],
        };
        dispatch(updateAgvPlan(agv2PlanUpdate));
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