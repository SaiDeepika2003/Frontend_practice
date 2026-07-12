import { configureStore } from "@reduxjs/toolkit";
import counterOneReducer from './features/counterOneSlice'
import employeeReducer from './features/employeeObjectSlice'
import activitiesReducer from './features/activitiesSlice'
import productsReducer from './features/slice4'

const store=configureStore(
  {
      reducer:{
            slice1:counterOneReducer,

            slice2:employeeReducer,

            slice3:activitiesReducer,

            slice4:productsReducer
      }
  })

  
  export default store;
