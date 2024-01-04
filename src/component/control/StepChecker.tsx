import React, {ReactNode} from 'react';
import {useSelector} from "react-redux";
import {pageSliceSelector} from "../../store/slice/pageSlice";

interface IProps {
    minStep?: number,
    maxStep?: number,
    children: ReactNode,
}

function StepChecker(props: IProps) {
    const {minStep, maxStep, children} = props;
    const {step} = useSelector(pageSliceSelector);

    if (!((!minStep || step >= minStep) && (!maxStep || step <= maxStep))) {
        return null;
    }

    return (
        <>
            {children}
        </>
    );
}

export default StepChecker;