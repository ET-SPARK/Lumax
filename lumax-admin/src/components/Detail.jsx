import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Detail.css";
import {
  faBed,
  faBath,
  faVectorSquare,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";

function Detail() {
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
          `https://lumax-backend.vercel.app/post/${postId}`
        );
        const postData = response.data;

        // Log the retrieved data to the console
        console.log("Fetched data:", postData);

        // Set the formData state with the retrieved data
        setFormData({
          images: postData.images,
          price: postData.price,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `https://lumax-backend.vercel.app/post/${postId}`,
        formData
      );
      console.log("Post updated successfully:", response.data);
      alert("Post updated successfully");
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://lumax-backend.vercel.app/post/${postId}`);
      console.log("Post deleted successfully");
      alert("Post deleted successfully");
      // You can redirect to another page after deletion if needed
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  const handleImageChange = (e, index) => {
    const newImages = [...formData.images];
    newImages[index] = e.target.value;
    setFormData({ ...formData, images: newImages });
  };

  return (
    <div>
      <Header />
      <h2>Edit house for rent</h2>
      <form>
        <div className="form_flex">
          <div>
            <div>
              {formData.images.map((image, index) => (
                <div className="form-group1" key={index}>
                  <label htmlFor={`image${index}`}>{`Image URL ${
                    index + 1
                  }:`}</label>
                  <input
                    type="text"
                    id={`image${index}`}
                    name={`image${index}`}
                    value={formData.images[index]}
                    onChange={(e) => handleImageChange(e, index)}
                  />
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
              <label htmlFor="numberOfBed">Number of Beds:</label>
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
              <label htmlFor="landSize">Land Size:</label>
              <input
                type="text"
                id="landSize"
                name="landSize"
                value={formData.landSize}
                onChange={handleChange}
              />
            </div>
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
              <label htmlFor="numberOfBath">Number of Baths:</label>
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
        <button type="button" onClick={handleUpdate}>
          Update
        </button>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default Detail;
