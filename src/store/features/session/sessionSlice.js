import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import APISession from "../../../apis/session.api"

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
        state.data = payload
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
        state.detail = payload
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
        state.data.unshift(payload)
        toast.success('Berhasil menambahkan session!')
      })
      .addCase(addSession.rejected, (state) =>{
        state.loading = false
        state.error = true
        toast.error('Gagal menambahkan session!')
      })
  }
})

export default sessionSlice.reducer;