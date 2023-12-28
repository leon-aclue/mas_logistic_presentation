import React, {ReactNode} from 'react';
import {useSelector} from "react-redux";
import {IRootState} from "../../store/store";

interface IProps {
    minStep?: number,
    maxStep?: number,
    children: ReactNode,
}

function StepChecker(props: IProps) {
    const {minStep, maxStep, children} = props;
    const {step} = useSelector((state: IRootState) => state.pageStateSlice);

    if(!((!minStep || step >= minStep) && (!maxStep || step <= maxStep))) {
        return null;
    }

    return (
        <>
            {children}
        </>
    );
}

export default StepChecker;