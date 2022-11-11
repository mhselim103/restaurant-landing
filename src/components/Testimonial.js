import { motion } from "framer-motion";
import React from "react";
import design from "../assets/img/model-white.png";
import { testimonialData } from "../data";
import { fadeIn, staggerContainer } from "../variants";
import TestimonialCarousel from "./TestimonialCarousel";
const Testimonial = () => {
  return (
    <div className="object-cover -mt-10 bg-no-repeat bg-cover bg-testimonial">
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        whileInView={"show"}
        className="container py-20 mx-auto"
      >
        <motion.div className="flex flex-col items-center justify-center text-center gap-y-3">
          <motion.h1
            variants={fadeIn("down", "tween", 0.3, 1.1)}
            className="text-5xl italic font-bold text-white font-primary"
          >
            What Clients say
          </motion.h1>
          <motion.h1
            variants={fadeIn("up", "tween", 0.4, 1.1)}
            className="text-base"
          >
            1500+ clients satisfaction
          </motion.h1>
          <img src={design} alt="" />
        </motion.div>
        <div className="flex justify-center my-16">
          <TestimonialCarousel slider={testimonialData.slider} />
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
