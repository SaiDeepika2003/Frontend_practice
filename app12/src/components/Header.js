import React from "react";
import { Link } from "react-router-dom";

const Header=() =>{
  return(
    <div>
      <React.Fragment>
        {/*Header Starts */}
         <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
        <h1 class="sitename">Yummy</h1>
        <span>.</span>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><Link to="/" class="active">Home<br/></Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/chefs">Chefs</Link></li>
           <li><Link to="/whyUs">Why Yummy</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <a class="btn-getstarted" href="index.html#book-a-table">Book a Table</a>

    </div>
    </header>
    {/*Header Ends */}
      </React.Fragment>
    </div>
  )
}
export default Header;