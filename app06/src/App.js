import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Home from './Home';
import { useState } from 'react';
function App() {

  const [isUserLoggedin, setIsUserLoggedin] = useState(false);

  return (
    <div className="container">

      <h1> Demonstration of Conditional Rendering </h1>

      <hr></hr>
      {
        (isUserLoggedin) ? <Home/> : <Login/>
      }
    </div>
  );
}

export default App;
