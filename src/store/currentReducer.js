import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'current',
  initialState: {
    state: '',
  },
  reducers: {
    changeCurrent(store, { payload }) {
      return { ...store, state: payload }
    }
  }
})

export const { changeCurrent } = slice.actions

export const selectCurrent = state => state.state

export default slice.reducer
