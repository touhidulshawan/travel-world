import React from "react";

const Testimonial = props => {
  return (
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img src={props.imgSrc} alt="Person-img" className="story__img" />
          <figcaption className="story__caption">{props.caption}</figcaption>
        </figure>
        <div className="story__text">
          <h3>I had the best week with my family</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis non, eligendi veritatis totam corrupti perspiciatis
            error nobis ducimus culpa eveniet. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Perferendis non, eligendi veritatis
            totam corrupti perspiciatis error nobis ducimus culpa eveniet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
