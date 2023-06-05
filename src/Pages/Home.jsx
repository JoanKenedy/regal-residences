import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import GaleryHome from "../Components/GaleryHome";
import VideoGround from "../Components/VideoGround";

const Home = () => {
  return (
    <div>
      <Hero />
      <About/> 
      <GaleryHome/>
      <VideoGround/>
    </div>
  );
};

export default Home;
