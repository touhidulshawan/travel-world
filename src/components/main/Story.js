import React, { Component } from "react";
import image1 from "../../assets/img/Travel-proj_2.jpeg";
import image2 from "../../assets/img/Travel-proj_7.jpeg";
import video1 from "../../assets/img/video.mp4";
import video2 from "../../assets/img/video.webm";
import Testimonial from "./Testimonial";
import BgVideo from "./BgVideo";

class Story extends Component {
  state = {
    img: [image1, image2],
    video: [video1, video2]
  };

  render() {
    return (
      <section className="story-section">
        <BgVideo
          videoSrc1={this.state.video[0]}
          videoSrc2={this.state.video[1]}
        />
        <div className="u-center-text u-margin-bottom-m">
          <h2 className="heading__secondary">We make people happy</h2>
        </div>
        <Testimonial imgSrc={this.state.img[0]} caption={"Sara Smith"} />
        <Testimonial imgSrc={this.state.img[1]} caption={"Samantha"} />
        <div className="button">
          <a href="/" className="btn-text">
            See more Stories &rarr;
          </a>
        </div>
      </section>
    );
  }
}
export default Story;
