import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./Home.css";
import {
  faBed,
  faBath,
  faBuilding,
  faBuildingUser,
  faVectorSquare,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
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
  return (
    <div>
      <Header />
      <div className="container">
        <div className="background-image">
          <img
            src="https://www.huurkor.co.za/assets/media/hero-slide-1b.a1f176c1cde190373cc45d9dafc93268.jpeg"
            alt="Image"
            className="gallery__image"
          />
          <div class="hero_section__heading">
            <div>
              <p class="section_heading">Finding Your Home</p>
            </div>
            <div class="hero__buttons">
              <Link to="/for-sale">
                <button className="button button_size_small">
                  Buy A Property
                </button>
              </Link>
              <Link to="/for-sale">
                <button class="button button_size_small">
                  Rent A Property
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="section__heading_align_center">
        <h1>Our Featured Properties</h1>
        <h3>
          Search for property to rent and for sale in Pretoria and surrounds
        </h3>
      </div>
      <div class="grids">
        {posts
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 9) // Get only the first 3 posts
          .map((post) => (
            <div key={post._id} class="single_grid">
              <Link to={`/detail/${post._id}`} class="property_card">
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
      <div class="section_type_story">
        <div class="section__heading">
          <div class="grid grid_cols_3">
            <a href="#" class=" single_grid_text">
              <div class="property__card">
                {" "}
                For Sale
                <FontAwesomeIcon icon={faBuilding} />
              </div>
            </a>
            <a href="#" class=" single_grid_text">
              <div class="property__card">
                {" "}
                For Rent
                <FontAwesomeIcon icon={faBuildingUser} />
              </div>
            </a>
            <a href="#" class=" single_grid_text">
              <div class="property__card"> Commercial</div>
            </a>
            <a href="#" class=" single_grid_text">
              <div class="property__card"> List With Us</div>
            </a>
            <a href="#" class=" single_grid_text">
              <div class="property__card"> Property Alerts</div>
            </a>
            <a href="#" class=" single_grid_text">
              <div class="property__card"> Bond Calculator</div>
            </a>
          </div>
          <div class="section__heading_area">
            <span class="section__heading_head">
              Achieve Your Property Investment and Rental Goals with Huurkor in
              Pretoria
            </span>
            <span class="section__paragraph">
              Huurkor has distinguished our company as the real estate and
              rentals agency that helps property professionals and tenants
              access the expert and accessible solutions that they need. Our
              history dates back to 1968 and we have helped thousands of South
              African families buy, sell and rent their homes. Let our team of
              property professionals help you buy, sell or rent the property
              that you need.
            </span>
          </div>
          <button class="button button_size_small ">
            Read More About Huurkor
          </button>
        </div>
      </div>
      <div class="about_story">
        <p class="section___heading_align_center">Latest News</p>
        <div class="grid">
          <div class="container_type_global">
            <div class="container_type_global_image">
              <img src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJuZXdzL1RodW1ibmFpbF8yMDIyXzA1XzE2XzA3XzA5XzU2Xzk5NS5qcGVnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzYwLCJoZWlnaHQiOjM2MCwiZml0IjoiaW5zaWRlIn19fQ==" />
            </div>
            <div class="article_card__details">
              <div class="article_card__heading">
                Flat Rental Experts | Flats’ Location Near Tuks Seal the Deal
              </div>
              <div class="article_card__summary">
                Long before the advent of residential flats to rent and Huurkor
                in Pretoria, the word...
              </div>
            </div>
          </div>
          <div class="container_type_global">
            <div class="container_type_global_image">
              <img src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJuZXdzL1RodW1ibmFpbF8yMDIyXzA1XzE2XzA3XzAyXzU5XzgyNC5qcGVnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzYwLCJoZWlnaHQiOjM2MCwiZml0IjoiaW5zaWRlIn19fQ==" />
            </div>
            <div class="article_card__details">
              <div class="article_card__heading">
                Flat Rental Experts | Flats’ Location Near Tuks Seal the Deal
              </div>
              <div class="article_card__summary">
                Long before the advent of residential flats to rent and Huurkor
                in Pretoria, the word...
              </div>
            </div>
          </div>
          <div class="container_type_global">
            <div class="container_type_global_image">
              <img src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJuZXdzL1RodW1ibmFpbF8yMDIyXzA1XzE2XzA3XzA5XzU2Xzk5NS5qcGVnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzYwLCJoZWlnaHQiOjM2MCwiZml0IjoiaW5zaWRlIn19fQ==" />
            </div>
            <div class="article_card__details">
              <div class="article_card__heading">
                Flat Rental Experts | Flats’ Location Near Tuks Seal the Deal
              </div>
              <div class="article_card__summary">
                Long before the advent of residential flats to rent and Huurkor
                in Pretoria, the word...
              </div>
            </div>
          </div>
          <div class="container_type_global">
            <div class="container_type_global_image">
              <img src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJuZXdzL1RodW1ibmFpbF8yMDIyXzA1XzE2XzA3XzAyXzU5XzgyNC5qcGVnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzYwLCJoZWlnaHQiOjM2MCwiZml0IjoiaW5zaWRlIn19fQ==" />
            </div>
            <div class="article_card__details">
              <div class="article_card__heading">
                Flat Rental Experts | Flats’ Location Near Tuks Seal the Deal
              </div>
              <div class="article_card__summary">
                Long before the advent of residential flats to rent and Huurkor
                in Pretoria, the word...
              </div>
            </div>
          </div>
          <div class="container_type_global">
            <div class="container_type_global_image">
              <img src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJuZXdzL1RodW1ibmFpbF8yMDIyXzA1XzE2XzA3XzA5XzU2Xzk5NS5qcGVnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzYwLCJoZWlnaHQiOjM2MCwiZml0IjoiaW5zaWRlIn19fQ==" />
            </div>
            <div class="article_card__details">
              <div class="article_card__heading">
                Flat Rental Experts | Flats’ Location Near Tuks Seal the Deal
              </div>
              <div class="article_card__summary">
                Long before the advent of residential flats to rent and Huurkor
                in Pretoria, the word...
              </div>
            </div>
          </div>
          <div class="container_type_global">
            <div class="container_type_global_image">
              <img src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJuZXdzL1RodW1ibmFpbF8yMDIyXzA1XzE2XzA3XzAyXzU5XzgyNC5qcGVnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzYwLCJoZWlnaHQiOjM2MCwiZml0IjoiaW5zaWRlIn19fQ==" />
            </div>
            <div class="article_card__details">
              <div class="article_card__heading">
                Flat Rental Experts | Flats’ Location Near Tuks Seal the Deal
              </div>
              <div class="article_card__summary">
                Long before the advent of residential flats to rent and Huurkor
                in Pretoria, the word...
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
