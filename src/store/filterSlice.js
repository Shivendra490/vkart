import { createSlice } from "@reduxjs/toolkit";


const initialItems={allItems:[],searchTerm:"",min:100,max:70000,sort:'ascending',category:'AllCategory',rating:'All'}

const filterSlice=createSlice({
    name:'allItems',
    initialState:initialItems,
    reducers:{
        addItems(state,action){
            state.allItems.push(...action.payload)
        },
        setSearchTerm(state,action){
            state.searchTerm=action.payload;
        },
        setSort(state,action){
            state.sort=action.payload;
        },
        setCategory(state,action){
            state.category=action.payload;
        },
        setRating(state,action){
            console.log('action',action)
            state.rating=action.payload
        },
        setMin(state,action){

            state.min=action.payload
        },
        setMax(state,action){
            if(action.payload===4000){
                state.max=70000
            }
            else{
                state.max=action.payload
            }
            
        },
        resetFilter(state){
            state.searchTerm="";
            state.min=100;
            state.max=70000;
            state.sort='ascending';
            state.category='AllCategory';
            state.rating='All'
        }
        

    }

})



const filterReducer=filterSlice.reducer;
export default filterReducer;
export const filterActions=filterSlice.actions;