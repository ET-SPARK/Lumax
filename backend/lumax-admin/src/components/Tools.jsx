import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Tools.css";
import { Link } from "react-router-dom";

function Tools() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const images = [
    "https://www.huurkor.co.za/assets/media/hero-slide-1b.a1f176c1cde190373cc45d9dafc93268.jpeg",
    "https://www.huurkor.co.za/assets/media/hero-slide-2.e76c7c5bb427e0513f8e1e4a466320d3.jpeg",
    "https://www.huurkor.co.za/assets/media/hero-slide-3b.aea39f31267767d01c7444b0a51e9f9e.jpeg",
  ];

  return (
    <div className="container">
      <div className="slider-container">
        <Slider {...settings} className="image-slider">
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="slider-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div class="hero_section__heading">
        <div>
          <p class="section_heading">LUMAX ADMIN</p>
        </div>
        <div class="hero__buttons">
          <Link to="/for-sale">
            <button className="button button_size_small">
              Sale Property Form
            </button>
          </Link>
          <Link to="/for-sale">
            <button class="button button_size_small">
              Rental Property From
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Tools;
