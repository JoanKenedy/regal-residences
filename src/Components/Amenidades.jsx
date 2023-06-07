import React from "react";
import "../Styles/amenidades.css";
import area1 from "../assets/amenidad1.png";
import area2 from "../assets/amenidad2.png";
import area3 from "../assets/amenidad3.png";
import area4 from "../assets/amenidad4.png";
import area5 from "../assets/amenidad5.png";
import area6 from "../assets/amenidad6.png";

const Amenidades = () => {
  return (
    <div className="amenidades">
      <h2>Amenidades</h2>
      <div className="container-amenidades">
        <div className="item-amenidades">
          <img src={area1} alt="" />
          <h2>Pista de Jogging</h2>
        </div>
        <div className="item-amenidades">
          <img src={area2} alt="" />
          <h2>Juegos Infantiles</h2>
        </div>
        <div className="item-amenidades">
          <img src={area3} alt="" />
          <h2>Asadores</h2>
        </div>
        <div className="item-amenidades">
          <img src={area4} alt="" />
          <h2>Palapas</h2>
        </div>
        <div className="item-amenidades">
          <img src={area5} alt="" />
          <h2>Cascada</h2>
        </div>
        <div className="item-amenidades">
          <img src={area6} alt="" />
          <h2>Área para mascotas</h2>
        </div>
      </div>
    </div>
  );
};

export default Amenidades;
