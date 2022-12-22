import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import DashboardApi from "../../../apis/dashboard.api";
import APIVaksin from "../../../apis/vaksin.api";

export const getVaksinList = createAsyncThunk("get/vaksin", async () => {
  try {
    const res = await APIVaksin.getVaksinList();
    return res.data.data;
  } catch (err) {
    throw err;
  }
});

export const fetchUserStatic = createAsyncThunk(
  "fetch/dashboard/statistics/users",
  async () => {
    try {
      const response = await DashboardApi.UserStatic();
      return response.data.data;
    } catch (err) {
      return err;
    }
  }
);

const initialState = {
  data: [],
  dataVaksin: [],
  loading: false,
  error: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchUserStatic.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchUserStatic.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = false;
        state.data = payload;
      })
      .addCase(fetchUserStatic.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getVaksinList.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getVaksinList.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = false;
        state.dataVaksin = payload;
      })
      .addCase(getVaksinList.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default dashboardSlice.reducer;
