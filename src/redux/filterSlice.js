import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: {
    filterValue: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filterValue = action.payload;
    },
  },
});
export const { setFilter } = slice.actions;
export const filterReducer = slice.reducer;

export const selectFilter = state => state.filter.filterValue;
