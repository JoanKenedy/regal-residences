import React from "react";
import Img1 from "../assets/slider-1.jpg";
import Img2 from "../assets/seguridad.jpg";
import Img3 from "../assets/financiamiento.jpg";
import ButtonContact from "../Components/ButtonContact";
import "../Styles/ofrecemos.css";

const Ofrecemos = () => {
  return (
    <div className="ofrecemos">
      <h2>¿Qué te ofrecemos?</h2>
      <div className="container-ofrecemos">
        <div className="item-ofrecemos">
          <img src={Img1} alt="" />

          <h2>Excelente Ubicación</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            debitis iusto magni reprehenderit eum, nemo cumque tempora nostrum
            itaque eligendi!
          </p>
          <ButtonContact />
        </div>
        <div className="item-ofrecemos">
          <img src={Img2} alt="" />

          <h2>Seguridad</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            incidunt accusantium ullam at eligendi mollitia alias quaerat
            aliquid repellendus doloribus.
          </p>
          <ButtonContact />
        </div>
        <div className="item-ofrecemos">
          <img src={Img3} alt="" />

          <h2>Financiamiento</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            dolor earum delectus saepe ipsa. Suscipit quasi veritatis vitae
            aliquid officiis!
          </p>
          <ButtonContact />
        </div>
      </div>
    </div>
  );
};

export default Ofrecemos;
