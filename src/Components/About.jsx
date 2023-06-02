import React from 'react';
import Foto from '../assets/foto-home.jpg';
import '../Styles/about.css';

const About = () => {
  return (
    <div className='about'>
        <h2>¿Quienes Somos?</h2>
        <div className="container-about">
            <div className="item-about">
                <h4>Conócenos</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, a laborum, repellendus blanditiis velit quibusdam maxime autem accusamus voluptatum dignissimos provident perspiciatis nobis ut amet ducimus laudantium iure reiciendis sunt.</p>
            </div>
            <div className="item-about">
               <img src={Foto} alt="" />
            </div>
        </div>

    </div>
  )
}

export default About;