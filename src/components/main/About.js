import React from "react";
import "../../assets/css/About.min.css";
import "./ImageComposition";
import ImageComposition from "./ImageComposition";

const About = () => {
  return (
    <section className="section__about">
      <div className="u-center-text u-margin-bottom-8">
        <h2 className="heading__secondary">
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading__tertiary">
            You`re going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad
            repudiandae nulla sunt qui eius doloremque voluptatum dolore
            inventore. Qui?
          </p>
          <h3 className="heading__tertiary">
            Live adventures like you have naver before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad
            repudiandae nulla sunt qui eius doloremque voluptatum dolore
            inventore. Qui?
          </p>
          <a href="/" className="btn-text">
            Learn More &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <ImageComposition />
        </div>
      </div>
    </section>
  );
};

export default About;
