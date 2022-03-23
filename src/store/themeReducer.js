import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'dark',
  },
  reducers: {
    changeTheme(store, { payload }) {
      return { ...store, mode: payload === 'dark' ? 'light' : 'dark' }
    }
  }
})

export const { changeTheme } = slice.actions

export const selectTheme = state => state.mode

export default slice.reducer
