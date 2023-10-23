import { createSlice } from "@reduxjs/toolkit";

const initialcartState = {
  cartItemList: [],
  totalCartPrice: 0,
  totalCartQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialcartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.totalCartPrice += newItem.price;
      state.totalCartQuantity += 1;
      const existingItem = state.cartItemList.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        newItem.totalQuantity = 1;
        newItem.totalPrice = newItem.price;
        state.cartItemList.push(newItem);
      } else {
        existingItem.totalPrice += newItem.price;
        existingItem.totalQuantity += 1;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      console.log(action);
      state.totalCartQuantity -= 1;
      const existingItem = state.cartItemList.find((item) => item.id === id);
      console.log(existingItem, id);
      state.totalCartPrice -= existingItem?.price;
      if (existingItem?.totalQuantity === 1) {
        const updatedCartList = state.cartItemList.filter(
          (item) => item?.id !== id
        );
        state.cartItemList = updatedCartList;
      } else {
        existingItem.totalQuantity--;
        existingItem.totalPrice -= existingItem?.price;
      }
    },
    removeCartUnitItem(state, action) {
      const item = action.payload;

      state.totalCartPrice -= item.totalPrice;
      state.totalCartQuantity -= item.totalQuantity;
      const updatedCartList = state.cartItemList.filter(
        (product) => product.id !== item.id
      );
      state.cartItemList = updatedCartList;
    },
    clearCart(state) {
      state.cartItemList.length = 0;
      state.totalCartPrice = 0;
      state.totalCartQuantity = 0;
    },
  },
});

const cartReducer = cartSlice.reducer;
export default cartReducer;
export const cartActions = cartSlice.actions;
