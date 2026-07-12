import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/features/slice4';
import ProductItem from './ProductItem';
const AxiosDemo = () => {

 const{productsList,status,errorMsg} =useSelector((state)=>state.slice4)

 const dispatch=useDispatch();

 useEffect(()=>{
  if(status==='idle'){
        dispatch(fetchData())
  }
 },[productsList,dispatch])


  return (
    <React.Fragment>
        
        <h3>Products Data : {productsList.length}</h3>
        <hr></hr>

        <div className='container'>
                {
                  status==='loading' ? <p>Loading</p> :null
                }
                {
                  status==='rejected' ? <p>{errorMsg}</p> :null
                }
                {
                  productsList.length>0 ? <div className='row'>
                                                  {
                                                    productsList.map((item,index)=><ProductItem product={item}/>)
                                                  }

                                          </div> :<p>No records Available</p>
                }
        </div>

    </React.Fragment>
  )
}

export default AxiosDemo
