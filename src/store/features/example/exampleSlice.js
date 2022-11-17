import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: 'loremlorem'
}

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers:{
    // add reducer here
  }
})

// export const { reducerAction, otherAction } = exampleSlice.actions;

export default exampleSlice.reducer;