import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../store/store";
import {decreasePage, increasePage, setStep} from "../../store/slice/pageSlice";

interface IProps {
    maxSteps: number;
}

function StepHandler(props: IProps) {
    const {maxSteps} = props;

    const dispatch = useDispatch();
    const {step} = useSelector((state: IRootState) => state.pageStateSlice);

    useEffect(() => {
        if(step >= maxSteps) {
            dispatch(setStep(0));
            dispatch(increasePage());
        } else if(step < 0) {
            dispatch(setStep(0));
            dispatch(decreasePage());
        }
    }, [step]);

    return {step}
}

export default StepHandler;