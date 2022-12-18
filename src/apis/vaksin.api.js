import axiosInstance from "../configs/axiosInstance";

const APIVaksin = {
  async getVaksinList(){
    try{
      const res = await axiosInstance.get('/admin/vaccines')
      return res
    }catch(err){
      throw err
    }
  },
  async addVaksin(data){
    try{
      const res = await axiosInstance.post('/admin/vaccines', data)
      return res;
    }catch(err){
      throw err;
    }
  },
  async updateStock({id, data}){
    try{
      const res = await axiosInstance.put(`/admin/vaccines/${id}`, data)
      return res
    }catch(err){
      throw err
    }
  },
  async deleteVaksin(id){
    try{
      const res = await axiosInstance.delete(`/admin/vaccines/${id}`)
      return res
    }catch(err){
      throw err
    }
  }
}

export default APIVaksin;