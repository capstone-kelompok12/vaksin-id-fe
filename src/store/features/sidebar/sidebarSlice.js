import { createSlice } from "@reduxjs/toolkit"

const initialState ={
  open: true
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers:{
    toggleSidebar: (state) =>{
      state.open = !state.open
    }
  }
})

export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;