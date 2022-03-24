import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "./themeReducer";
import currentReducer from "./currentReducer";

export default configureStore({
  reducer: {
    theme: themeReducer,
    current: currentReducer
  }
})