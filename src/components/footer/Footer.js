import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <section className="footer-section">
        <div className="row">
          <div className="col-1-of-2">
            <ul>
              <li>
                <a href="/" target="_blank">
                  About
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Project
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Recent Tour
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-1-of-2">
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae minus sunt quasi, itaque impedit ab molestiae
              accusamus nesciunt.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae minus sunt quasi, itaque impedit ab molestiae
              accusamus nesciunt.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
