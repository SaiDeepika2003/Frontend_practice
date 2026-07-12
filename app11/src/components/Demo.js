import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addActivity, removeActivity,updateActivity } from '../redux/features/activitiesSlice';

const Demo = () => {

  const activitiesList=useSelector((state)=>state.slice3.todos)
  
 const dispatch= useDispatch();

 const [action,setAction]=useState('add');


 const [formdata,setFormData]=useState({id:'',title:'',desc:''});

 const handleInput=(e)=>{
    setFormData({
      ...formdata,
      [e.target.name]:e.target.value,
    })
 }

 const handleSubmit=(e)=>{
          e.preventDefault();

          if(action === "add"){
              const newActivity={
                ...formdata,
                id:Date.now(),
              }
              dispatch(addActivity(newActivity))

              setFormData({
                id:'',
                title:'',
                desc:''
              })
          }
          else{
              const updateItem={...formdata}
              dispatch(updateActivity(updateItem))
              setAction("add");
              setFormData({id:'',title:'',desc:''})
               
          }

 }


 const editActivity=(id)=>{
          setAction("edit");
          
          const editItem=activitiesList.find((item)=>{
            if(item.id===id)
              return item;
          })
          setFormData(editItem)
 }

 
  return (
    <React.Fragment>
      <h1>Array of Objects Example</h1>
      <hr></hr>

    <div className='container my-5'>
      
        <div className='row'>

          <div className='col-md-6'>
                <div className='container'>
                  <h1>{action==="add" ? "Add Activity" : "Edit Activity"} </h1>
                  <form action={action} onSubmit={handleSubmit}>
                        <div class="mb-3 ">
                                <label for="id" class="form-label">Id</label>
                                <input type="text" class="form-control" id="id" name='id' value={formdata.id} onChange={handleInput}/>
                          </div>

                          <div class="mb-3">
                                <label for="title" class="form-label">Title</label>
                                <input type="text" class="form-control" id="title" name='title' value={formdata.title} onChange={handleInput}/>
                          </div>

                          <div class="mb-3">
                                <label for="desc" class="form-label">Description</label>
                                <textarea type="text" class="form-control" id="desc" rows="5"  name='desc' value={formdata.desc} onChange={handleInput}/>
                          </div>

                          <div class="mb-3">
                                <input type="submit" className='btn btn-lg btn-secondary' value={action==="add" ? "Add" :"Edit"}  />
                          </div>

                  </form>
                </div>
          </div>
          <div className='col-md-6'>
                {
                  activitiesList.length>0 ?
                   activitiesList.map((item,index)=>
                      <div className='card'>
                          <div className='card-body'>
                              <div><b>{item.title}</b></div>
                               <div>{item.desc}</div>
                                <button className='btn btn-sm btn-primary' onClick={()=>editActivity(item.id)}>EDIT</button>
                                <button className='btn btn-sm btn-danger mx-2' onClick={()=>dispatch(removeActivity(item.id))}>REMOVE</button>
                               
                            </div>

                        </div>
                  ) :null
                }
          </div>
                
        </div>

        
    </div>
    </React.Fragment>
  )
}

export default Demo
