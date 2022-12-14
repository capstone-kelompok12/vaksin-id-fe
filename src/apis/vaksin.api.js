import { axiosInstance } from "../configs/axiosInstance";
import Auth from "../utils/Auth";

const token = Auth.getToken()

const headers = {
  Authorization: `Bearer ${token}`
}

const APIVaksin = {
  async getVaksinList(){
    try{
      const res = await axiosInstance.get('/admin/vaccines', {headers})
      return res
    }catch(err){
      throw err
    }
  },
  async addVaksin(data){
    try{
      const res = await axiosInstance.post('/admin/vaccines', data, {headers})
      return res;
    }catch(err){
      throw err;
    }
  },
  async updateStock({id, data}){
    try{
      const res = await axiosInstance.put(`/admin/vaccines/${id}`, data, {headers})
      return res
    }catch(err){
      throw err
    }
  },
  async deleteVaksin(id){
    try{
      const res = await axiosInstance.delete(`/admin/vaccines/${id}`,{headers})
      return res
    }catch(err){
      throw err
    }
  }
}

export default APIVaksin;