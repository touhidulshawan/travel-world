import React from "react";

const Feature = props => {
  return (
    <React.Fragment>
      <i className={props.className} />
      <h3 className="heading-tertiary">{props.title}</h3>
      <p className="feature-box-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        voluptas.
      </p>
    </React.Fragment>
  );
};

export default Feature;
