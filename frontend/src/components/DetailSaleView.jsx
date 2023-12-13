import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import {
  faBed,
  faBath,
  faVectorSquare,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function DetailSaleView() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts when the component mounts
    async function fetchPosts() {
      try {
        const response = await axios.get("http://localhost:3000/sales");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  return (
    <div>
      <Header />
      {posts.length === 0 ? (
        <div className="grids">
          <div className="skeleton single_grid">
            <div className="post-container grid_imgs">
              {/* Your existing content */}
              <div className="skeleton-text"></div>
              <div className="skeleton-last"></div>
              <div className="skeleton-text"></div>
            </div>
          </div>
          <div className="skeleton single_grid">
            <div className="post-container grid_imgs">
              {/* Your existing content */}
              <div className="skeleton-text"></div>
              <div className="skeleton-last"></div>
              <div className="skeleton-text"></div>
            </div>
          </div>
          <div className="skeleton single_grid">
            <div className="post-container grid_imgs">
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
            .map((post) => (
              <div key={post._id} className="single_grid">
                <Link to={`/detail-sale/${post._id}`} className="property_card">
                  <div className="post-container">
                    <img
                      className="grid_imgs"
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
                        <FontAwesomeIcon icon={faVectorSquare} /> &nbsp;
                        {post.propertySize}&nbsp; m<sup>2</sup>&nbsp;
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faWarehouse} />
                        &nbsp; {post.numberOfGarage}&nbsp;
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default DetailSaleView;
