import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Redux/HomeRecuser'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})