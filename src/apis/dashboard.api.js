import axiosInstance from "../configs/axiosInstance";

const DashboardApi = {
  async fetchBookings() {
    try {
      const res = await axiosInstance.get("/dashboard/bookings");
      return res;
    } catch (err) {
      return err;
    }
  },
  async fetchSessionsActive() {
    try {
      const res = await axiosInstance.get("/dashboard/sessions");
      return res;
    } catch (err) {
      return err;
    }
  },
  async fetchSessionsDone() {
    try {
      const res = await axiosInstance.get("/dashboard/sessions/amount");
      return res;
    } catch (err) {
      return err;
    }
  },
  async fetchUserVaccinated() {
    try {
      const res = await axiosInstance.get("/dashboard/history");
      return res;
    } catch (err) {
      return err;
    }
  },
  async UserStatic() {
    try {
      const res = await axiosInstance.get("/dashboard/statistics/users");
      return res;
    } catch (err) {
      return err;
    }
  },
};

export default DashboardApi;
