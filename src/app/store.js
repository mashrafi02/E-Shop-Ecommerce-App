import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '../slices/sidebarSlice';

export default configureStore({
  reducer: {
    sidebarOpen: sidebarReducer,
  },
})