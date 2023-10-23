import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Detail() {
  const [onPress, setOnPress] = useState(false);

  const handleOnPress = () => {
    setOnPress(!onPress);
  };
  return (
    <div>
      <Header />
      <div className="property__detail_summary">
        <div className="property__detail_summary_header">
          <div>
            {" "}
            <h1>0.5 BEDROOM FLAT TO RENT IN MUCKLENEUK.</h1>
          </div>
          <div>
            {" "}
            <span>
              <b>Ref # 2195619&nbsp;:&nbsp;</b>
              Apartment in Muckleneuk
            </span>
          </div>
        </div>
        <div className="property__detail_summary_price">
          <div>
            {" "}
            <h3>R &nbsp;2,810&nbsp;</h3>
          </div>
          <div>
            / &nbsp;<b>month</b> &nbsp;
          </div>
          <div
            onClick={() => {
              handleOnPress(setOnPress);
            }}
          >
            <FontAwesomeIcon icon={faCaretDown} />

            {onPress && (
              <span className="detail_prop_style">
                <span>
                  <a href="#">
                    <b>$&nbsp;148</b>
                  </a>
                </span>
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="detail_section_type_property">
        <div className="detail_section_type_property_dev_img">
          <img src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfMWUzZTFmMjUzNTQwNDRkZDgyMWYyNGQ5OWViNGVkNDIuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19" />
        </div>
        <div className="detail_section_type_property_dev_img">
          <div className="detail_section_type_property_col">
            <h3>Property Details</h3>
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
              &nbsp; <b>Crevillea St, Rosanne, 7</b>
            </span>
            <span>
              Kitchen Living area Bathroom. Close to all shops and public
              transport. Located close to schools and other amenities Available
              Immediately Covered parking available at no additional cost.
            </span>
            <h3>Property Features</h3>
            <span>
              <b>Property Type:&nbsp;&nbsp;</b>Apartment
            </span>
            <span>
              <b>Bedrooms:&nbsp;&nbsp;</b>2
            </span>
            <span>
              <b>Bathrooms:&nbsp;&nbsp;</b>1
            </span>
            <span>
              <b>Covered Parking:&nbsp;&nbsp;</b>yes
            </span>
            <span>
              <b>Garden:&nbsp;&nbsp;</b>yes
            </span>
          </div>
        </div>
      </div>
      <form className="form_detail">
        <h3>Make an enquiry</h3>
        <span>
          Interested in this property? Please fill in your details below, and we
          will contact you as soon as possible.
        </span>
        <div className="textare">
          <input
            type="text"
            id="name"
            name="name"
            className="dropdown_input"
            value="Name"
          />
        </div>
        <div className="textare">
          <input
            type="email"
            id="email"
            name="email"
            className="dropdown_input"
            value="Email"
          />
        </div>
        <div className="textare">
          <input
            type="text"
            id="phone"
            name="phone"
            className="dropdown_input"
            value="Phone"
          />
        </div>
        <div className="textare">
          <input
            className="dropdown_input"
            id="area"
            name="area"
            value="Area"
          />
        </div>
        <div className="textare">
          <textarea
            className="dropdown_input"
            id="comments"
            name="comments"
            value="Message"
          ></textarea>
        </div>
        <div className="form__disclaimer">
          {" "}
          <span>
            By clicking on "submit" you agree to our{" "}
            <a href="#">privacy policy</a>
          </span>
          <span>
            {" "}
            <input type="submit" name="submit" className="submit" />
          </span>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Detail;
