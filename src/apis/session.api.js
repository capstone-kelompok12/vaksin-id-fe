import {axiosInstance} from '../configs/axiosInstance'
import Auth from '../utils/Auth'

const token = Auth.getToken()
const headers = {
  Authorization: `Bearer ${token}`
}

const APISession = {
  async getSessionList(){
    try{
      const res = await axiosInstance.get('/admin/sessions', {headers})
      return res
    }catch(err){
      throw err
    }
  },
  async addSession(data){
    try{
      const res = await axiosInstance.post(`/admin/sessions`, data, {headers})
      return res
    }catch(err){
      throw err
    }
  }
}

export default APISession;