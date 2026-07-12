import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import Demo from './components/Demo';
import AxiosDemo from './components/AxiosDemo';

function App() {
  return (
    <React.Fragment>
        <ComponentOne/>
        <hr></hr>

        <div className='App'>
                <ComponentTwo/>

                <hr></hr>

                <Demo/>

                   <hr></hr>

                  <AxiosDemo/>
                
        </div>

     

        
      
    </React.Fragment>
  );
}

export default App;
