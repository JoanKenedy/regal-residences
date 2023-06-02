import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-2.png";
import "../Styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="container-navbar">
        <div className="logo-container">
          <img src={Logo} alt="" className="logo" />
        </div>

        <nav className={`menu ${isOpen ? "open" : ""}`}>
          <div className={`menu-top ${isOpen ? "aparecer" : ""}`}>
            <i
              className="fa-solid fa-xmark close"
              onClick={() => setIsOpen(!isOpen)}
            ></i>
            <Link to="/">Home</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/desarrollo">Desarrollo</Link>
            <Link to="/financiamiento">Financiamiento</Link>
          </div>
          <div className={`menu-middle ${isOpen ? "left" : ""}`}>
            <h2>Contáctanos</h2>
            <div className="menu-middle-submenu">
              <a href="">
                <i className="fa-solid fa-phone"></i>
                <p>5536697725</p>
              </a>
              <a href="">
                <i className="fa-solid fa-phone"></i>
                <p>5581459476</p>
              </a>
              <a href="">
                <i className="fa-solid fa-phone"></i>
                <p>5630220591</p>
              </a>

              <a href="">
                <i className="fa-solid fa-pen"></i>
                <p>Información</p>
              </a>
            </div>
          </div>
          <div className={`menu-down ${isOpen ? "up" : ""}`} id="menu-down">
            <h2>Síguenos</h2>
            <div className="redes-menu-down">
              <a href="">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </nav>
        <nav className="navbar-descktop">
          <div className="container-descktop">
            <Link to="/">Home</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/desarrollo">Desarrollo</Link>
            <Link to="/financiamiento">Financiamiento</Link>
          </div>
        </nav>
        <div className="menu-bar" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
