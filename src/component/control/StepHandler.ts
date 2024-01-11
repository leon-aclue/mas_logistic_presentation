import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decreasePage, increasePage, pageSliceSelector, setPage, setStep} from "../../store/slice/pageSlice";
import {MultiListItem} from "../slideElement/MultiList";

interface IProps {
    listItemsList: MultiListItem[],
}

function StepHandler(props: IProps) {
    const {listItemsList} = props;

    const dispatch = useDispatch();
    const {page, step} = useSelector(pageSliceSelector);
    const maxPages = listItemsList.length;
    const maxSteps = listItemsList[page]?.showAllItems ? 1 : listItemsList[page]?.items.length ?? 1;

    useEffect(() => {
        if (page > maxPages) {
            dispatch(setPage(maxPages));
        }
    }, [page]);

    useEffect(() => {
        if (step >= maxSteps) {
            dispatch(setStep(0));
            dispatch(increasePage());
        } else if (step < 0) {
            let newStep = 0;
            if (page >= 1 && !listItemsList[page - 1].showAllItems) {
                newStep = listItemsList[page - 1].items.length - 1
            }
            dispatch(setStep(newStep));
            dispatch(decreasePage());
        }
    }, [step]);

    return {page, step}
}

export default StepHandler;