import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import "./Home.css";
import {
  faBed,
  faBath,
  faBuilding,
  faBuildingUser,
  faVectorSquare,
  faWarehouse,
  faNewspaper,
  faAddressBook,
  faAddressCard,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import Tools from "./Tools";
import "animate.css";

function Home() {
  const [posts, setPosts] = useState([]);
  const [sales, setSales] = useState([]);

  const [isAnimated, setIsAnimated] = useState(false);
  const [isAnimatedR, setIsAnimatedR] = useState(false);

  const sectionRef = useRef(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // The target element is in the viewport
          setIsAnimated(true);
          setIsAnimatedR(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.querySelector(".section_type_story");
      const targetPosition = targetElement.offsetTop;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= targetPosition) {
        setIsAnimated(true);
      }
      if (scrollPosition >= targetPosition) {
        setIsAnimatedR(true);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animationClasses = isAnimated
    ? "animate__animated animate__bounceInLeft"
    : "";
  const animationClassesR = isAnimatedR
    ? "animate__animated animate__bounceInRight"
    : "";

  useEffect(() => {
    // Fetch posts when the component mounts
    async function fetchPosts() {
      try {
        const response = await axios.get(
          "https://lumax-backend.vercel.app/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);
  useEffect(() => {
    // Fetch posts when the component mounts
    async function fetchSale() {
      try {
        const response = await axios.get(
          "https://lumax-backend.vercel.app/sales"
        );
        setSales(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchSale();
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
      <Tools />
      <div className="section__heading_align_center">
        <h1>Our Featured Properties</h1>
        <h3>
          Search for property to rent and for sale in Addis Ababa and surrounds
        </h3>
      </div>
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
        <div className="grids">
          {posts
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 6) // Get only the first 6 posts
            .map((post) => (
              <div key={post._id} className="single_grid">
                <Link
                  as={NavLink}
                  to={`/detail/${post._id}`}
                  className="property_card animate__animated animate__bounce"
                >
                  <div className="post-container">
                    <img className="grid_img" src={post.images[0]} alt="Post" />
                    <div className="overlay-text">
                      <p>{post.status}</p>
                    </div>
                  </div>
                  <div className="property-card__price">
                    <span className="card__price_text">
                      {" "}
                      {post.price}&nbsp;br&nbsp; / &nbsp;month
                    </span>
                    <span className="property-card__summary card__price_text">
                      {post.type},&nbsp; Renral Monthly
                    </span>
                    <span className="property-card__summary card__price_text">
                      {post.place}
                    </span>
                  </div>
                  <div className="property-card__details">
                    <span className="property-card__heading">{post.title}</span>
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
          {sales
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 6) // Get only the first 6 posts
            .map((post) => (
              <div key={post._id} className="single_grid">
                <Link
                  to={`/detail-sale/${post._id}`}
                  className="property_card animate__animated animate__bounce"
                >
                  <div className="post-container">
                    <img className="grid_img" src={post.images[0]} alt="Post" />
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
                    <span className="property-card__heading">{post.title}</span>
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
      )}
      <div className="section_type_story">
        <div className="section__heading">
          <div className="grid grid_cols_3">
            <Link
              to="/for-sale"
              className={`single_grid_text ${animationClasses}`}
              ref={sectionRef}
            >
              <div className="property__card">
                {" "}
                For Sale&nbsp;
                <FontAwesomeIcon icon={faBuilding} />
              </div>
            </Link>
            <Link
              to="/for-rent"
              className={`single_grid_text ${animationClassesR}`}
              ref={sectionRef}
            >
              <div className="property__card">
                {" "}
                For Rent&nbsp;
                <FontAwesomeIcon icon={faBuildingUser} />
              </div>
            </Link>
            <Link
              to="/news"
              className={`single_grid_text ${animationClasses}`}
              ref={sectionRef}
            >
              <div className="property__card">
                {" "}
                News&nbsp;
                <FontAwesomeIcon icon={faNewspaper} />
              </div>
            </Link>
            <Link
              to="/contact"
              className={`single_grid_text ${animationClassesR}`}
              ref={sectionRef}
            >
              <div className="property__card">
                {" "}
                Contact Us&nbsp;
                <FontAwesomeIcon icon={faAddressBook} />
              </div>
            </Link>
            <Link
              to="/about"
              className={`single_grid_text ${animationClasses}`}
              ref={sectionRef}
            >
              <div className="property__card">
                {" "}
                About Us&nbsp;
                <FontAwesomeIcon icon={faAddressCard} />
              </div>
            </Link>
            <Link
              to="/"
              className={`single_grid_text ${animationClassesR}`}
              ref={sectionRef}
            >
              <div className="property__card">
                {" "}
                Property Alerts&nbsp;
                <FontAwesomeIcon icon={faBell} />
              </div>
            </Link>
          </div>
          <div className="section__heading_area">
            <span className="section__heading_head">
              Achieve Your Property Investment and Rental Goals with LUMAX in
              Addis Ababa
            </span>
            <span className="section__paragraph">
              LUMAX has distinguished our company as the real estate and rentals
              agency that helps property professionals and tenants access the
              expert and accessible solutions that they need. We have helped
              thousands of Ethiopian families buy, sell and rent their homes.
              Let our team of property professionals help you buy, sell or rent
              the property that you need.
            </span>
          </div>

          <Link to="/about">
            <button className="button button_size_small ">
              Read More About LUMAX
            </button>
          </Link>
        </div>
      </div>
      <div className="about_story">
        <p className="section___heading_align_center">Latest News</p>
        <div className="grid">
          <div className="container_type_global">
            <div className="container_type_global_image">
              <img src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJuZXdzL1RodW1ibmFpbF8yMDIyXzA1XzE2XzA3XzA5XzU2Xzk5NS5qcGVnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzYwLCJoZWlnaHQiOjM2MCwiZml0IjoiaW5zaWRlIn19fQ==" />
            </div>
            <div className="article_card__details">
              <div className="article_card__heading">
                Flat Rental Experts | Flats’ Location Near Tuks Seal the Deal
              </div>
              <div className="article_card__summary">
                Long before the advent of residential flats to rent and Huurkor
                in Pretoria, the word...
              </div>
            </div>
          </div>
          <div className="container_type_global">
            <div className="container_type_global_image">
              <img src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJuZXdzL1RodW1ibmFpbF8yMDIyXzA1XzE2XzA3XzAyXzU5XzgyNC5qcGVnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzYwLCJoZWlnaHQiOjM2MCwiZml0IjoiaW5zaWRlIn19fQ==" />
            </div>
            <div className="article_card__details">
              <div className="article_card__heading">
                Flat Rental Experts | Flats’ Location Near Tuks Seal the Deal
              </div>
              <div className="article_card__summary">
                Long before the advent of residential flats to rent and Huurkor
                in Pretoria, the word...
              </div>
            </div>
          </div>
          <div className="container_type_global">
            <div className="container_type_global_image">
              <img src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJuZXdzL1RodW1ibmFpbF8yMDIyXzA1XzE2XzA3XzA5XzU2Xzk5NS5qcGVnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzYwLCJoZWlnaHQiOjM2MCwiZml0IjoiaW5zaWRlIn19fQ==" />
            </div>
            <div className="article_card__details">
              <div className="article_card__heading">
                Flat Rental Experts | Flats’ Location Near Tuks Seal the Deal
              </div>
              <div className="article_card__summary">
                Long before the advent of residential flats to rent and Huurkor
                in Pretoria, the word...
              </div>
            </div>
          </div>
          <div className="container_type_global">
            <div className="container_type_global_image">
              <img src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJuZXdzL1RodW1ibmFpbF8yMDIyXzA1XzE2XzA3XzAyXzU5XzgyNC5qcGVnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzYwLCJoZWlnaHQiOjM2MCwiZml0IjoiaW5zaWRlIn19fQ==" />
            </div>
            <div className="article_card__details">
              <div className="article_card__heading">
                Flat Rental Experts | Flats’ Location Near Tuks Seal the Deal
              </div>
              <div className="article_card__summary">
                Long before the advent of residential flats to rent and Huurkor
                in Pretoria, the word...
              </div>
            </div>
          </div>
          <div className="container_type_global">
            <div className="container_type_global_image">
              <img src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJuZXdzL1RodW1ibmFpbF8yMDIyXzA1XzE2XzA3XzA5XzU2Xzk5NS5qcGVnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzYwLCJoZWlnaHQiOjM2MCwiZml0IjoiaW5zaWRlIn19fQ==" />
            </div>
            <div className="article_card__details">
              <div className="article_card__heading">
                Flat Rental Experts | Flats’ Location Near Tuks Seal the Deal
              </div>
              <div className="article_card__summary">
                Long before the advent of residential flats to rent and Huurkor
                in Pretoria, the word...
              </div>
            </div>
          </div>
          <div className="container_type_global">
            <div className="container_type_global_image">
              <img src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJuZXdzL1RodW1ibmFpbF8yMDIyXzA1XzE2XzA3XzAyXzU5XzgyNC5qcGVnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzYwLCJoZWlnaHQiOjM2MCwiZml0IjoiaW5zaWRlIn19fQ==" />
            </div>
            <div className="article_card__details">
              <div className="article_card__heading">
                Flat Rental Experts | Flats’ Location Near Tuks Seal the Deal
              </div>
              <div className="article_card__summary">
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
