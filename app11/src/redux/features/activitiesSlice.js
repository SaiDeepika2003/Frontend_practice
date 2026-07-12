import { createSlice } from "@reduxjs/toolkit"



const initialState={
  todos:[
  {id:1,title:'innovate',desc:'get an innovative idea to implement in business.'},
  {id:2,title:'research',desc:'Do research on the idea related to the business.'},
  {id:3,title:'plan',desc:'prepare a detailed plan.'}
]
}

const activitiesSlice=createSlice({
  name:'activitiesList',
  initialState,
  reducers:{

      removeActivity:(state,action)=>{

       const remainingItems=state.todos.filter((item)=>{
            if(item.id !== action.payload)
              return item;
       })
       state.todos=remainingItems;
      },

      addActivity:(state,action)=>{
            state.todos.push(action.payload);
      },

      updateActivity:(state,action)=>{
           const updatedItems=state.todos.map((item,index)=>{
            if(item.id===action.payload.id){
              return{
                id:action.payload.id,
                title:action.payload.title,
                desc:action.payload.desc
              }
            }
            return item;
           })
           state.todos=updatedItems;
      }

  }
})

export const{removeActivity,addActivity,updateActivity}=activitiesSlice.actions;
export default activitiesSlice.reducer;

