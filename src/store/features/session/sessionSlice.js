import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import APISession from "../../../apis/session.api"
import getKehadiranStatus from "../../../utils/getKehadiranStatus"
import getSessionStatus from "../../../utils/getSessionStatus"

const INIT_SESSION_DETAIL = {
  Booking: [],
  Capacity: 0,
  CapacityLeft: 0,
  CreatedAt: "",
  Date: "",
  Dose: 0,
  EndSession: "",
  ID: "",
  IdVaccine: "",
  IsClose: false,
  SessionName: "",
  StartSession: "",
  UpdatedAt: "",
  Vaccine: {}
}

const initialState = {
  data: [],
  detail: INIT_SESSION_DETAIL,
  loading: false,
  error: false
}

export const getSessionList = createAsyncThunk('get/sessionList', async() =>{
  try{
    const res = await APISession.getSessionList()
    return res.data.data
  }catch(err){
    throw err
  }
})

export const getSessionDetail = createAsyncThunk('get/sessionDetail', async(id) =>{
  try{
    const res = await APISession.getSessionDetail(id)
    return res.data.data
  }catch(err){
    throw err
  }
})

export const addSession = createAsyncThunk('add/session', async(data) =>{
  try{
    const res = await APISession.addSession(data)
    return res.data.data
  }catch(err){
    throw err
  }
})

export const confirmBooking = createAsyncThunk('update/bookStatus', async(data) =>{
  try{
    const res = await APISession.confirmBooking(data)
    console.log(res)
    return res.data.data
  }catch(err){
    throw err
  }
})

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers(builder){
    builder
      .addCase(getSessionList.pending, (state) =>{
        state.loading = true
        state.error = false
      })
      .addCase(getSessionList.fulfilled, (state, {payload}) =>{
        state.loading = false
        state.data = payload.map(val =>{
          const {StartSession, EndSession, CapacityLeft, Date} = val
          const {status, color} = getSessionStatus({StartSession, EndSession, CapacityLeft, Date})
          return({...val, status, color})
        })
        state.error = false
      })
      .addCase(getSessionList.rejected, (state) =>{
        state.loading = false
        state.error = true
      })
      .addCase(getSessionDetail.pending, (state) =>{
        state.loading = true
        state.error = false
      })
      .addCase(getSessionDetail.fulfilled, (state, {payload}) =>{
        state.loading = false
        const {StartSession, EndSession, CapacityLeft, Date} = payload
        const {status, color} = getSessionStatus({StartSession, EndSession, CapacityLeft, Date})
        const Booking = payload.Booking.map(val =>{
          const {kehadiran, attendColor} = getKehadiranStatus(val.Status)
          return {...val, kehadiran, attendColor}
        })
        state.detail = {...payload, status, color, Booking}
        state.error = false
      })
      .addCase(getSessionDetail.rejected, (state) =>{
        state.loading = false
        state.error = true
      })
      .addCase(addSession.pending, (state) =>{
        state.loading = true
        state.error = false
      })
      .addCase(addSession.fulfilled, (state, {payload}) =>{
        state.loading = false
        state.error = false
        const {StartSession, EndSession, CapacityLeft, Date} = payload
        const {status, color} = getSessionStatus({StartSession, EndSession, CapacityLeft, Date})
        state.data.unshift({...payload, color, status, Booking: []})
        toast.success('Berhasil menambahkan session!')
      })
      .addCase(addSession.rejected, (state) =>{
        state.loading = false
        state.error = true
        toast.error('Gagal menambahkan session!')
      })
      .addCase(confirmBooking.pending, (state) =>{
        state.loading = true
        state.error = false
      })
      .addCase(confirmBooking.fulfilled, (state, {payload}) =>{
        state.loading = false
        state.error = false

        const updated = state.detail.Booking.map(val =>{
          const changed = payload.map(val => val.ID)
          const [updated] = payload

          if(changed.some(id => id === val.ID)){
            const [currentData] = payload.filter(item => item.ID === val.ID)
            return {...val, Status: updated.Status, Queue: currentData.Queue}
          }return val;
        })
        state.detail = {...state.detail, Booking: updated}
        toast.success('Berhasil konfirmasi booking!')
      })
      .addCase(confirmBooking.rejected, (state) =>{
        state.loading = false
        state.error = true
        toast.error('Gagal konfirmasi booking!')
      })
  },
  reducers:{
    confirmKehadiran: (state, action) =>{
      const {id, status} = action.payload
      const Booking = state.detail.Booking.map(val =>{
        if(val.ID === id){
          const {kehadiran, attendColor} = getKehadiranStatus(status)
          return {...val, kehadiran, attendColor}
        }return val
      })
      state.detail = {...state.detail, Booking}
      toast.success('Berhasil konfirmasi kehadiran!')
    },
    confirmKehadiranMultiple: (state, {payload}) =>{
      const {arrID, status} = payload
      const updated = state.detail.Booking.map(val =>{
      if(arrID.some(id => id === val.ID)){
        const {kehadiran, attendColor} = getKehadiranStatus(status)
        return {...val, kehadiran, attendColor}
      }return val;
    })

    state.detail = {...state.detail, Booking: updated}
    toast.success('Berhasil konfirmasi booking!')
    }
  }
})
export const { confirmKehadiran, confirmKehadiranMultiple } = sessionSlice.actions;

export default sessionSlice.reducer;