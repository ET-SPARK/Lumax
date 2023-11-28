import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Contacts.css";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

function Contacts() {
  const [formValues, setFormValues] = useState({
    name: "Name",
    email: "Email",
    phone: "Phone Number",
    area: "Area",
    comments: "comment",
    dropdown: "I went to buy",
  });

  const [isCaptchaVerified, setCaptchaVerified] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formValues.name === "Name" ||
      formValues.email === "Email" ||
      formValues.phone === "Phone Number" ||
      formValues.comments === "Comment" ||
      formValues.area === "Area"
    ) {
      alert("Please fill your information in all fields");
      return;
    }

    if (
      formValues.name === "" ||
      formValues.email === "" ||
      formValues.phone === "" ||
      formValues.comments === "" ||
      formValues.area === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    if (!isCaptchaVerified) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    const postData = {
      name: formValues.name,
      email: formValues.email,
      phone: formValues.phone,
      area: formValues.area,
      comments: formValues.comments,
      dropdown: formValues.dropdown,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/contact",
        postData
      );
      console.log("Form data sent to the server:", response.data);
      setFormValues({
        name: "Name",
        email: "Email",
        phone: "Phone Number",
        area: "Area",
        comments: "comment",
        dropdown: "I went to buy",
      });
      alert("Form data sent. We will contact you soon.");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleCaptchaChange = (value) => {
    // Set the captcha verification state
    setCaptchaVerified(true);
  };
  return (
    <div>
      <Header />
      <div className="contact__details">
        <div className="contact__office">
          <span className="contact__office_heading">
            Lumax Properties East – Sunnyside Branch
          </span>
          <span className="contact__details_space">
            <span className="contact__detail_key">
              {" "}
              <FontAwesomeIcon icon={faLocationDot} />
              &nbsp; Address
            </span>
            <span className="contact__detail_value">
              187 Robert Sobukwe Sunnyside
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
          <form className="form" onSubmit={handleSubmit}>
            <div className="textare">
              <input
                type="text"
                id="name"
                name="name"
                className="dropdown_input"
                value={formValues.name}
                onChange={handleChange}
                maxLength={50}
                required
              />
            </div>
            <div className="textare">
              <input
                type="email"
                id="email"
                name="email"
                className="dropdown_input"
                value={formValues.email}
                onChange={handleChange}
                maxLength={50}
                required
              />
            </div>
            <div className="textare">
              <input
                type="text"
                id="phone"
                name="phone"
                className="dropdown_input"
                value={formValues.phone}
                onChange={handleChange}
                maxLength={50}
                required
              />
            </div>
            <div className="textare">
              <input
                className="dropdown_input"
                id="area"
                name="area"
                value={formValues.area}
                onChange={handleChange}
                maxLength={50}
                required
              />
            </div>
            <div className="textare">
              <textarea
                className="dropdown_input"
                id="comments"
                name="comments"
                value={formValues.comments}
                onChange={handleChange}
                maxLength={250}
                required
              ></textarea>
            </div>
            <div className="textare">
              <select
                id="dropdown"
                name="dropdown"
                className="dropdown_input"
                value={formValues.dropdown}
                onChange={handleChange}
                required
              >
                <option value="I want to buy">I want to buy</option>
                <option value="I want to sell">I want to sell</option>
                <option value="I want to rent">I want to rent</option>
              </select>
            </div>
            <div className="textare">
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
              />
            </div>
            <div className="form__disclaimer">
              {" "}
              <span>
                By clicking on "submit" you agree to our
                <Link to="/privacy-policy" className="footer_link">
                  <p> Privacy Policy</p>
                </Link>
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
