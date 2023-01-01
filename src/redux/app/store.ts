import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../features/languageSlice";
import searchInputSlice from "../features/searchInputSlice";
import selectReducer from "../features/selectedSlice";
export const store = configureStore({
  reducer: {
    language: languageReducer,
    input: searchInputSlice,
    somethingSelected: selectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

