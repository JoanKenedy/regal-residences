import React, { useState } from "react";
import "../Styles/card-amenidades.css";

const CardAmenidades = () => {
  const infoAmenidades = [
    {
      id: 1,
      title: "Casa club",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime cumque hic sit ipsa ex consequuntur iusto consectetur, quasi neque ducimus culpa beatae labore! Omnis suscipit voluptates veniam error animi dicta.",
    },
    {
      id: 2,
      title: "Gimnasio",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime cumque hic sit ipsa ex consequuntur iusto consectetur, quasi neque ducimus culpa beatae labore! Omnis suscipit voluptates veniam error animi dicta.",
    },
    {
      id: 3,
      title: "Áreas verdes",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime cumque hic sit ipsa ex consequuntur iusto consectetur, quasi neque ducimus culpa beatae labore! Omnis suscipit voluptates veniam error animi dicta.",
    },
    {
      id: 4,
      title: "Alberca con playa",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime cumque hic sit ipsa ex consequuntur iusto consectetur, quasi neque ducimus culpa beatae labore! Omnis suscipit voluptates veniam error animi dicta.",
    },

    {
      id: 5,
      title: "Juegos infantiles",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime cumque hic sit ipsa ex consequuntur iusto consectetur, quasi neque ducimus culpa beatae labore! Omnis suscipit voluptates veniam error animi dicta.",
    },
    {
      id: 6,
      title: "Área para mascotas",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime cumque hic sit ipsa ex consequuntur iusto consectetur, quasi neque ducimus culpa beatae labore! Omnis suscipit voluptates veniam error animi dicta.",
    },
    {
      id: 7,
      title: "Terraza",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime cumque hic sit ipsa ex consequuntur iusto consectetur, quasi neque ducimus culpa beatae labore! Omnis suscipit voluptates veniam error animi dicta.",
    },
    {
      id: 8,
      title: "Cafetería",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime cumque hic sit ipsa ex consequuntur iusto consectetur, quasi neque ducimus culpa beatae labore! Omnis suscipit voluptates veniam error animi dicta.",
    },
    {
      id: 9,
      title: "Asadores",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime cumque hic sit ipsa ex consequuntur iusto consectetur, quasi neque ducimus culpa beatae labore! Omnis suscipit voluptates veniam error animi dicta.",
    },
    {
      id: 10,
      title: "Jacuzzi",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime cumque hic sit ipsa ex consequuntur iusto consectetur, quasi neque ducimus culpa beatae labore! Omnis suscipit voluptates veniam error animi dicta.",
    },
  ];
  const [isAmenidad, setIsAmenidad] = useState(false);

  const handleAmenidad = (e) => {
    setIsAmenidad(!isAmenidad);

    let evento = e.target.id;
    modalAmenidad(evento);
  };

  const modalAmenidad = (evento) => {
    let container = document.getElementById("container-modal-amenidades");
    container.innerHTML = "";
    infoAmenidades
      .filter((texto) => texto.id == evento)
      .map((texto) => {
        container.innerHTML += `
        <h2 id="title-amenidad">${texto.title}<h2/>
        <p id="texto-amenidad">${texto.info}<p/>
        <a
            href="https://api.whatsapp.com/send?phone=525630220591"
            target="_blank"
            className="button-amenidad"
            id="button-amenidad"
          >
            Contacto
          </a>
        `;
      });
  };
  return (
    <div className="card-amenidades">
      <h2>Amenidades de las cuales podras disfrutar con nosotros</h2>
      <p className="text-desc">
        Pon el cursor sobre la imagen para ver más información
      </p>
      <div className="container-card-amenidades">
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Casa Club</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Casa Club</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat magnam ipsam sint ratione quas sunt repudiandae
                  accusantium quos suscipit id, quod eos repellat! Minima, a!
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="1"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Gimnasio</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Gimnasio</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat magnam ipsam sint ratione quas sunt repudiandae
                  accusantium quos suscipit id, quod eos repellat! Minima, a!
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="2"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Áreas verdes</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Áreas verdes</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat magnam ipsam sint ratione quas sunt repudiandae
                  accusantium quos suscipit id, quod eos repellat! Minima, a!
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="3"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Alberca con playa</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Alberca con playa</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat magnam ipsam sint ratione quas sunt repudiandae
                  accusantium quos suscipit id, quod eos repellat! Minima, a!
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="4"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Juegos infantiles</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Juegos infantiles</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat magnam ipsam sint ratione quas sunt repudiandae
                  accusantium quos suscipit id, quod eos repellat! Minima, a!
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="5"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Área para mascotas</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Área para mascotas</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat magnam ipsam sint ratione quas sunt repudiandae
                  accusantium quos suscipit id, quod eos repellat! Minima, a!
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="6"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Terraza</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Terraza</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat magnam ipsam sint ratione quas sunt repudiandae
                  accusantium quos suscipit id, quod eos repellat! Minima, a!
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="7"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Cafetería</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Cafetería</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat magnam ipsam sint ratione quas sunt repudiandae
                  accusantium quos suscipit id, quod eos repellat! Minima, a!
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="8"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Asadores</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Asadores</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat magnam ipsam sint ratione quas sunt repudiandae
                  accusantium quos suscipit id, quod eos repellat! Minima, a!
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="9"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>

        <div className="item-card-amenidades">
          <div className="card-image">
            <h2>Jacuzzis</h2>
            <div className="container-text-img">
              <div className="text-img">
                <h2>Jacuzzis</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat magnam ipsam sint ratione quas sunt repudiandae
                  accusantium quos suscipit id, quod eos repellat! Minima, a!
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn-amenidades"
            id="10"
            onClick={(e) => handleAmenidad(e, !isAmenidad)}
          >
            Saber más
          </button>
        </div>
      </div>
      <div
        className={`modal-amenidades ${isAmenidad ? "amenidades-open" : ""}`}
        id="modal-amenidades"
        onClick={() => setIsAmenidad(!isAmenidad)}
      >
        <div
          className="container-modal-amenidades"
          id="container-modal-amenidades"
        ></div>
      </div>
    </div>
  );
};

export default CardAmenidades;
