import React from "react";
import Foto from "../assets/foto-home.jpg";
import Fts from "../assets/fts.jpg";
import "../Styles/about.css";

const About = () => {
  return (
    <div className="about">
      <h2>¿Quienes Somos?</h2>
      <div className="container-about">
        <div className="item-about">
          <h4>Conócenos</h4>
          <p>
            Somos un desarrollo que ofrece terrenos residenciales con espacios
            diseñados para los gustos más exigentes y las amenidades necesarias
            para que tengas una vida cómoda y placentera junto a tus seres
            queridos y con una increíble vista al lago de Tequesquitengo
            Morelos. Diseño, confort y exclusividad caracterizan nuestro
            desarrollo.
          </p>
        </div>
        <div className="item-about">
          <img src={Foto} alt="" className="fts-escritorio" />
          <img src={Fts} alt="" className="fts-movil" />
        </div>
      </div>
    </div>
  );
};

export default About;
