import React, { Component } from "react";
import Feature from "./Feature";
import "../../assets/css/Features.min.css";

class Features extends Component {
  state = {
    feature: [
      { icon: "icon-basic-world", title: "Explore World" },
      { icon: "icon-basic-compass", title: "Meet Nature" },
      { icon: "icon-basic-map", title: "Find your way" },
      { icon: "icon-basic-heart", title: "live the life" }
    ]
  };
  render() {
    return (
      <section className="features">
        <div className="row">
          <div className="col-1-of-4">
            <div className="feature__box">
              <Feature
                className={this.state.feature[0].icon}
                title={this.state.feature[0].title}
              />
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature__box">
              <Feature
                className={this.state.feature[1].icon}
                title={this.state.feature[1].title}
              />
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature__box">
              <Feature
                className={this.state.feature[2].icon}
                title={this.state.feature[2].title}
              />
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature__box">
              <Feature
                className={this.state.feature[3].icon}
                title={this.state.feature[3].title}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
