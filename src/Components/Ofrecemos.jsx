import React from "react";
import Img1 from "../assets/slider-1.jpg";
import "../Styles/ofrecemos.css";

const Ofrecemos = () => {
  return (
    <div className="ofrecemos">
      <h1>¿Qué te ofrecemos?</h1>
      <div className="container-ofreecemos">
        <div className="item-ofrecemos">
          <div className="item-top">
            <img src={Img1} alt="" />
          </div>
          <div className="item-bottom"></div>
        </div>
        <div className="item-ofrecemos">
          <div className="item-top"></div>
          <div className="item-bottom"></div>
        </div>
        <div className="item-ofrecemos">
          <div className="item-top"></div>
          <div className="item-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Ofrecemos;
