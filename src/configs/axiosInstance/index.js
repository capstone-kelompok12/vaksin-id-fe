import axios from "axios";
import { CONST } from "../../utils/constants";
import Auth from "../../utils/Auth";

const config = {
  baseURL: CONST.BASE_URL_API,
};

const axiosInstance = axios.create(config);
axiosInstance.interceptors.request.use(
  req => {
    if (req.url.includes("vaccine") || req.url.includes("sessions")) {
      req.headers.Authorization = `Bearer ${Auth.getToken()}`;
    }
    return req;
  },
  err => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
