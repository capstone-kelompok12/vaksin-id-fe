import { combineReducers } from "@reduxjs/toolkit";
import sidebar from './sidebar/sidebarSlice'
import vaksin from './vaksin/vaksinSlice'

export const rootReducers = combineReducers ({
  sidebar,
  vaksin
})