import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    baseSliceSelector,
    setSimuDelay,
    setSimuProductionRate,
    startAutoTaskGen,
    startSimulation,
    stopAutoTaskGen,
    stopSimulation
} from "../../store/slice/baseSlice";
import {Button, MenuItem, Select, SelectChangeEvent, Switch, TextField, Typography} from "@mui/material";
import VerticalContainer from "../../../component/container/VerticalContainer";
import MuiBox from "../../../component/container/MuiBox";
import {allNodes} from "../../nodes";
import {AgvCommand, agvSliceSelector, IAgvState, updateAgv} from "../../store/slice/agvSlice";
import FullWidthSpaceBetweenContainer from "../../../component/container/FullWidthSpaceBetweenContainer";
import {taskSliceSelector} from "../../store/slice/taskSlice";
import {setCameraConfig} from "../../store/slice/cameraSlice";
import {getZoomCameraConfig} from "../../config";

function SimulationControls() {
    const dispatch = useDispatch();
    const {runSimulation, runDelay, productionRate, generateTasks} = useSelector(baseSliceSelector);
    const {agvs} = useSelector(agvSliceSelector);
    const {readyForPickup, waitingForPickup, inTransport, delivered} = useSelector(taskSliceSelector);

    const [zoomAgvId, setZoomAgvId] = useState("");

    const zoomOptions = [...agvs].sort((a1, a2) => a2.id - a1.id)
        .map((agvState) => ({
            id: String(agvState.id),
            label: String(agvState.id),
        })).concat([{
            id: "",
            label: "Kein Zoom"
        }]);

    const handleRunToggle = () => {
        if (runSimulation) {
            dispatch(stopSimulation());
        } else {
            dispatch(startSimulation());
        }
    }

    const handleTaskGenToggle = () => {
        if (generateTasks) {
            dispatch(stopAutoTaskGen());
        } else {
            dispatch(startAutoTaskGen());
        }
    }

    const handleCreateDefaultPlan = () => {
        const newDest1 = allNodes.productionNodes.get("16-080");
        const newDest2 = allNodes.storageNodes.get("50-019");
        if (newDest1 && newDest2) {
            let agvState: IAgvState = {...agvs[0]}
            agvState.destinations = [...agvState.destinations, {
                node: newDest1,
                command: AgvCommand.LOAD
            }, {node: newDest2, command: AgvCommand.UNLOAD}];
            dispatch(updateAgv(agvState));

            //
            // agvState = {...agvs[1]}
            // agvState.destinations = [...agvState.destinations, {node: newDest1, command: AgvCommand.LOAD}, {node: newDest2, command: AgvCommand.UNLOAD}];
            // dispatch(updateAgv(agvState));
            //
            //
            // agvState = {...agvs[2]}
            // agvState.destinations = [...agvState.destinations, {node: newDest1, command: AgvCommand.LOAD}, {node: newDest2, command: AgvCommand.UNLOAD}];
            // dispatch(updateAgv(agvState));
        }
    }

    const handleSetZoomAgv = (event: SelectChangeEvent<string>) => {
        if (event.target.value === "") {
            dispatch(setCameraConfig());
        }
        setZoomAgvId(event.target.value);
    }

    useEffect(() => {
        if (zoomAgvId !== "") {
            const position = agvs.find((agvState) => agvState.id === parseInt(zoomAgvId))?.agv.position;
            if (position) {
                dispatch(setCameraConfig(getZoomCameraConfig(position)));
            }
        }
    }, [agvs, zoomAgvId])

    return (
        <VerticalContainer width="100%" flex={1} gap="10px">
            <FullWidthSpaceBetweenContainer alignItems="center">
                <Button variant="outlined" onClick={handleRunToggle} color={runSimulation ? "error" : "primary"}>
                    <Typography>{runSimulation ? "Stop" : "Start"}</Typography>
                </Button>
                <MuiBox display="flex" flexDirection="row" alignItems="center">
                    <Switch value={generateTasks} onChange={handleTaskGenToggle}/>
                    <Typography>generate Tasks</Typography>
                </MuiBox>
                <VerticalContainer>
                    <Typography>Zoom Verfolgung</Typography>
                    <Select
                        value={zoomAgvId}
                        onChange={handleSetZoomAgv}
                    >
                        {zoomOptions.map((option, index) => (
                            <MenuItem
                                value={option.id}
                                key={index}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </VerticalContainer>
            </FullWidthSpaceBetweenContainer>
            <FullWidthSpaceBetweenContainer flex={1}>
                <VerticalContainer>
                    <Typography variant="subtitle2">Neue Aufträge</Typography>
                    {readyForPickup.map((task, index) => (
                        <Typography key={index} variant="subtitle2">{task.pickUpNodeId}</Typography>
                    ))}
                </VerticalContainer>
            </FullWidthSpaceBetweenContainer>
            <FullWidthSpaceBetweenContainer>
                <Button variant="outlined" onClick={handleCreateDefaultPlan}>
                    <Typography>create default plan</Typography>
                </Button>
            </FullWidthSpaceBetweenContainer>
            <FullWidthSpaceBetweenContainer>
                <VerticalContainer>
                    <Typography>Simulations Delay</Typography>
                    <TextField
                        value={runDelay}
                        onChange={(event) => {
                            const value = event.target.value;
                            if (value && value !== "") {
                                dispatch(setSimuDelay(parseInt(value)))
                            }
                        }}
                        type="number"
                    />
                </VerticalContainer>
                <VerticalContainer>
                    <Typography>Produktionsrate (°% Step)</Typography>
                    <TextField
                        value={productionRate}
                        onChange={(event) => {
                            const value = event.target.value;
                            if (value && value !== "") {
                                dispatch(setSimuProductionRate(parseInt(value)))
                            }
                        }}
                        type="number"
                    />
                </VerticalContainer>
            </FullWidthSpaceBetweenContainer>
        </VerticalContainer>
    );
}

export default SimulationControls;

export const simulationControlsElem = <SimulationControls/>;