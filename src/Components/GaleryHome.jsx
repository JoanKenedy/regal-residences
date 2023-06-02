import React from 'react';
import '../Styles/galeryHome.css';
import foto1 from '../assets/slider-1.jpg';
import foto2 from '../assets/slider-2.jpg';
import foto3 from '../assets/slider-3.jpg';

import foto5 from '../assets/slider-movil-1.jpg';
import foto6 from '../assets/slider-movil-2.jpg';
import foto7 from '../assets/slider-movil-3.jpg';
import foto8 from '../assets/slider-movil-4.jpg';

const GaleryHome = () => {
  return (
    <div className='galery'>
      <h2>Desarrollo</h2>
      <div className="container-galery">
        <div className="item-galery" >
          <img src={foto1} alt="" />
        </div>
        <div className="item-galery" >
          <img src={foto2} alt="" />
        </div>
        <div className="item-galery" >
          <img src={foto3} alt="" />
        </div>
        <div className="item-galery" >
          <img src={foto1} alt="" />
        </div>
        <div className="item-galery" >
          <img src={foto5} alt="" />
        </div>
        <div className="item-galery" >
          <img src={foto6} alt="" />
        </div>
        <div className="item-galery" >
          <img src={foto7} alt="" />
        </div>
        <div className="item-galery" >
          <img src={foto8} alt="" />
        </div>
        <div className="item-galery" >
          <img src={foto8} alt="" />
        </div>
        <div className="item-galery" >
          <img src={foto7} alt="" />
        </div>
        <div className="item-galery" >
          <img src={foto1} alt="" />
        </div>
        <div className="item-galery" >
          <img src={foto2} alt="" />
        </div>
        
      </div>

    </div>
  )
}

export default GaleryHome;