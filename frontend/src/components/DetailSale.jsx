import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Detail.css";
import "./DetailSale.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faXmark,
  faBed,
  faBath,
  faVectorSquare,
  faWarehouse,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import Modal from "react-modal";

function DetailSale() {
  const [posts, setPosts] = useState([]);

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
  useEffect(() => {
    // Fetch posts when the component mounts
    async function fetchPosts() {
      try {
        const response = await axios.get(
          "https://lumax-backend.vercel.app/sales"
        );
        setPosts(response.data);
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
    landSize: "",
    status: "",
    ref: "",
  });
  const { postId } = useParams();

  useEffect(() => {
    // Fetch the specific post based on postId when the component mounts
    async function fetchPostData() {
      try {
        const response = await axios.get(
          `https://lumax-backend.vercel.app/sale/${postId}`
        );
        const postData = response.data;

        // Log the retrieved data to the console

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
          landSize: postData.landSize,
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

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
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
        "https://lumax-backend.vercel.app/saleComment",
        postData
      );

      alert("Form data sent. We will contact you soon.");
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
  const handleCaptchaChange = (value) => {
    // Set the captcha verification state
    setCaptchaVerified(true);
  };
  return (
    <div>
      {!modalIsOpen && <Header />}
      {posts.length === 0 ? (
        <div className="grids">
          <div className="skeleton single_grid">
            <div className="post-container grid_img">
              {/* Your existing content */}
              <div className="skeleton-text"></div>
              <div className="skeleton-last"></div>
              <div className="skeleton-text"></div>
            </div>
          </div>
          <div className="skeleton single_grid">
            <div className="post-container grid_img">
              {/* Your existing content */}
              <div className="skeleton-text"></div>
              <div className="skeleton-last"></div>
              <div className="skeleton-text"></div>
            </div>
          </div>
          <div className="skeleton single_grid">
            <div className="post-container grid_img">
              {/* Your existing content */}
              <div className="skeleton-text"></div>
              <div className="skeleton-last"></div>
              <div className="skeleton-text"></div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="property__detail_summary">
            <div className="property__detail_summary_header">
              <div>
                {" "}
                <h1 className="header_color">{formData.title}</h1>
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
                <h3 className="header_color">
                  &nbsp;{formData.price}&nbsp; br
                </h3>
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
                <h3 className="header_color">Property Details</h3>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} />
                  &nbsp; <b>{formData.place}</b>
                </span>
                <span>
                  <p>{formData.description}</p>
                </span>
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
              <div className="property_features">
                <h3>Property Features</h3>
                <div className="propertyDetailSt">
                  <div>
                    <div>
                      {" "}
                      <span>
                        {" "}
                        <b>Type:</b>
                      </span>
                      <span> {formData.type}</span>
                    </div>
                    <div>
                      {" "}
                      <span>
                        {" "}
                        <b>Bedrooms:</b>
                      </span>
                      <span> {formData.numberOfBed}</span>
                    </div>
                    <div>
                      <span>
                        {" "}
                        <b>Bathrooms:</b>
                      </span>
                      <span> {formData.numberOfBath}</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span>
                        {" "}
                        <b>Garages:</b>
                      </span>
                      <span> {formData.numberOfGarage}</span>
                    </div>
                    <div>
                      {" "}
                      <span>
                        {" "}
                        <b>Floor Size:</b>
                      </span>
                      <span>
                        {" "}
                        {formData.propertySize}m<sup>2</sup>
                      </span>
                    </div>
                    <div>
                      <span>
                        {" "}
                        <b>Land Size:</b>
                      </span>
                      <span>
                        {" "}
                        {formData.landSize}m<sup>2</sup>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="detail_section_type_property_dev_img">
              <div className="detail_section_type_property_col">
                <form className="form_detail" onSubmit={handleSubmit}>
                  <h3 className="header_color">Make an enquiry</h3>
                  <span className="form_detail_subtitle">
                    Interested in this property? Please fill in your details
                    below, and we will contact you as soon as possible.
                  </span>
                  <div className="textared">
                    <label>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="dropdown_inputd"
                      value={formValues.name}
                      onChange={handleChange}
                      maxLength={50}
                    />
                  </div>

                  <div className="textared">
                    <label>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="dropdown_inputd"
                      value={formValues.email}
                      onChange={handleChange}
                      maxLength={50}
                    />
                  </div>
                  <div className="textared">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="dropdown_inputd"
                      value={formValues.phone}
                      onChange={handleChange}
                      maxLength={50}
                    />
                  </div>

                  <div className="textared">
                    <label>Comments</label>
                    <textarea
                      className="dropdown_inputd  dropdown_inputd_comm"
                      id="comments"
                      name="comments"
                      onChange={handleChange}
                      value={formValues.comments}
                      maxLength={250}
                    ></textarea>
                  </div>
                  <div className="textared">
                    <ReCAPTCHA
                      sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY}
                      onChange={handleCaptchaChange}
                    />
                  </div>
                  <div className="form__disclaimerd">
                    <span>
                      By clicking on "submit" you agree to our{" "}
                      <Link to="/privacy-policy" className="footer_link">
                        <p> Privacy Policy</p>
                      </Link>
                    </span>
                    <span>
                      <input type="submit" name="submit" className="submitd" />
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <h3 className="section__heading_about ">
              You may also be interested in these properties
            </h3>
          </div>
          <div className="grids">
            {posts
              .filter((post) => post._id !== postId)
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .slice(0, 3) // Get only the first 3 posts
              .map((post) => (
                <div key={post._id} className="single_grid">
                  <Link
                    to={`/detail-sale/${post._id}`}
                    className="property_card"
                  >
                    <div className="post-container">
                      <img
                        className="grid_img"
                        src={post.images[0]}
                        alt="Post"
                      />
                      <div className="overlay-text">
                        <p>{post.status}</p>
                      </div>
                    </div>
                    <div className="property-card__price">
                      <span className="card__price_text">
                        {" "}
                        {post.price}&nbsp;br&nbsp;
                      </span>
                      <span className="property-card__summary card__price_text">
                        {post.type},&nbsp;
                      </span>
                      <span className="property-card__summary card__price_text">
                        {post.place}
                      </span>
                    </div>
                    <div className="property-card__details">
                      <span className="property-card__heading">
                        {post.title}
                      </span>
                      <span className="property-card__discription">
                        {expandedDescriptions[post._id] ? (
                          post.description
                        ) : (
                          <>
                            {post.description.slice(0, 150)}
                            {post.description.length > 150 && <span>...</span>}
                          </>
                        )}
                      </span>
                      <div className="property-card__features">
                        <div className="property-card__features_bed">
                          <FontAwesomeIcon icon={faBed} />
                          &nbsp;
                          {post.numberOfBed}&nbsp;
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faBath} />
                          &nbsp; {post.numberOfBath}&nbsp;
                        </div>
                        <div className="property-card__features_bed">
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
        </>
      )}

      <Footer />
    </div>
  );
}

export default DetailSale;
