import {createSlice, PayloadAction} from '@reduxjs/toolkit';

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
  },
});

export const {
  increasePage,
  decreasePage,
  setPage,
  increaseStep,
  decreaseStep,
  setStep,
} = pageSlice.actions;

export default pageSlice.reducer;
