import { combineReducers } from "@reduxjs/toolkit";
import sidebar from './sidebar/sidebarSlice'

export const rootReducers = combineReducers ({
  sidebar,
})