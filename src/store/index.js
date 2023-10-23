import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import appReducer from './appSlice';
import wishListReducer from './wishListSlice';


export const store = configureStore({
  reducer: {
    cart:cartReducer,appItems:appReducer,wishListItems:wishListReducer
  },
})

export default store;