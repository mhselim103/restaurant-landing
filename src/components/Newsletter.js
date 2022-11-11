import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-none lg:bg-newsletter lg:bg-cover lg:h-[220px] lg:bg-center lg:px-24 xl:bg-auto">
      <div className="flex flex-col items-center justify-between h-full lg:flex-row">
        <div className="">
          <h1>Join Our Newsletter</h1>
          <p>Get Latest News about us</p>
        </div>
        <form className="">
          <input
            className="text-white transition-all bg-transparent border input placeholder:font-light placeholder:text-white/20 focus:ring-1 focus:ring-accent border-white/20"
            type="text"
            placeholder="Subscribe Our Delicious Dishes"
          />
        </form>
        <button className=" btn">Subscribe Now</button>
      </div>
    </div>
  );
};

export default Newsletter;
