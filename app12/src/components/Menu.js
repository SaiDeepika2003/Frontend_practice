import React from "react";
import menu1 from '../assets/img/menu/menu-item-1.png'
import menu2 from '../assets/img/menu/menu-item-2.png'
import menu3 from '../assets/img/menu/menu-item-3.png'
import menu4 from '../assets/img/menu/menu-item-4.png'
import menu5 from '../assets/img/menu/menu-item-5.png'
import menu6 from '../assets/img/menu/menu-item-6.png'
import MenuItem from "./MenuItem";
const Menu=()=>{
  return(
   <React.Fragment>
    {/*Menu starts */}
    
            <section id="menu" class="menu section">
    
          
          <div class="container section-title" data-aos="fade-up">
            <h2>Our Menu</h2>
            <p><span>Check Our</span> <span class="description-title">Yummy Menu</span></p>
          </div>
    
          <div class="container">
    
            <ul class="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
    
              <li class="nav-item">
                <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
                  <h4>Starters</h4>
                </a>
              </li>
    
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
                  <h4>Breakfast</h4>
                </a>
    
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
                  <h4>Lunch</h4>
                </a>
              </li>
    
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
                  <h4>Dinner</h4>
                </a>
              </li>
    
            </ul>
    
            <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
    
              <div class="tab-pane fade active show" id="menu-starters">
    
                <div class="tab-header text-center">
                  <p>Menu</p>
                  <h3>Starters</h3>
                </div>
    
                <div class="row gy-5">
    
                <MenuItem  menuItem={menu1}/>
                <MenuItem  menuItem={menu2}/>
                <MenuItem  menuItem={menu3}/>
                <MenuItem  menuItem={menu4}/>
                <MenuItem  menuItem={menu5}/>
                <MenuItem  menuItem={menu6}/>
    
                </div>
              </div>
    
              <div class="tab-pane fade" id="menu-breakfast">
    
                <div class="tab-header text-center">
                  <p>Menu</p>
                  <h3>Breakfast</h3>
                </div>
    
                <div class="row gy-5">
                <MenuItem  menuItem={menu1}/>
                <MenuItem  menuItem={menu2}/>
                <MenuItem  menuItem={menu3}/>
                <MenuItem  menuItem={menu4}/>
                <MenuItem  menuItem={menu5}/>
                <MenuItem  menuItem={menu6}/>
    
                </div>
              </div>
    
              <div class="tab-pane fade" id="menu-lunch">
    
                <div class="tab-header text-center">
                  <p>Menu</p>
                  <h3>Lunch</h3>
                </div>
    
                <div class="row gy-5">
    
                <MenuItem  menuItem={menu1}/>
                <MenuItem  menuItem={menu2}/>
                <MenuItem  menuItem={menu3}/>
                <MenuItem  menuItem={menu4}/>
                <MenuItem  menuItem={menu5}/>
                <MenuItem  menuItem={menu6}/>
    
                </div>
              </div>
    
              <div class="tab-pane fade" id="menu-dinner">
    
                <div class="tab-header text-center">
                  <p>Menu</p>
                  <h3>Dinner</h3>
                </div>
    
                <div class="row gy-5">
    
                <MenuItem  menuItem={menu1}/>
                <MenuItem  menuItem={menu2}/>
                <MenuItem  menuItem={menu3}/>
                <MenuItem  menuItem={menu4}/>
                <MenuItem  menuItem={menu5}/>
                <MenuItem  menuItem={menu6}/>
    
                </div>
              </div>
    
            </div>
    
          </div>
    
        </section>
    
       {/*Menu ends */}
   </React.Fragment>
  )
}
export default Menu;