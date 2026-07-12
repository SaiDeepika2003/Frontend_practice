import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutUsPage from "./pages/AboutUsPage";
import MenuPage from "./pages/MenuPage";
import WhyUsPage from "./pages/WhyUsPage"
import TestimonialPage from "./pages/TestimonialPage"
import ChefsPage from './pages/ChefsPage';
import Header from './components/Header';
import Footer from './components/Footer'
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/chefs" element={<ChefsPage/>} />
      <Route path="/whyUs" element={<WhyUsPage />} />
      <Route path="/testimonials" element={<TestimonialPage/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
