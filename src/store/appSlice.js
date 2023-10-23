import { createSlice } from "@reduxjs/toolkit";


const initialItems={allItems:[]}

const appSlice=createSlice({
    name:'allItems',
    initialState:initialItems,
    reducers:{
        addItems(state,action){
            state.allItems.push(...action.payload)
        }
        

    }

})



const appReducer=appSlice.reducer;
export default appReducer;
export const appActions=appSlice.actions;