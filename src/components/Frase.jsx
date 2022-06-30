import React from "react";

export const Frase = ({ fraseSimpson }) => {
  const { image, character, quote, characterDirection } = fraseSimpson;
  return (
    <div>
      <div className="card mb-3">
        <div
          className={`row g-0 ${
            characterDirection === "Right" ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="col-md-3">
            <img
              src={image}
              className="img-fluid rounded-star w-50"
              alt={image}
            />
          </div>
          <div className="col-md-9 text-center">
            <div className="card-body">
              <h5 className="card-title">{character}</h5>
              <p className="card-text">{quote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
