import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";
import axios from "axios";

function Home() {
  const [formData, setFormData] = useState({
    number_of_rooms: "",
    size_of_house: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/post", formData);
      console.log("Form data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending form data:", error);
    }
    setFormData({
      number_of_rooms: "",
      size_of_house: "",
      description: "",
    });
  };
  return (
    <div>
      <Header />
      <div className="my-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Number of rooms:</label>
            <input
              type="text"
              id="number_of_rooms"
              name="number_of_rooms"
              value={formData.number_of_rooms}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Size of house:</label>
            <input
              type="text"
              id="size_of_house"
              name="size_of_house"
              value={formData.size_of_house}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
