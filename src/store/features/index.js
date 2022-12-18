import { combineReducers } from "@reduxjs/toolkit";
import sidebar from "./sidebar/sidebarSlice";
import vaksin from "./vaksin/vaksinSlice";
import session from "./session/sessionSlice";
import dashboard from "./dashboard/dashboardSlice";

export const rootReducers = combineReducers({
  sidebar,
  vaksin,
  dashboard,
  session,
});
