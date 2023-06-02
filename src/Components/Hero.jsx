import React, { useRef, useState } from "react";
import "../Styles/hero.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import Slider1 from "../assets/slider-1.jpg";
import Slider2 from "../assets/slider-2.jpg";
import Slider3 from "../assets/slider-3.jpg";
import Slider4 from "../assets/slider-4.jpg";
import Slider5 from "../assets/slider-movil-1.jpg";
import Slider6 from "../assets/slider-movil-2.jpg";
import Slider7 from "../assets/slider-movil-3.jpg";
import Slider8 from "../assets/slider-movil-4.jpg";

const Hero = () => {
  return (
    <div className="slider">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slider1} className="img-slider" />
          <img src={Slider5} alt="" className="img-movil" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider2} className="img-slider" />
          <img src={Slider6} alt="" className="img-movil" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider3} className="img-slider" />
          <img src={Slider7} alt="" className="img-movil" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider4} className="img-slider" />
          <img src={Slider8} alt="" className="img-movil" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
