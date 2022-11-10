import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Reservation from "../components/Reservation";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div className="h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Team />
      <Testimonial />
      <Reservation />
      <Footer />
    </div>
  );
};

export default Home;
