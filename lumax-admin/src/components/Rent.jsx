import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Rent.css";
import {
  faBed,
  faBath,
  faVectorSquare,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Rent() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any of the fields is empty
    if (Object.values(formData).some((value) => value === "")) {
      alert("Please fill in all fields before submitting.");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3000/post",
          formData
        );
        console.log("Form data sent successfully:", response.data);
        // Clear the form fields after successful submission
        setFormData({
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
      } catch (error) {
        console.error("Error sending form data:", error);
      }
    }
  };
  const handleImageChange = (e, index) => {
    const newImages = [...formData.images];
    newImages[index] = e.target.value;
    setFormData({ ...formData, images: newImages });
  };

  const handleAddImage = () => {
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ""],
    }));
  };

  return (
    <div>
      <Header />
      <h2>Add house for Rent</h2>
      <form onSubmit={handleSubmit}>
        <div className="form_flex">
          <div>
            <div>
              {formData.images.map((image, index) => (
                <div className="form-group1" key={index}>
                  <label htmlFor={`image${index}`}>Image URL:</label>
                  <div className="image-input">
                    <input
                      type="text"
                      id={`image${index}`}
                      name={`image${index}`}
                      value={image}
                      onChange={(e) => handleImageChange(e, index)}
                    />
                    {index === formData.images.length - 1 && (
                      <button type="button" onClick={handleAddImage}>
                        Add More Image
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="form-group1">
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="numberOfBed">Number of Bedroom:</label>
              <input
                type="text"
                id="numberOfBed"
                name="numberOfBed"
                value={formData.numberOfBed}
                onChange={handleChange}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="numberOfGarage">Number of Garages:</label>
              <input
                type="text"
                id="numberOfGarage"
                name="numberOfGarage"
                value={formData.numberOfGarage}
                onChange={handleChange}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="propertySize">Property Size:</label>
              <input
                type="text"
                id="propertySize"
                name="propertySize"
                value={formData.propertySize}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className="form-group1">
              <label htmlFor="type">Type:</label>
              <input
                type="text"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="place">Place:</label>
              <input
                type="text"
                id="place"
                name="place"
                value={formData.place}
                onChange={handleChange}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="numberOfBath">Number of Bathrooms:</label>
              <input
                type="text"
                id="numberOfBath"
                name="numberOfBath"
                value={formData.numberOfBath}
                onChange={handleChange}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="status">Status:</label>
              <input
                type="text"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="Ref">Ref number:</label>
              <input
                type="text"
                id="ref"
                name="ref"
                value={formData.ref}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div class="grids">
        {posts
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
                    {post.type},&nbsp; Renral Monthly
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
      <div className="view_section__content">
        <Link to="/for-rent-detail" className="view_section__content_link">
          View all properties for rent
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Rent;
