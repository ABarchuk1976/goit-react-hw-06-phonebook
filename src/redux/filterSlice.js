import { createSlice } from '@reduxjs/toolkit';

export const getFilter = state => state.filter;

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: {
      reducer(state, action) {
        return (state = action.payload);
      },
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
