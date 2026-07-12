import React from 'react';
import menu1 from '../assets/img/menu/menu-item-1.png'
const MenuItem=(props) =>{

  const {menuItem} = props;
  return(
    <React.Fragment>
         <div class="col-lg-4 menu-item">
                          <a href={menuItem} class="glightbox"><img src={menuItem} class="menu-img img-fluid" alt=""/></a>
                          <h4>Magnam Tiste</h4>
                          <p class="ingredients">
                            Lorem, deren, trataro, filede, nerada
                          </p>
                          <p class="price">
                            $5.95
                          </p>
                        </div>
    </React.Fragment>
  )
}
export default MenuItem;