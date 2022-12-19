import axiosInstance from '../configs/axiosInstance'

const APISession = {
  async getSessionList(){
    try{
      const res = await axiosInstance.get('/admin/sessions')
      return res
    }catch(err){
      throw err
    }
  },
  async getSessionDetail(id){
    try{
      const res = await axiosInstance.get(`/admin/sessions/${id}`)
      return res
    }catch(err){
      throw err
    }
  },
  async addSession(data){
    try{
      const res = await axiosInstance.post(`/admin/sessions`, data)
      return res
    }catch(err){
      throw err
    }
  },
  // for confirm neither it accepted nor rejected
  async confirmBooking(data){
    try{
      const res = await axiosInstance.put('/admin/bookings/acc', data)
      return res
    }catch(err){
      throw err
    }
  },
  async closeSession(id){
    try{
      const res = await axiosInstance.put(`/admin/sessions/${id}/close`,{
        is_close: true
      })
      return res
    }catch(err){
      throw err
    }
  }
}

export default APISession;