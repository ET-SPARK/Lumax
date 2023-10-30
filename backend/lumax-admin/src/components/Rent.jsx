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
        });
      } catch (error) {
        console.error("Error sending form data:", error);
      }
    }
  };

  return (
    <div>
      <Header />
      <h2>Add house for rent</h2>
      <div className="my-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <input
              type="text"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="place">Place:</label>
            <input
              type="text"
              id="place"
              name="place"
              value={formData.place}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfBed">Number of Beds:</label>
            <input
              type="text"
              id="numberOfBed"
              name="numberOfBed"
              value={formData.numberOfBed}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfBath">Number of Baths:</label>
            <input
              type="text"
              id="numberOfBath"
              name="numberOfBath"
              value={formData.numberOfBath}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfGarage">Number of Garages:</label>
            <input
              type="text"
              id="numberOfGarage"
              name="numberOfGarage"
              value={formData.numberOfGarage}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="propertySize">Property Size:</label>
            <input
              type="text"
              id="propertySize"
              name="propertySize"
              value={formData.propertySize}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div class="grids">
        {posts.map((post) => (
          <div key={post._id} class="single_grid">
            <a href="/detail" class="property_card">
              <div className="post-container">
                <img className="grid_img" src={post.image} alt="Post" />
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
                  {post.description}
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
                    {post.propertySize}&nbsp;
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faWarehouse} />
                    &nbsp; {post.numberOfGarage}&nbsp;
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Rent;
