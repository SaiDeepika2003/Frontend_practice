import { createSlice } from "@reduxjs/toolkit";

const initialState=0;


const counterOneSlice=createSlice({
    name :  "counterOneSlice",
    initialState,
    reducers:{
        increment:(state,action)=>{
          return state+1;
        },
        decrement:(state,action)=>{
          return state-1;
        },
        reset:(state,action)=>{
          return initialState;
        }
    }
})

export const{increment,decrement,reset} = counterOneSlice.actions

export default counterOneSlice.reducer;