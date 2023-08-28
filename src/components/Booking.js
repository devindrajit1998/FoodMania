import React from "react";

export default function Booking() {
  return (
    <>
      <section className="flat-row flat-make-res index-2">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="reservation-page-right">
                <img
                  src="images/1_2.png"
                  className="img-responsive"
                  alt="reservation-banner"
                />
              </div>
            </div>
            {/*col-md-5*/}
            <div className="col-md-7">
              <div className="reservation-page-left">
                <div className="reservation-page-form">
                  <div className="title-section">
                    <div className="top-section">
                      <p>Well come to Sumi Restaurant</p>
                    </div>
                    <h1 className="title">Make a Reservation</h1>
                  </div>
                  <ul>
                    <li>
                      Monday to Tuesday <span>09:00 AM - 22:00 PM</span>
                    </li>
                    <li>
                      Friday to Sunday <span>11:00 AM - 20:00 PM</span>
                    </li>
                  </ul>
                  <h1 className="phone">+12345 678 910</h1>
                  <h3>
                    <span>Book a table</span>
                  </h3>
                  <form
                    id="reservation-form"
                    action="contact/contact-process.php"
                  >
                    <div className="reservation-page-input-box">
                      <label>Your name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                        name="name"
                        id="form-name"
                        data-error="Subject field is required"
                        required=""
                      />
                    </div>
                    <div className="reservation-page-input-box">
                      <label>Time</label>
                      <span
                        className="fa fa-calendar date_picker"
                        aria-hidden="true"
                      >
                        <input
                          type="text"
                          placeholder="03/09/2017"
                          name="datepicker"
                          id="date-picker"
                          data-error="Subject field is required"
                          required=""
                        />
                      </span>
                      <span
                        className="fa fa-clock-o time_picker"
                        aria-hidden="true"
                      >
                        <input
                          type="text"
                          placeholder="06:00"
                          name="timepicker"
                          id="time-picker"
                          data-error="Subject field is required"
                          required=""
                        />
                      </span>
                    </div>
                    <div className="reservation-page-input-box">
                      <label>Phone number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your phone"
                        name="phone"
                        id="form-phone"
                        data-error="Subject field is required"
                        required=""
                      />
                    </div>
                    <div className="reservation-page-input-box">
                      <label>Seats</label>
                      <input
                        type="text"
                        className="form-control rt-date"
                        placeholder="6 persons"
                        name="date"
                        id="form-date"
                        data-error="Subject field is required"
                        required=""
                      />
                    </div>
                    <div className="reservation-booking">
                      <button type="submit" className="book-now-btn">
                        Booking now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/*col-md-7*/}
          </div>
          {/*row*/}
        </div>
        {/*container */}
      </section>
    </>
  );
}
