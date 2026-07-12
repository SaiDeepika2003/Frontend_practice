import React from "react";
import test1 from '../assets/img/testimonials/testimonials-1.jpg'
import test2 from '../assets/img/testimonials/testimonials-2.jpg'
import test3 from '../assets/img/testimonials/testimonials-3.jpg'
import test4 from '../assets/img/testimonials/testimonials-4.jpg'
import TestimonialItem from "./TestimonialItem";
const Testimonial=() =>{

  const data=[
    {
      testimonialImage : test1,
      name:"Saul Goodman", 
      designation: "Ceo & Founder"
    },
    {
      testimonialImage: test2,
      name: "Sara Wilsson",
      designation: "Designer"
    },
    {
      testimonialImage : test3,
      name:"Jena Karlis",
      designation: "Store Owner" 
    },
    {
      testimonialImage: test4,
      name: "John Larson",
      designation: "Entrepreneur" 
    }
  ]
  return(
    <React.Fragment>
      {/*Testimonial starts */}

      <section id="testimonials" class="testimonials section light-background">

      
      <div class="container section-title" data-aos="fade-up">
        <h2>TESTIMONIALS</h2>
        <p>What Are They <span class="description-title">Saying About Us</span></p>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="swiper init-swiper">
        
          <div class="swiper-wrapper">


            <TestimonialItem testimonialImage={test1} name="Saul Goodman" designation="Ceo & Founder" />

            <TestimonialItem testimonialImage={test2} name="Sara Wilsson" designation="Designer" />

            <TestimonialItem testimonialImage={test3} name="Jena Karlis" designation="Store Owner" />

            <TestimonialItem testimonialImage={test4} name="John Larson" designation="Entrepreneur" />

            {
              data.map((item,index)=>
                <TestimonialItem testimonialImage={item.testimonialImage} name={item.name} designation={item.designation} />
              )
            }

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>

    </section>

    {/*Testimonial ends */}


    </React.Fragment>
  )
}
export default Testimonial;
