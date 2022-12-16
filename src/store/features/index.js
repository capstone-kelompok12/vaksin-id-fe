import { combineReducers } from "@reduxjs/toolkit";
import sidebar from './sidebar/sidebarSlice'
import vaksin from './vaksin/vaksinSlice'
import session from './session/sessionSlice'

export const rootReducers = combineReducers ({
  sidebar,
  vaksin,
  session
})