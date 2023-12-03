import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faLocationDot,
  faBed,
  faBath,
  faArrowLeft,
  faVectorSquare,
  faWarehouse,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import Modal from "react-modal";

function Detail() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts when the component mounts
    async function fetchPosts() {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setPosts(response.data);
        console.log(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (postId) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const [onPress, setOnPress] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [formData, setFormData] = useState({
    images: [""],
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
          images: postData.images,
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
  const [isCaptchaVerified, setCaptchaVerified] = useState(false);
  console.log(formData.ref);

  const [formValues, setFormValues] = useState({
    name: "Name",
    email: "Email",
    phone: "Phone Number",
    comments: "Comment",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formValues.name === "Name" ||
      formValues.email === "Email" ||
      formValues.phone === "Phone Number" ||
      formValues.comments === "Comment"
    ) {
      alert("Please fill your information in all fields");
      return;
    }

    if (
      formValues.name === "" ||
      formValues.email === "" ||
      formValues.phone === "" ||
      formValues.comments === ""
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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const showNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % formData.images.length
    );
  };

  const showPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + formData.images.length) % formData.images.length
    );
  };

  return (
    <div>
      {!modalIsOpen && <Header />}
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
          <div className="buttons_for_img">
            <div>
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="change_icon"
                onClick={showPreviousImage}
              />
            </div>
            <div>
              <img
                src={formData.images[currentImageIndex]}
                alt="Post"
                onClick={openModal}
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="change_icon"
                onClick={showNextImage}
              />
            </div>
          </div>
          <div className="index_order">
            {currentImageIndex + 1} of {formData.images.length}
          </div>
          <div className="detail_section_type_property_col">
            <h3>Property Details</h3>
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
              &nbsp; <b>{formData.place}</b>
            </span>
            <span>{formData.description}</span>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Image Modal"
            className="full_screen_modal"
            overlayClassName="full_screen_overlay"
          >
            <button className="modal_close_button" onClick={closeModal}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <img
              className="full_screen_img"
              src={formData.images[currentImageIndex]}
              alt="Full Screen"
            />
          </Modal>
        </div>
        <div className="detail_section_type_property_dev_img">
          <div className="detail_section_type_property_col">
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
            maxLength={50}
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
          />
        </div>

        <div className="textare">
          <textarea
            className="dropdown_input"
            id="comments"
            name="comments"
            onChange={handleChange}
            value={formValues.comments}
            maxLength={250}
          ></textarea>
        </div>
        <div className="textare">
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
          />
        </div>
        <div className="form__disclaimer">
          <span>
            By clicking on "submit" you agree to our{" "}
            <Link to="/privacy-policy" className="footer_link">
              <p> Privacy Policy</p>
            </Link>
          </span>
          <span>
            <input type="submit" name="submit" className="submit" />
          </span>
        </div>
      </form>
      <div>
        <h3 className="section__heading_about ">
          You may also be interested in these properties
        </h3>
      </div>
      <div class="grids">
        {posts
          .filter((post) => post._id !== postId)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3) // Get only the first 3 posts
          .map((post) => (
            <div key={post._id} class="single_grid">
              <Link to={`/detail/${post._id}`} class="property_card">
                <div className="post-container">
                  <img className="grid_img" src={post.images[0]} alt="Post" />
                  <div className="overlay-text">
                    <p>{post.status}</p>
                  </div>
                </div>
                <div class="property-card__price">
                  <span class="card__price_text">
                    {" "}
                    {post.price}&nbsp;br&nbsp; / &nbsp;month
                  </span>
                  <span class="property-card__summary card__price_text">
                    {post.type},&nbsp;
                  </span>
                  <span class="property-card__summary card__price_text">
                    {post.place}
                  </span>
                </div>
                <div class="property-card__details">
                  <span class="property-card__heading">{post.title}</span>
                  <span class="property-card__discription">
                    {expandedDescriptions[post._id] ? (
                      post.description
                    ) : (
                      <>
                        {post.description.slice(0, 150)}
                        {post.description.length > 150 && <span>...</span>}
                      </>
                    )}
                  </span>
                  <div class="property-card__features">
                    <div class="property-card__features_bed">
                      <FontAwesomeIcon icon={faBed} />
                      &nbsp;
                      {post.numberOfBed}&nbsp;
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faBath} />
                      &nbsp; {post.numberOfBath}&nbsp;
                    </div>
                    <div class="property-card__features_bed">
                      <FontAwesomeIcon icon={faVectorSquare} />
                      &nbsp;
                      {post.propertySize}m<sup>2</sup>&nbsp;
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faWarehouse} />
                      &nbsp;{post.numberOfGarage}&nbsp;
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default Detail;
