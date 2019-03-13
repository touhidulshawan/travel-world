import React, { Component } from "react";
import PackageCard from "./PackageCard";

class Tour extends Component {
  render() {
    return (
      <section className="tour">
        <div className="u-center-text u-margin-bottom-m">
          <h2 className="heading__secondary">Our Tour Packages</h2>
        </div>
        <div className="row">
          <div className="col-1-of-3">
            <PackageCard
              className={"card__side card__side--back card__side--back-1"}
              imageClass={"card__image card__image-1"}
              spanClass={"card__heading-span card__heading-span-1"}
              heading={"The Sea Explorer"}
            />
          </div>
          <div className="col-1-of-3">
            <PackageCard
              className={"card__side card__side--back card__side--back-2"}
              imageClass={"card__image card__image-2"}
              spanClass={"card__heading-span card__heading-span-2"}
              heading={"The Forest Hiker"}
            />
          </div>
          <div className="col-1-of-3">
            <PackageCard
              className={"card__side card__side--back card__side--back-3"}
              imageClass={"card__image card__image-3"}
              spanClass={"card__heading-span card__heading-span-3"}
              heading={"The Snow Adventure"}
            />
          </div>
        </div>
        <div className="cta_btn">
          <a href="/" className="btn btn--indigo">
            Discover More
          </a>
        </div>
      </section>
    );
  }
}
export default Tour;
