import React, { Component } from "react";
import Form from "./Form";

class Booking extends Component {
  render() {
    return (
      <section className="booking-section">
        <div className="row">
          <div className="book">
            <Form />
          </div>
        </div>
      </section>
    );
  }
}

export default Booking;
