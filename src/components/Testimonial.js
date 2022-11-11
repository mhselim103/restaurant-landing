import React from "react";
import design from "../assets/img/model-white.png";
import { testimonialData } from "../data";
import TestimonialCarousel from "./TestimonialCarousel";
const Testimonial = () => {
  return (
    <div className="object-cover -mt-10 bg-no-repeat bg-cover bg-testimonial">
      <div className="container py-20 mx-auto">
        <div className="flex flex-col items-center justify-center text-center gap-y-3">
          <h1 className="text-5xl italic font-bold text-white font-primary">
            What Clients say
          </h1>
          <h1 className="text-base">1500+ clients satisfaction</h1>
          <img src={design} alt="" />
        </div>
        <div className="flex justify-center my-16">
          <TestimonialCarousel slider={testimonialData.slider} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
