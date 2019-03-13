import React from "react";
import p1 from "../../assets/img/Travel-proj_2.jpeg";
import p2 from "../../assets/img/Travel-proj_7.jpeg";
import p3 from "../../assets/img/Travel-proj_8.jpeg";

const ImageComposition = () => {
  return (
    <div className="composition">
      <img
        src={p1}
        alt="First 1"
        className="composition__photo composition__photo--p1"
      />
      <img
        src={p2}
        alt="Second 1"
        className="composition__photo composition__photo--p2"
      />
      <img
        src={p3}
        alt="Third 1"
        className="composition__photo composition__photo--p3"
      />
    </div>
  );
};

export default ImageComposition;
