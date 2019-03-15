import React from "react";

const Form = () => {
  return (
    <div className="book__form">
      <form action="" className="form">
        <div className="heading">
          <h3 className="heading__secondary">Start Booking Here</h3>
        </div>
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="form__group">
          <input
            type="email"
            className="form__input"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="form__group">
          <div className="form__radio-group">
            <input
              type="radio"
              name="tour_size"
              id="small"
              className="form__radio-input"
            />
            <label htmlFor="small" className="form__radio-label">
              <span className="form__radio-button" />
              Small tour package
            </label>
          </div>
          <div className="form__radio-group">
            <input
              type="radio"
              name="tour_size"
              id="large"
              className="form__radio-input"
            />
            <label htmlFor="large" className="form__radio-label">
              <span className="form__radio-button" />
              Large tour package
            </label>
          </div>
        </div>
        <div className="form__group">
          <button className="btn btn--purple" type="submit">
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
