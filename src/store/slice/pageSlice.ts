import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IRootState} from "../store";
import {listItemsList} from "../../config/listItemsList";

interface IPageState {
    page: number;
    step: number;
}

const initialState: IPageState = {
    page: 0,
    step: 0,
};

const handlePageIncrease = (state: IPageState): IPageState => {
    const page = state.page + 1;
    return {
        ...state,
        page
    };
};
const handlePageDecrease = (state: IPageState): IPageState => {
    const page = Math.max(state.page - 1, 0);
    return {
        ...state,
        page
    };
};

const handlePageSet = (state: IPageState, action: PayloadAction<number>): IPageState => {
    const page = Math.max(action.payload, 0);
    return {
        ...state,
        page
    };
}

const handleStepIncrease = (state: IPageState): IPageState => {
    const step = state.step + 1;
    return {
        ...state,
        step
    };
};
const handleStepDecrease = (state: IPageState): IPageState => {
    const step = state.step - 1;
    return {
        ...state,
        step
    };
};

const handleStepSet = (state: IPageState, action: PayloadAction<number>): IPageState => {
    const step = Math.max(action.payload, 0);
    return {
        ...state,
        step
    };
}

const handlePreviousFullPage = (state: IPageState): IPageState => {
    const page = Math.max(state.page - 1, 0);
    const step = (page < listItemsList.length && !listItemsList[page].showAllItems)
        ? listItemsList[page].items.length - 1 : 0;
    return {
        ...state,
        step,
        page,
    };
}

const handleNextFullPage = (state: IPageState): IPageState => {
    const page = state.page + 1;
    const step = (page < listItemsList.length && !listItemsList[page].showAllItems)
        ? listItemsList[page].items.length - 1 : 0;
    return {
        ...state,
        step,
        page,
    };
}

export const pageSlice = createSlice({
    name: 'pageStateSlice',
    initialState,
    reducers: {
        increasePage: handlePageIncrease,
        decreasePage: handlePageDecrease,
        setPage: handlePageSet,
        increaseStep: handleStepIncrease,
        decreaseStep: handleStepDecrease,
        setStep: handleStepSet,
        previousFullPage: handlePreviousFullPage,
        nextFullPage: handleNextFullPage,
    },
});

export const {
    increasePage,
    decreasePage,
    setPage,
    increaseStep,
    decreaseStep,
    setStep,
    previousFullPage,
    nextFullPage,
} = pageSlice.actions;

export const pageSliceSelector = (state: IRootState) => state.pageReducer;

export const pageSliceReducer = pageSlice.reducer;
