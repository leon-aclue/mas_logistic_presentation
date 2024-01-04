import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decreasePage, increasePage, pageSliceSelector, setStep} from "../../store/slice/pageSlice";

interface IProps {
    maxSteps: number;
}

function StepHandler(props: IProps) {
    const {maxSteps} = props;

    const dispatch = useDispatch();
    const {step} = useSelector(pageSliceSelector);

    useEffect(() => {
        if (step >= maxSteps) {
            dispatch(setStep(0));
            dispatch(increasePage());
        } else if (step < 0) {
            dispatch(setStep(0));
            dispatch(decreasePage());
        }
    }, [step]);

    return {step}
}

export default StepHandler;