import { createSlice } from "@reduxjs/toolkit";


const initialWishListState={totalWishListItems:[]}

const wishListSlice=createSlice({
    name:'wishList',
    initialState:initialWishListState,
    reducers:{
        addItemToWishList(state,action){
            state.totalWishListItems.push(action.payload)
        },
        removeItemFromWishList(state,action){
            // state.totalWishListItems.push(action.payload)
            state.totalWishListItems=state.totalWishListItems.filter(item=>item.id!==action.payload.id)
        },
        clearWishList(){

        }
        

    }

})



const wishListReducer=wishListSlice.reducer;
export default wishListReducer;
export const wishListActions=wishListSlice.actions;