import React from "react";
import fondo from "../assets/foto5.jpg";
import "../Styles/fondo.css";
import ButtonContact from "./ButtonContact";

const FondoMobile = () => {
  return (
    <div className="fondo-mobile">
      <div className="video-text">
        <div className="container-video-text">
          <h2>¡Vive tus sueños en Tequesquitengo!</h2>
          <p>
            Construimos tu futuro, construimos tu casa. <br /> Conoce Regal
            Residences
          </p>

          <ButtonContact />
        </div>
      </div>
    </div>
  );
};

export default FondoMobile;
