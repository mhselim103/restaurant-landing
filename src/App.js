import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Home from "./pages/Home";

const App = () => {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <Home />
    </ParallaxProvider>
  );
};

export default App;
