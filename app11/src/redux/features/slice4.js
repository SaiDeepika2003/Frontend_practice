import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchData=createAsyncThunk("products",async(id=null,{rejectedWithValue})=>{
  const url="https://fakestoreapi.com/products";

  try{

    const url="https://fakestoreapi.com/products";

        const response=await axios.get(url);

        return response.data
  }
  catch(err){
        return rejectedWithValue("sorry! unable to get the data from server")
  }
})





const initialState={
  productsList:[],
  status:'idle',
  errorMsg:''
}

const slice4=createSlice({
  name:"products",
  initialState,
  reducers:{

  },
  extraReducers:(builder)=>{
      builder
      .addCase(fetchData.pending,(state,action)=>{
              
              state.status='loading'

      })
      .addCase(fetchData.fulfilled,(state,action)=>{
              state.productsList=action.payload;
              state.status='success'
      })
      .addCase(fetchData.rejected,(state,action)=>{
                state.productsList=[];
                state.status='failed';
                state.errorMsg=action.payload
      })
  }

  
})
export default slice4.reducer;
  
