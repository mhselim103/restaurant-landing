import { motion } from "framer-motion";
import React from "react";
import { fadeIn, staggerContainer } from "../variants";

const Hero = () => {
  // destructure hero data
  return (
    <section className="min-h-[980px] bg-hero bg-cover bg-right">
      {/* <Header /> */}
      <div className="container mx-auto min-h-[980px] flex justify-center items-center">
        {/* text */}
        {
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            // viewport={{ amount: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              variants={fadeIn("down", "tween", 0.2, 1.1)}
              className="text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1"
            >
              <h1>Nothing brings together like</h1>
            </motion.div>
            <motion.h1
              variants={fadeIn("down", "tween", 0.3, 1.1)}
              className="mb-5 h1"
            >
              <h1>Bistro Cafe</h1>
            </motion.h1>
            <motion.p
              variants={fadeIn("down", "tween", 0.4, 1.1)}
              className="text-white max-w-[540px] mb-8"
            >
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </motion.p>
            <motion.div variants={fadeIn("down", "tween", 0.5, 1.1)}>
              <button className="btn">Find out more</button>
            </motion.div>
          </motion.div>
        }
      </div>
    </section>
  );
};

export default Hero;
