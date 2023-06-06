import React from "react";
import "../Styles/video.css";
import Video from "../assets/background.mp4";

const VideoGround = () => {
  return (
    <div className="container-video">
      <video
        src={Video}
        className="video-escritorio"
        autoPlay
        loop
        muted
      ></video>

      <div className="video-text">
        <div className="container-video-text">
          <h2>¡Vive tus sueños en Tequesquitengo!</h2>
          <p>
            Construimos tu futuro, construimos tu casa. <br /> Conoce Regal
            Residences
          </p>

          <a href="">Más información</a>
        </div>
      </div>
    </div>
  );
};

export default VideoGround;
