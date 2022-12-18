import axiosInstance from "../configs/axiosInstance";

const DashboardApi = {
  async Bookings() {
    try {
      const res = await axiosInstance.get("/dashboard/bookings");
      return res;
    } catch (err) {
      return err;
    }
  },
  async SessionsActive() {
    try {
      const res = await axiosInstance.get("/dashboard/sessions");
      return res;
    } catch (err) {
      return err;
    }
  },
  async SessionsDone() {
    try {
      const res = await axiosInstance.get("/dashboard/sessions/amount");
      return res;
    } catch (err) {
      return err;
    }
  },
  async UserVaccinated() {
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
