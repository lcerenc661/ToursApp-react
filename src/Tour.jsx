import React, { useState } from "react";

const Tour = ({ tour, handleRemove }) => {
  const [readMore, setReadMore] = useState(false);

  const { id, name, image, info, price } = tour;
  return (
    <section className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        {!readMore ? (
          <p>
            {info.slice(0, 200)}...
            <button className="info-btn"
              onClick={() => {
                setReadMore(true);
              }}>
               Read More
            </button>
          </p>
        ) : (
          <p>
            {info}
            <button className="info-btn"
              onClick={() => {
                setReadMore(false);
              }}>
               Show less
            </button>
          </p>
        )}
        <button onClick={() => handleRemove(id)} className="btn btn-block delete-btn">
          Not interested
        </button>
      </div>
    </section>
  );
};

export default Tour;
