import React from "react";
import historyOfTurkiye from "../../components/historyOfTurkiye";
import "./History.scss";

const History = () => {
  return (
    <div className="History main-body">
      <h2 className="history-main-title">History</h2>
      {historyOfTurkiye.map((history, index) => {
        return (
          <div>
            <h2 className="history-title">{history.title}</h2>
            <div className="history-main">
              {history.sections.map((historySection, index) => {
                return (
                  <div key={index} className="history-body">
                    <h3 className="history-section-heading">
                      {historySection.heading}
                    </h3>
                    <p className="history-section-content">
                      {historySection.content}
                    </p>
                    {historySection.sections &&
                      historySection.sections.map((detailedSections, detailedIndex) => {
                        return (
                          <div key={detailedIndex}>
                            <h2>{detailedSections.heading}</h2>
                            <p>{detailedSections.content}</p>
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default History;
