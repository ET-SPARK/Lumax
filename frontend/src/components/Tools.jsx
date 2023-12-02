import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Tools.css";
import { Link } from "react-router-dom";
import "animate.css";

function Tools() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isAnimatedR, setIsAnimatedR] = useState(false);
  const [isAnimatedD, setIsAnimatedD] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.querySelector(".hero_section__heading");
      const targetPosition = targetElement.offsetTop;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= targetPosition) {
        setIsAnimated(true);
      }
      if (scrollPosition >= targetPosition) {
        setIsAnimatedR(true);
      }
      if (scrollPosition >= targetPosition) {
        setIsAnimatedD(true);
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
  const animationClassesD = isAnimatedD
    ? "animate__animated animate__bounceInDown"
    : "";
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
    "https://www.afdb.org/sites/default/files/styles/1700x900/public/a1-addis-sheger-river-yohannes-minas.jpg?itok=t4xJscqz",
    "https://www.huurkor.co.za/assets/media/hero-slide-2.e76c7c5bb427e0513f8e1e4a466320d3.jpeg",
    "https://images.pexels.com/photos/7005450/pexels-photo-7005450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
          <p className={`section_heading ${animationClassesD}`}>
            Finding Your Home
          </p>
        </div>
        <div class="hero__buttons">
          <Link to="/for-sale">
            <button className={`button button_size_small ${animationClasses}`}>
              Buy A Property
            </button>
          </Link>
          <Link to="/for-rent">
            <button className={`button button_size_small ${animationClassesR}`}>
              Rent A Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Tools;
