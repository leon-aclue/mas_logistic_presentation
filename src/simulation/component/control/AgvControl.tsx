import React from 'react';
import {useFrame} from "@react-three/fiber";
import {useDispatch, useSelector} from "react-redux";
import {AgvCommand, agvSliceSelector, updateAGVs} from "../../store/slice/agvSlice";
import {AGV_STEP_SIZE, AGV_STEP_TURN} from "../../config";
import {dif2D} from "../../utils/util";
import {baseSliceSelector, simuStep} from "../../store/slice/baseSlice";

function AgvControl() {
    const baseState = useSelector(baseSliceSelector);
    const agvsState = useSelector(agvSliceSelector);
    const dispatch = useDispatch();

    useFrame(() => {
        if (baseState.runSimulation) {
            if(baseState.currentStep === 0) {
                dispatch(updateAGVs(
                    agvsState.agvs.map((agvState) => {
                        let plans = [...agvState.plans];
                        if (!plans || !plans.length || plans.length === 0) {
                            return agvState;
                        }

                        const agv = {...agvState.agv};
                        const currentPlan = plans[0]!;

                        const [difX, difY] = dif2D(agv.position, currentPlan.location);
                        const difRot = (agv.rotation + (Math.PI * 2) - currentPlan.rotation) % (Math.PI * 2);

                        const rotDir = difRot <= Math.PI ? 1 : -1;
                        const rotationStep = Math.min(difRot, AGV_STEP_TURN) * rotDir;

                        switch (currentPlan.command) {
                            case AgvCommand.DRIVE:
                                agv.position = [
                                    agv.position[0] + (Math.min(Math.abs(difX), AGV_STEP_SIZE) * (difX > 0 ? 1 : -1)),
                                    agv.position[1] + (Math.min(Math.abs(difY), AGV_STEP_SIZE) * (difY > 0 ? 1 : -1)),
                                ];
                                let newRotation = agv.rotation - rotationStep;
                                newRotation = (newRotation + (Math.PI * 2)) % (Math.PI * 2)
                                agv.rotation = newRotation;
                                break;
                        }

                        if (Math.abs(difX) <= AGV_STEP_SIZE && Math.abs(difY) <= AGV_STEP_SIZE && Math.abs(difRot) <= AGV_STEP_TURN) {
                            plans = plans.slice(1);
                        }

                        return {
                            id: agvState.id,
                            agv,
                            plans,
                        };
                    })
                ));
            }
            dispatch(simuStep());
        }
    });

    return (<></>);
}

export default AgvControl;