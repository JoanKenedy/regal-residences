import React from "react";
import "../Styles/galeryHome.css";
import foto1 from "../assets/slider-1.jpg";
import foto2 from "../assets/galery3.jpg";
import foto3 from "../assets/galery2.jpg";
import foto4 from "../assets/img6.jpg";
import foto5 from "../assets/slider-movil-1.jpg";
import foto6 from "../assets/img11.jpg";
import foto7 from "../assets/img3.jpg";
import foto8 from "../assets/img4.jpg";
import foto9 from "../assets/img7.jpg";
import foto10 from "../assets/bote.jpg";

import foto12 from "../assets/slider-movil-3.jpg";
import foto13 from "../assets/slider-movil-4.jpg";

const GaleryHome = () => {
  return (
    <div className="galery">
      <h2>Atracciones y Lugares de interes</h2>
      <div className="container-galery">
        <div className="item-galery">
          <img src={foto1} alt="" />
        </div>
        <div className="item-galery">
          <img src={foto2} alt="" />
        </div>
        <div className="item-galery">
          <img src={foto3} alt="" />
        </div>
        <div className="item-galery">
          <img src={foto4} alt="" />
        </div>
        <div className="item-galery">
          <img src={foto5} alt="" />
        </div>
        <div className="item-galery">
          <img src={foto6} alt="" />
        </div>
        <div className="item-galery">
          <img src={foto7} alt="" />
        </div>
        <div className="item-galery">
          <img src={foto13} alt="" />
        </div>
        <div className="item-galery">
          <img src={foto8} alt="" />
        </div>
        <div className="item-galery">
          <img src={foto12} alt="" />
        </div>
        <div className="item-galery">
          <img src={foto9} alt="" />
        </div>
        <div className="item-galery">
          <img src={foto10} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GaleryHome;
