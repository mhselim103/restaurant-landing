import React from "react";
import Chef from "../assets/img/team/chef.png";

const Team = () => {
  return (
    <div className="container mx-auto pt-[350px] ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="font-bold text-accent">Our Team</h1>
            <h1 className="text-5xl italic font-bold text-black capitalize font-primary">
              Meet Our Chef
            </h1>
          </div>
          <div className="space-y-3">
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
          </div>
        </div>
        <div className="flex justify-center ">
          <img className="w-1/2 " src={Chef} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Team;
