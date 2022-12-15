import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../features/languageSlice";
export const store = configureStore({
  reducer: {
    language: languageReducer,
    
    
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

