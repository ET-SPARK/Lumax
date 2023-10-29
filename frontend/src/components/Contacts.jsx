import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Contacts.css";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contacts() {
  return (
    <div>
      <Header />
      <div className="contact__details">
        <div className="contact__office">
          <span className="contact__office_heading">
            Huurkor Properties East – Sunnyside Branch
          </span>
          <span className="contact__details_space">
            <span className="contact__detail_key">
              {" "}
              <FontAwesomeIcon icon={faLocationDot} />
              &nbsp; Address
            </span>
            <span className="contact__detail_value">
              187 Robert Sobukwe Sunnyside Pretoria Gauteng
            </span>
          </span>
          <span className="contact__details_space">
            <span className="contact__detail_key">
              {" "}
              <FontAwesomeIcon icon={faPhone} />
              &nbsp; Phone
            </span>
            <span className="contact__detail_value_red">012 400 8600</span>
          </span>
          <span className="contact__details_space">
            <span className="contact__detail_key">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp; Email
            </span>
            <span className="contact__detail_value_red">
              admin@huurkor.co.za
            </span>
          </span>
          <form className="form">
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
            <div className="textare">
              <select
                id="dropdown"
                name="I went to buy"
                className="dropdown_input"
              >
                <option value="Option 1">
                  <span className="dropdown_input_option">I went to buy</span>
                </option>
                <option value="Option 2">
                  <span className="dropdown_input_option"> I went to sale</span>
                </option>
                <option value="Option 3">
                  <span className="dropdown_input_option">I went to rent</span>
                </option>
              </select>
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
        </div>
        <div className="contact__office">
          <img src="https://images.pexels.com/photos/10141895/pexels-photo-10141895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
