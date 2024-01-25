import React, {useEffect, useState} from 'react';
import {useFrame} from "@react-three/fiber";
import {useDispatch, useSelector} from "react-redux";
import {agvSliceSelector, updateAGVs} from "../../store/slice/agvSlice";
import {AGV_STEP_SIZE, AGV_STEP_TURN} from "../../config";
import {dif2D} from "../../utils/util";
import {baseSliceSelector, simuStep} from "../../store/slice/baseSlice";
import {allNodes as allNodesImport, INodes, positionFromNode} from "../../nodes";

function AgvControl() {
    const {runSimulation, currentStep} = useSelector(baseSliceSelector);
    const {agvs} = useSelector(agvSliceSelector);
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
                // agv drive
                dispatch(updateAGVs(
                    agvs.map((agvState) => {
                        const destinationNodes = [...agvState.destinationNodes];
                        if (destinationNodes.length === 0) {
                            return agvState;
                        }

                        const agv = {...agvState.agv};

                        const destination = destinationNodes[0]!;
                        const [destDifX, destDifY] = dif2D(agv.position, positionFromNode(destination));
                        if (Math.abs(destDifX) < AGV_STEP_SIZE && Math.abs(destDifY) < AGV_STEP_SIZE) {
                            // reached destination
                            // ... ?
                            // do task at destination
                            return {
                                id: agvState.id,
                                agv,
                                destinationNodes: destinationNodes.slice(1),
                                currentNode: destinationNodes[0],
                                nextNode: undefined,
                                nextRotation: undefined,
                            }
                        }

                        const currentNode = agvState.currentNode;
                        let nextNode = agvState.nextNode;
                        let rotation = agvState.nextRotation;

                        if (!nextNode || rotation === undefined) {
                            let neighbour = currentNode.neighbours.find((neighbour) => neighbour.nodeId === destination.id);
                            let nextNodeId = neighbour?.nodeId;
                            rotation = neighbour?.rotation;

                            if (!nextNodeId || rotation === undefined) {
                                if (allNodes.decisionsMap.has(currentNode.id)) {
                                    nextNodeId = allNodes.decisionsMap.get(currentNode.id)!.get(destination.id);
                                    rotation = currentNode.neighbours.find((neigbour) => neigbour.nodeId === nextNodeId)?.rotation;
                                }
                                if (!nextNodeId || rotation === undefined) {
                                    nextNodeId = currentNode.neighbours[0].nodeId;
                                    rotation = currentNode.neighbours[0].rotation;
                                }
                            }
                            nextNode = allNodes.nodes.get(nextNodeId)!;
                        }


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
                                return {
                                    id: agvState.id,
                                    agv,
                                    destinationNodes: destinationNodes,
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

                        return {
                            id: agvState.id,
                            agv,
                            destinationNodes,
                            currentNode,
                            nextNode,
                            nextRotation: rotation,
                        };
                    })
                ));

                // task gen
            }
            dispatch(simuStep());
        }
    });

    return (<></>);
}

export default AgvControl;