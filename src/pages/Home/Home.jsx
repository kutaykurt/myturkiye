import React, { useState } from "react";
import "./Home.scss";
import turkeyFacts from "../../components/turkeyFacts";
import Videomainpage from "../../components/Videomainpage/Videomainpage";

const Home = () => {
  const [slideFacts, setSlideFacts] = useState(0);

  const nextFact = () => {
    setSlideFacts((prevIndex) =>
      prevIndex === turkeyFacts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevFact = () => {
    setSlideFacts((prevIndex) =>
      prevIndex === 0 ? turkeyFacts.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="Home">
      <Videomainpage />
      <div className="main-body">
        <h3 className="home-title">
          Welcome to the Crossroads of History and Culture
        </h3>
        <p className="home-welcome-text">
          Discover a land where East meets West, where ancient civilizations
          have left their mark on breathtaking landscapes. From the bustling
          streets of Istanbul to the tranquil ruins of Ephesus, Turkey is a
          country rich in history, culture, and beauty.
        </p>

        <div className="facts-container">
          <h4 className="fact-item">{turkeyFacts[slideFacts].question}</h4>
          <span>-</span>
          <p>{turkeyFacts[slideFacts].answer}</p>
        </div>

        <div className="facts-button-container">
          <button className="home-carousel-button" onClick={prevFact}>
            Previous
          </button>
          <button className="home-carousel-button" onClick={nextFact}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
