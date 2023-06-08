import React from "react";
import Whats from "../assets/whats.png";
import "../Styles/botones.css";

const Botones = () => {
  return (
    <div className="botones">
      <a
        href="https://api.whatsapp.com/send?phone=527341373382"
        target="_blank"
      >
        <img src={Whats} alt="" />
      </a>
    </div>
  );
};

export default Botones;
