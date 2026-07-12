import React from "react";
const TestimonialItem=(props) =>{

  const {testimonialImage, name, designation} = props;
  return(
    <React.Fragment>
      <div class="swiper-slide">
                    <div class="testimonial-item">
                      <div class="row gy-4 justify-content-center">
                        <div class="col-lg-6">
                          <div class="testimonial-content">
                            <p>
                              <i class="bi bi-quote quote-icon-left"></i>
                              <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                              <i class="bi bi-quote quote-icon-right"></i>
                            </p>
                            <h3>{name}</h3>
                            <h4>{designation}</h4>
                            <div class="stars">
                              <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-2 text-center">
                          <img src={testimonialImage} class="img-fluid testimonial-img" alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
    </React.Fragment>
  )
}
export default TestimonialItem;