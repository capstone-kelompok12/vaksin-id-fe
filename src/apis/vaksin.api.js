import { axiosInstance } from "../configs/axiosInstance";
import Auth from "../utils/Auth";

const token = Auth.getToken()

const APIVaksin = {
  async getVaksinList(){
    try{
      const res = await axiosInstance.get('/admin/vaccines',{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      return res
    }catch(err){
      throw err
    }
  },
  async addVaksin(data){
    try{
      const res = await axiosInstance.post('/admin/vaccines', data, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      return res;
    }catch(err){
      throw err;
    }
  }
}

export default APIVaksin;