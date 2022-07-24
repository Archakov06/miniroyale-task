import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  page: 0,
  searchValue: "",
  totalCount: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const selectSearchValue = (state: RootState) => state.filter.searchValue;

export const { setSearchValue, setPage, setTotalCount } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
