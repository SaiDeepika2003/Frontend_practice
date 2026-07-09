import './css/App.css'
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { useState } from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
const Display=()=>{

  const[sid, setSid] = useState(121);

  const[sname, setSname] = useState("Krishna");

  return(

    <div className='container'>

      <h1>Demonstration of the situation....</h1>
      
      <hr></hr>

     <BrowserRouter>
      <Link to={`/home/${sid}/${sname}`}>Home</Link>
      {/*<Link to="/home/100/pavan">Home</Link>*/}
      <Link to="/about">AboutUs</Link>
      <Link to="/contact">ContactUs</Link>

      <Routes>
        <Route path='/home/:sid/:sname' element={<Home/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  )
}
export default Display;