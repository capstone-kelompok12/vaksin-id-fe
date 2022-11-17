import axios from "axios";
import { CONST } from "../../utils/constants";

const config = {
  baseURL: CONST.BASE_URL_API,
  headers:{
    'api-key-name': CONST.API_KEY
  }
}

export const axiosInstance = axios.create(config)