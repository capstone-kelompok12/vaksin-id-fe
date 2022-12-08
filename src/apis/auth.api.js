import { axiosInstance } from "../configs/axiosInstance"

const APIAuth = {
  async login(data){
    try{
      const res = await axiosInstance.post('/admin/login',data)
      return res.data
    }catch(err){
      // throw new Error(err)
      return err
    }
  }
}

export default APIAuth;