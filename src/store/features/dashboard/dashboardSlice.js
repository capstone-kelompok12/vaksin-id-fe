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

export const fetchBookings = createAsyncThunk(
  "fetch/dashboard/bookings",
  async () => {
    try {
      const response = await DashboardApi.Bookings();
      return response.data.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const fetchSessionsActive = createAsyncThunk(
  "fetch/dashboard/sessions",
  async () => {
    try {
      const response = await DashboardApi.SessionsActive();
      return response.data.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const fetchUserVaccinated = createAsyncThunk(
  "fetch/dashboard/history",
  async () => {
    try {
      const response = await DashboardApi.UserVaccinated();
      return response.data.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const fetchUserStatic = createAsyncThunk(
  "fetch/dashboard/statistics/users",
  async () => {
    try {
      const response = await DashboardApi.UserStatic();
      return response.data.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

const initialState = {
  data: [],
  dataVaksin: [],
  Bookings: 0,
  Sessions: 0,
  VaccinatedUser: 0,
  loading: false,
  error: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  extraReducers(builder) {
    builder
      // .addCase(fetchBookings.pending, state => {
      //   state.loading = true;
      //   state.error = false;
      // })
      // .addCase(fetchBookings.fulfilled, (state, { payload }) => {
      //   state.loading = false;
      //   state.error = false;
      //   state.Bookings = payload;
      // })
      // .addCase(fetchBookings.rejected, state => {
      //   state.loading = false;
      //   state.error = true;
      // })
      // .addCase(fetchSessions.pending, state => {
      //   state.loading = true;
      //   state.error = false;
      // })
      // .addCase(fetchSessions.fulfilled, (state, { payload }) => {
      //   state.loading = false;
      //   state.error = false;
      //   state.Sessions = payload;
      // })
      // .addCase(fetchSessions.rejected, state => {
      //   state.loading = false;
      //   state.error = true;
      // })
      // .addCase(fetchUserVaccinated.pending, state => {
      //   state.loading = true;
      //   state.error = false;
      // })
      // .addCase(fetchUserVaccinated.fulfilled, (state, { payload }) => {
      //   state.loading = false;
      //   state.error = false;
      //   state.VaccinatedUser = payload;
      // })
      // .addCase(fetchUserVaccinated.rejected, state => {
      //   state.loading = false;
      //   state.error = true;
      // });
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
