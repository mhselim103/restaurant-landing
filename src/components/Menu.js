import { motion } from "framer-motion";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import model from "../assets/img/model-white.png";
import { menuData } from "../data";
import { fadeIn, staggerContainer } from "../variants";
const Menu = () => {
  return (
    <div className="object-cover min-h-[50rem] bg-center bg-cover bg-menu relative">
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        whileInView={"show"}
        className="container mx-auto"
      >
        <div className="flex flex-col items-center justify-center pt-32 text-white gap-y-1">
          <motion.h1
            variants={fadeIn("down", "tween", 0.2, 1.1)}
            className="text-5xl italic font-primary"
          >
            Delicious Flavour of Autumn
          </motion.h1>
          <motion.p variants={fadeIn("down", "tween", 0.3, 1.1)} className="">
            View All Menu For Tasty Meal Today{" "}
          </motion.p>
          <motion.div variants={fadeIn("down", "tween", 0.4, 1.1)}>
            <img src={model} alt="" />
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="my-20"
        >
          <div className="container absolute left-0 right-0 mx-auto top-90">
            <div className="grid grid-cols-1 md:grid-cols-3  min-h-[590px] gap-y-4">
              {menuData.menuItems.map((item, index) => {
                const { image, name, price, description } = item;
                return (
                  <Parallax
                    speed={
                      index === 3 ? 30 : index === 2 ? 20 : index === 1 && 10
                    }
                    easing={"easeInOut"}
                    key={index}
                  >
                    <div className="flex flex-row w-full h-full lg:flex-col ">
                      <div
                        className={`flex-1 lg:w-full ${
                          index === 1 || index === 3
                            ? "lg:order-1"
                            : "order-none"
                        } `}
                      >
                        <img className="lg:w-full" src={image} alt="" />
                      </div>
                      {/* text */}
                      <div className="bg-[#fff3e4] flex-1 flex flex-col justify-center px-6 lg:p-12 lg:max-h-[250px] xl:max-h-max">
                        <div className="text-center">
                          <div className="text-xl font-semibold text-dark xl:text-2xl">
                            {name}
                          </div>
                          <div className="my-1 text-[20px] lg:text-[40px] lg:my-6 text-accent font-semibold">
                            {price}
                          </div>
                          <div>{description}</div>
                        </div>
                      </div>
                    </div>
                  </Parallax>
                );
              })}
            </div>
            <button className="mx-auto mt-8 capitalize btn">
              View Complete Menu
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Menu;
