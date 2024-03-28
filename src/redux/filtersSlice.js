import { createSlice } from "@reduxjs/toolkit";
const initialState = { name: "" };
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setFilterName } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
export const selectFilterName = (state) => state.filters.name;
export default initialState;
