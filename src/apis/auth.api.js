import axiosInstance from "../configs/axiosInstance"

const APIAuth = {
  async login(data){
    try{
      const res = await axiosInstance.post('/admin/login',data)
      return res.data
    }catch(err){
      throw err
    }
  },
  async getDetailHF(){
    try{
      const resAdmin = await axiosInstance.get(`/admin/profile`)
      const { IdHealthFacilities } = resAdmin.data.data;
      const resHF = await axiosInstance.get(`/healthfacilities`)
      const detailHF = resHF.data.data.filter(val => val.ID === IdHealthFacilities)
      
      return detailHF[0]
    }catch(err){
      throw err
    }
  }
}

export default APIAuth;