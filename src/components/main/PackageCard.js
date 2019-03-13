import React from "react";

const PackageCard = props => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className={props.imageClass}>&nbsp;</div>
        <h4 className="card__heading">
          <span className={props.spanClass}>{props.heading}</span>
        </h4>
        <div className="card__details">
          <ul>
            <li>3 days tour</li>
            <li>Up to 30 people</li>
            <li>2 tour guides</li>
            <li>Sleep in cozy hotel</li>
            <li>Difficulty: Easy</li>
          </ul>
        </div>
      </div>
      <div className={props.className}>
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">only</p>
            <p className="card__price-value">$250</p>
          </div>
          <a href="/" className="btn btn--white">
            Book Now !
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
