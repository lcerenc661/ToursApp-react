import React from "react";
import TourComponent from "./Tour";

const ToursComponent = ({ tours, handleRemove }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
      {tours.map((tour) => (
          <TourComponent tour={tour} key={tour.id} handleRemove={handleRemove} />
      ))}
      </div>
    </section>
  );
};

export default ToursComponent;
