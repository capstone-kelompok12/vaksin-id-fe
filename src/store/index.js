import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./features";

export const store = configureStore({
  reducer:rootReducers,
  devTools: process.env.NODE_ENV === 'development',
})