import React from "react";
import "./Videomainpage.scss";

const Videomainpage = () => {
  return (
    <div className="video-container">
      <video className="video-main-page" loop autoPlay muted>
        <source src="3.mp4" type="video/mp4" />
      </video>
      <div className="content-overlay">
        <h1 className="main-title">Türkiye</h1>
      </div>
    </div>
  );
};

export default Videomainpage;
