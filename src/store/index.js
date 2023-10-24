import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import filterReducer from './filterSlice';
import wishListReducer from './wishListSlice';


export const store = configureStore({
  reducer: {
    cart:cartReducer,wishListItems:wishListReducer,filter:filterReducer
  },
})

export default store;