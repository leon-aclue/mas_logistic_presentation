import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IPageState {
    page: number;
}

const initialState: IPageState = {
  page: 0,
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

export const pageSlice = createSlice({
  name: 'pageStateSlice',
  initialState,
  reducers: {
    increasePage: handlePageIncrease,
    decreasePage: handlePageDecrease,
    setPage: handlePageSet,
  },
});

export const {
  increasePage,
  decreasePage,
  setPage,
} = pageSlice.actions;

export default pageSlice.reducer;
