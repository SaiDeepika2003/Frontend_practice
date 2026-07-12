import { createSlice } from "@reduxjs/toolkit";

const initialState={
        eid : 101,
        ename:'pavan kalyan',
        esal : 10000,
        eaddress :'Hyderabad',
        erole:'HR'
}


const employeeObjectSlice =createSlice({

  name : 'employeeSlice',
  initialState,
  reducers:{

    hike:(state,action)=>{
          state.esal=state.esal+action.payload;
    },
    changeRole:(state,action)=>{
          state.erole='Developer'
    }

    

  }


})

export const{hike,changeRole}=employeeObjectSlice.actions

export default employeeObjectSlice.reducer;