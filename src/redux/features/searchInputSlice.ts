import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

// create a slice for terminals
export const inputSearchSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const getInputValue = (state: any) => state.language;

export const { setInputValue: setInputValueActionCreator } =
  inputSearchSlice.actions;

export default inputSearchSlice.reducer;
