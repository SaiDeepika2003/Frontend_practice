import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Student from './Student';
import JSXDemoClassComponent from './JSXDemoClassComponent';
function App() {
  return (
    <div className="App">
      <Header/>
      <hr></hr>
      <Footer/>
      <hr></hr>
      <JSXDemoClassComponent/>
      <hr></hr>
      <Student/>
    </div>
  );
}
export default App;