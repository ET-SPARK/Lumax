import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const [onPress, setOnPress] = useState(false);

  const [formData, setFormData] = useState({
    image: "",
    price: "",
    type: "",
    place: "",
    numberOfBed: "",
    title: "",
    description: "",
    numberOfBath: "",
    numberOfGarage: "",
    propertySize: "",
    status: "",
    ref: "",
  });
  const { postId } = useParams();

  useEffect(() => {
    // Fetch the specific post based on postId when the component mounts
    async function fetchPostData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/post/${postId}`
        );
        const postData = response.data;

        // Log the retrieved data to the console
        console.log("Fetched data:", postData);

        // Set the formData state with the retrieved data
        setFormData({
          image: postData.image,
          price: postData.price, // Assuming price is a key in your postData object
          type: postData.type,
          place: postData.place,
          numberOfBed: postData.numberOfBed,
          title: postData.title,
          description: postData.description,
          numberOfBath: postData.numberOfBath,
          numberOfGarage: postData.numberOfGarage,
          propertySize: postData.propertySize,
          status: postData.status,
          ref: postData.ref,
        });
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    }

    if (postId) {
      fetchPostData();
    }
  }, [postId]);

  const handleOnPress = () => {
    setOnPress(!onPress);
  };

  const [formValues, setFormValues] = useState({
    name: "Name",
    email: "Email",
    phone: "Phone Number",
    comments: "Comment",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      name: formValues.name,
      email: formValues.email,
      phone: formValues.phone,
      comments: formValues.comments,
      ref: formData.ref,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/comment",
        postData
      );

      console.log("Form data sent to the server:", response.data);

      setFormValues({
        name: "",
        email: "",
        phone: "",
        comments: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
      <Header />
      <div className="property__detail_summary">
        <div className="property__detail_summary_header">
          <div>
            {" "}
            <h1>{formData.title}</h1>
          </div>
          <div>
            {" "}
            <span>
              <b>Ref # {formData.ref} :&nbsp;</b>
              Apartment in {formData.place}
            </span>
          </div>
        </div>
        <div className="property__detail_summary_price">
          <div>
            {" "}
            <h3>&nbsp;{formData.price}&nbsp; ETB</h3>
          </div>
          <div>
            / &nbsp;<b>month</b> &nbsp;
          </div>
          <div
            onClick={() => {
              handleOnPress(setOnPress);
            }}
          ></div>
        </div>
      </div>
      <div className="detail_section_type_property">
        <div className="detail_section_type_property_dev_img">
          <img src={formData.image} />
        </div>
        <div className="detail_section_type_property_dev_img">
          <div className="detail_section_type_property_col">
            <h3>Property Details</h3>
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
              &nbsp; <b>{formData.place}</b>
            </span>
            <span>{formData.description}</span>
            <h3>Property Features</h3>
            <span>
              <b>Property Type:&nbsp;&nbsp;</b>
              {formData.type}
            </span>
            <span>
              <b>Bedrooms:&nbsp;&nbsp;</b>
              {formData.numberOfBed}
            </span>
            <span>
              <b>Bathrooms:&nbsp;&nbsp;</b>
              {formData.numberOfBath}
            </span>
            <span>
              <b>Covered Parking:&nbsp;&nbsp;</b>
              {formData.numberOfGarage}
            </span>
            <span>
              <b>Garden:&nbsp;&nbsp;</b>yes?
            </span>
          </div>
        </div>
      </div>
      <form className="form_detail" onSubmit={handleSubmit}>
        <h3>Make an enquiry</h3>
        <span className="form_detail_subtitle">
          Interested in this property? Please fill in your details below, and we
          will contact you as soon as possible.
        </span>
        <div className="textare">
          <input
            type="text"
            id="name"
            name="name"
            className="dropdown_input"
            value={formValues.name}
            onChange={handleChange}
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
          />
        </div>

        <div className="textare">
          <textarea
            className="dropdown_input"
            id="comments"
            name="comments"
            onChange={handleChange}
            value={formValues.comments} // Make sure to bind the value to the state
          ></textarea>
        </div>
        <div className="form__disclaimer">
          <span>
            By clicking on "submit" you agree to our{" "}
            <a href="#">privacy policy</a>
          </span>
          <span>
            <input type="submit" name="submit" className="submit" />
          </span>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Detail;
