import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

// create a slice for terminals
export const selectSlice = createSlice({
  name: "selectSlice",
  initialState,
  reducers: {
    changeSomeProjectSelected: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const thereIsAProjectSelected = (state: {
  somethingSelected: { value: boolean };
}) => state.somethingSelected.value;

export const {
  changeSomeProjectSelected: changeSomeProjectSelectedActionCreator,
} = selectSlice.actions;

export default selectSlice.reducer;
