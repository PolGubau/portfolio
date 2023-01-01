import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../features/languageSlice";
import searchInputSlice from "../features/searchInputSlice";
export const store = configureStore({
  reducer: {
    language: languageReducer,
    input: searchInputSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
