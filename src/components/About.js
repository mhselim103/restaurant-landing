import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect } from "react";
import plate from "../assets/img/about/plate.png";
import { fadeIn, staggerContainer } from "../variants";
const About = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [800, 1200], [0, -800]);
  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log("Page scroll: ", latest);
    });
  }, []);
  return (
    <div className="container mx-auto">
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial={"hidden"}
        whileInView="show"
        // viewport={{ once: true }}
        className="grid items-center py-20 md:grid-cols-2"
      >
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1.1)}
          className="flex flex-col items-start gap-y-3"
          // style={{ y: y1, x: -50 }}
        >
          <h1 className="text-[#fe7634] font-bold">Our Story</h1>
          <h1 className="text-5xl italic font-extrabold text-black font-primary">
            Who we are ?
          </h1>
          <p>
            Nobody really knows for sure where the word “bistro” comes from.
            Rumor has it that during the Russian occupation of Paris in the
            early nineteenth century, Cossacks clamored for their food by
            shouting “bistro” – meaning “quickly”. Today the bistro culture,
            with its myriad variants, has spread to all corners of the world.
            While the word “bistro” may be ubiquitous, your Bistro E is a very
            special place indeed.
          </p>
          <button className="btn">Find Out More</button>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1.1)}
          style={{ y: y2, transition: 1 }}
        >
          <img src={plate} alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
