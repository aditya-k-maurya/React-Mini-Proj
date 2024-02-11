import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../feature/todo/todoSlice'

export const store = configureStore({
  //store manages the state so it needs knowledge of the reducer
  reducer: todoReducer
  
});



