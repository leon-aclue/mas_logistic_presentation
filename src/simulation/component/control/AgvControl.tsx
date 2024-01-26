import React, {useEffect, useState} from 'react';
import {useFrame} from "@react-three/fiber";
import {useDispatch, useSelector} from "react-redux";
import {AgvCommand, agvSliceSelector, updateAgv, updateAGVs} from "../../store/slice/agvSlice";
import {AGV_STEP_SIZE, AGV_STEP_TURN} from "../../config";
import {dif2D} from "../../utils/util";
import {baseSliceSelector, simuStep} from "../../store/slice/baseSlice";
import {allNodes as allNodesImport, INodes, positionFromNode} from "../../nodes";
import {acceptTask, addTask, deliverTask, pickupTask, taskSliceSelector} from "../../store/slice/taskSlice";
import {trafficSliceSelector, updateTraffic} from "../../store/slice/trafficSlice";

function AgvControl() {
    const {runSimulation, currentStep, productionRate, generateTasks} = useSelector(baseSliceSelector);
    const {agvs} = useSelector(agvSliceSelector);
    const taskState = useSelector(taskSliceSelector);
    const {blocked, drop_planned} = useSelector(trafficSliceSelector);
    const dispatch = useDispatch();
    const [allNodes, setAllNodes] = useState<INodes | undefined>(undefined);

    useEffect(() => {
        if (runSimulation && !allNodes) {
            setAllNodes(allNodesImport);
        }
    }, [runSimulation])


    useFrame(() => {
        if (runSimulation && !!allNodes) {
            if (currentStep === 0) {
                let updatedBlocked = [...blocked];
                let updatedDropPlanned = [...drop_planned];

                // task gen
                if (generateTasks) {
                    if (Math.random() < productionRate / 1000) {
                        const stationIndex = Math.floor(Math.random() * allNodes.productionNodes.size)
                        const station = Array.from(allNodes.productionNodes.values())[stationIndex];
                        if (!station.hasProduct) {
                            dispatch(addTask({pickUpNodeId: station.id}));
                        }
                    }
                }

                const updatedAgvs = agvs.map((agvState) => {
                    const newState = {...agvState};
                    const destinations = [...agvState.destinations];
                    if (destinations.length === 0) {
                        return agvState;
                    }

                    const agv = {...agvState.agv};

                    const destination = destinations[0]!;
                    const [destDifX, destDifY] = dif2D(agv.position, positionFromNode(destination.node));
                    if (Math.abs(destDifX) < AGV_STEP_SIZE && Math.abs(destDifY) < AGV_STEP_SIZE) {
                        // reached destination
                        updatedBlocked = updatedBlocked.filter((entry) => entry !== agvState.currentNode.id);

                        // do task at destination
                        switch (destination.command) {
                            case AgvCommand.LOAD:
                                agv.hasProduct = true;
                                dispatch(pickupTask(agvState.taskId!))
                                break;
                            case AgvCommand.CHECK_DROP_OFF:
                                const options = Array.from(allNodes.storageNodes.values()).reverse();
                                const selectedOption = options.find((option) => !drop_planned.includes(option.id));
                                if (selectedOption) {
                                    newState.dropId = selectedOption.id;
                                    updatedDropPlanned.push(selectedOption.id);
                                    destinations.push({
                                        node: selectedOption,
                                        command: AgvCommand.UNLOAD,
                                    })
                                }
                                break;
                            case AgvCommand.UNLOAD:
                                agv.hasProduct = false;
                                destinations.push({
                                    node: allNodes.dropOffExitNode,
                                    command: AgvCommand.EXIT_DROP_OFF,
                                })
                                dispatch(deliverTask(agvState.taskId!))
                                break;
                            case AgvCommand.EXIT_DROP_OFF:
                                newState.taskId = undefined;
                                newState.dropId = undefined;
                                updatedDropPlanned = updatedDropPlanned.filter((entry) => entry !== agvState.dropId);
                                break;
                        }

                        return {
                            ...newState,
                            agv,
                            destinations: destinations.slice(1),
                            currentNode: destinations[0].node,
                            nextNode: undefined,
                            nextRotation: undefined,
                        }
                    }

                    const currentNode = agvState.currentNode;
                    let nextNode = agvState.nextNode;
                    let rotation = agvState.nextRotation;

                    if (!nextNode || rotation === undefined) {
                        let neighbour = currentNode.neighbours.find((neighbour) => neighbour.nodeId === destination.node.id);
                        let nextNodeId = neighbour?.nodeId;
                        rotation = neighbour?.rotation;

                        if (!nextNodeId || rotation === undefined) {
                            if (allNodes.decisionsMap.has(currentNode.id)) {
                                nextNodeId = allNodes.decisionsMap.get(currentNode.id)!.get(destination.node.id);
                                rotation = currentNode.neighbours.find((neigbour) => neigbour.nodeId === nextNodeId)?.rotation;
                            }
                            if (!nextNodeId || rotation === undefined) {
                                nextNodeId = currentNode.neighbours[0].nodeId;
                                rotation = currentNode.neighbours[0].rotation;
                            }
                        }
                        if (!updatedBlocked.find((entry) => entry === nextNodeId)) {
                            nextNode = allNodes.nodes.get(nextNodeId)!;
                            updatedBlocked.push(nextNodeId);
                        }
                    }

                    if (nextNode) {
                        const difRot = (agv.rotation + (Math.PI * 2) - rotation) % (Math.PI * 2);
                        // first check rotation
                        if (difRot < AGV_STEP_TURN) {
                            const [difX, difY] = dif2D(agv.position, positionFromNode(nextNode));
                            agv.position = [
                                agv.position[0] + (Math.min(Math.abs(difX), AGV_STEP_SIZE) * (difX > 0 ? 1 : -1)),
                                agv.position[1] + (Math.min(Math.abs(difY), AGV_STEP_SIZE) * (difY > 0 ? 1 : -1)),
                            ];

                            if (Math.abs(difX) < AGV_STEP_SIZE && Math.abs(difY) < AGV_STEP_SIZE) {
                                // reached nextNode
                                updatedBlocked = updatedBlocked.filter((entry) => entry !== agvState.currentNode.id);
                                return {
                                    ...agvState,
                                    agv,
                                    destinations: destinations,
                                    currentNode: nextNode,
                                    nextNode: undefined,
                                    nextRotation: undefined,
                                }
                            }
                            // only if rotation is good go in x / y
                        } else {
                            const rotDir = difRot <= Math.PI ? 1 : -1;
                            const rotationStep = Math.min(difRot, AGV_STEP_TURN) * rotDir;


                            let newRotation = agv.rotation - rotationStep;
                            newRotation = (newRotation + (Math.PI * 2)) % (Math.PI * 2)
                            agv.rotation = newRotation;
                        }
                    }

                    return {
                        ...agvState,
                        agv,
                        destinations,
                        currentNode,
                        nextNode,
                        nextRotation: rotation,
                    };
                })

                // agv drive
                dispatch(updateAGVs(updatedAgvs));
                dispatch(updateTraffic({blocked: updatedBlocked, drop_planned: updatedDropPlanned}))

                // check if new task needed
                updatedAgvs.filter((agvState) => !agvState.taskId)
                    .forEach((agvState, index) => {
                        const newState = {...agvState}
                        if (taskState.readyForPickup.length > index) {
                            const task = taskState.readyForPickup[index];
                            newState.taskId = task.id;
                            newState.destinations = [
                                {
                                    node: allNodes.productionNodes.get(task.pickUpNodeId)!,
                                    command: AgvCommand.LOAD,
                                },
                                {
                                    node: allNodes.dropOffWaitingNode, // Node vor Lager
                                    command: AgvCommand.CHECK_DROP_OFF,
                                },
                            ]
                            dispatch(acceptTask(task.id));
                        } else {
                            newState.destinations = [
                                {
                                    node: allNodes.chargeWaitingNode,
                                    command: AgvCommand.ENTRY_CHARGE,
                                },
                            ]
                        }
                        dispatch(updateAgv(newState));
                    });

            }
            dispatch(simuStep());
        }
    });

    return (<></>);
}

export default AgvControl;