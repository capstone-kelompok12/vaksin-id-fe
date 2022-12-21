import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import APIVaksin from "../../../apis/vaksin.api";

const initialState = {
  data: [],
  loading: false,
  error: false
}

export const getVaksinList = createAsyncThunk('get/vaksin', async() =>{
  try{
    const res = await APIVaksin.getVaksinList()
    return res.data.data
  }catch(err){
    throw err
  }
})

export const addVaksin = createAsyncThunk('add/vaksin', async(data) =>{
  try{
    const res = await APIVaksin.addVaksin(data)
    return res.data.data
  }catch(err){
    throw err
  }
})

export const updateStock = createAsyncThunk('update/vaksin', async(data) =>{
  const {id} = data
  delete data.id
  try{
    const res = await APIVaksin.updateStock({id, data})
    return res.data.data
  }catch(err){
    throw err
  }
})

export const deleteVaksin = createAsyncThunk('delete/vaksin', async(id) =>{
  try{
    const res = await APIVaksin.deleteVaksin(id)
    return {res, id}
  }catch(err){
    throw err
  }
})

export const vaksinSlice = createSlice({
  name: 'vaksin',
  initialState,
  extraReducers(builder){
    builder.addCase(getVaksinList.pending, (state) =>{
      state.loading = true
      state.error = false
    })
    builder.addCase(getVaksinList.fulfilled, (state, {payload}) =>{
      state.loading = false
      state.error = false
      state.data = payload
    })
    builder.addCase(getVaksinList.rejected, (state) =>{
      state.loading = false
      state.error = true
    })
    builder.addCase(addVaksin.pending, (state) =>{
      state.loading = true
      state.error = false
    })
    builder.addCase(addVaksin.fulfilled, (state, {payload}) =>{
      state.loading = false
      state.error = false
      state.data.unshift(payload)
      toast.success('Berhasil menambahkan vaksin!')
    })
    builder.addCase(addVaksin.rejected, (state) =>{
      state.loading = false
      state.error = true
      toast.error('Gagal menambahkan vaksin!')
    })
    builder.addCase(updateStock.pending, (state) =>{
      state.loading = true
      state.error = false
    })
    builder.addCase(updateStock.fulfilled, (state, {payload}) =>{
      state.loading = false
      state.error = false
      state.data = state.data.map(val =>{
        if(val.ID === payload.ID) return payload
        return val
      })
      toast.success('Berhasil mengubah stok vaksin!')
    })
    builder.addCase(updateStock.rejected, (state) =>{
      state.loading = false
      state.error = true
      toast.error('Gagal mengubah stok vaksin!')
    })
    builder.addCase(deleteVaksin.pending, (state) =>{
      state.loading = true
      state.error = false
    })
    builder.addCase(deleteVaksin.fulfilled, (state, {payload}) =>{
      state.loading = false
      state.error = false
      state.data = state.data.filter(val => val.ID !== payload.id)
      toast.success('Berhasil menghapus vaksin!')
    })
    builder.addCase(deleteVaksin.rejected, (state) =>{
      state.loading = false
      state.error = true
      toast.error('Gagal menghapus vaksin!')
    })
  }
})

export default vaksinSlice.reducer;