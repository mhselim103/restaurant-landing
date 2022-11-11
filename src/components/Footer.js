import React from "react";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="object-cover bg-footer bg-right bg-cover w-full min-h-[500px] ">
      <div className="container pt-20 mx-auto ">
        <div className="">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
