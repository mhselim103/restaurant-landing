import { motion } from "framer-motion";
import React from "react";
import Chef from "../assets/img/team/chef.png";
import { fadeIn, staggerContainer } from "../variants";
const Team = () => {
  return (
    <div className="container mx-auto pt-[350px] ">
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        whileInView={"show"}
        className="grid grid-cols-1 md:grid-cols-2"
      >
        <motion.div className="space-y-8">
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 1.2)}
            className="space-y-2"
          >
            <h1 className="font-bold text-accent">Our Team</h1>
            <h1 className="text-5xl italic font-bold text-black capitalize font-primary">
              Meet Our Chef
            </h1>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1.2)}
            className="space-y-3"
          >
            <p>
              Tonny Wylie is the Executive Pastry Chef of the SDSU Dining
              Bakeshop. Trained in the classical style by an Austrian Master
              Pastry Chef, he started with SDSU Dining in 1997 as a scratch
              baker and quickly transformed the bakeshop with him innovative
              pastry recipes.
            </p>
            <p>
              Tonny says the highlight of his job is student satisfaction. “I
              like to make people happy,” he says. “Hearing from someone that
              they really enjoyed our latest croissant? That’s all I need.”
            </p>
            <div>
              <h1 className="font-bold text-accent font-primary">Tony Wylie</h1>
              <h1>Executive Chef</h1>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.4, 1.1)}
          className="flex justify-center "
        >
          <img className="w-1/2" src={Chef} alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Team;
