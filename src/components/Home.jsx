import React from "react";
import Header from "./Header";
import "./Home.css";
import {
  faBed,
  faBath,
  faBuilding,
  faBuildingUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
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
        <div class="single_grid">
          <a href="/detail" class="property_card">
            <img
              class="grid_img"
              src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfZmI0YWE2ZWVmMmZkNGUxN2IyYTJlYTJiZjBlNzk3M2YuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzAwLCJoZWlnaHQiOjcwMCwiZml0IjoiaW5zaWRlIn19fQ=="
            />
            <div class="property-card__price">
              <span class="card__price_text">R 3000$ / month</span>
              <span class="property-card__summary card__price_text">
                Apartment, Renral Monthly
              </span>
              <span class="property-card__summary card__price_text">
                Hatfield, Pretoria
              </span>
            </div>
            <div class="property-card__details">
              <span class="property-card__heading">
                Student Accommodation 2024
              </span>
              <span class="property-card__discription">
                A fully furnished 1-bedroom apartment with a kitchen, living
                area, and bathroom. Located near the university and other
                amenities. Available in January 2024.
              </span>
              <div class="property-card__features">
                <div class="property-card__features_bed">
                  <FontAwesomeIcon icon={faBed} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faBath} />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="single_grid">
          <a href="/detail" class="property_card">
            <img
              class="grid_img"
              src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfMWJiMzk1YjljYTQ1NGQ5YzhhYzA0ZGY2ZTdkZTk5NGMuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzAwLCJoZWlnaHQiOjcwMCwiZml0IjoiaW5zaWRlIn19fQ=="
            />
            <div class="property-card__price">
              <span class="card__price_text">R 3000$ / month</span>
              <span class="property-card__summary card__price_text">
                Apartment, Renral Monthly
              </span>
              <span class="property-card__summary card__price_text">
                Hatfield, Pretoria
              </span>
            </div>
            <div class="property-card__details">
              <span class="property-card__heading">
                Student Accommodation 2024
              </span>
              <span class="property-card__discription">
                A fully furnished 1-bedroom apartment with a kitchen, living
                area, and bathroom. Located near the university and other
                amenities. Available in January 2024.
              </span>
              <div class="property-card__features">
                <div class="property-card__features_bed">
                  <FontAwesomeIcon icon={faBed} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faBath} />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="single_grid">
          <a href="/detail" class="property_card">
            <img
              class="grid_img"
              src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfMWJiMzk1YjljYTQ1NGQ5YzhhYzA0ZGY2ZTdkZTk5NGMuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzAwLCJoZWlnaHQiOjcwMCwiZml0IjoiaW5zaWRlIn19fQ=="
            />
            <div class="property-card__price">
              <span class="card__price_text">R 3000$ / month</span>
              <span class="property-card__summary card__price_text">
                Apartment, Renral Monthly
              </span>
              <span class="property-card__summary card__price_text">
                Hatfield, Pretoria
              </span>
            </div>
            <div class="property-card__details">
              <span class="property-card__heading">
                Student Accommodation 2024
              </span>
              <span class="property-card__discription">
                A fully furnished 1-bedroom apartment with a kitchen, living
                area, and bathroom. Located near the university and other
                amenities. Available in January 2024.
              </span>
              <div class="property-card__features">
                <div class="property-card__features_bed">
                  <FontAwesomeIcon icon={faBed} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faBath} />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="single_grid">
          <a href="/detail" class="property_card">
            <img
              class="grid_img"
              src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfZmI0YWE2ZWVmMmZkNGUxN2IyYTJlYTJiZjBlNzk3M2YuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzAwLCJoZWlnaHQiOjcwMCwiZml0IjoiaW5zaWRlIn19fQ=="
            />
            <div class="property-card__price">
              <span class="card__price_text">R 3000$ / month</span>
              <span class="property-card__summary card__price_text">
                Apartment, Renral Monthly
              </span>
              <span class="property-card__summary card__price_text">
                Hatfield, Pretoria
              </span>
            </div>
            <div class="property-card__details">
              <span class="property-card__heading">
                Student Accommodation 2024
              </span>
              <span class="property-card__discription">
                A fully furnished 1-bedroom apartment with a kitchen, living
                area, and bathroom. Located near the university and other
                amenities. Available in January 2024.
              </span>
              <div class="property-card__features">
                <div class="property-card__features_bed">
                  <FontAwesomeIcon icon={faBed} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faBath} />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="single_grid">
          <a href="#" class="property_card">
            <img
              class="grid_img"
              src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfMWJiMzk1YjljYTQ1NGQ5YzhhYzA0ZGY2ZTdkZTk5NGMuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzAwLCJoZWlnaHQiOjcwMCwiZml0IjoiaW5zaWRlIn19fQ=="
            />
            <div class="property-card__price">
              <span class="card__price_text">R 3000$ / month</span>
              <span class="property-card__summary card__price_text">
                Apartment, Renral Monthly
              </span>
              <span class="property-card__summary card__price_text">
                Hatfield, Pretoria
              </span>
            </div>
            <div class="property-card__details">
              <span class="property-card__heading">
                Student Accommodation 2024
              </span>
              <span class="property-card__discription">
                A fully furnished 1-bedroom apartment with a kitchen, living
                area, and bathroom. Located near the university and other
                amenities. Available in January 2024.
              </span>
              <div class="property-card__features">
                <div class="property-card__features_bed">
                  <FontAwesomeIcon icon={faBed} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faBath} />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="single_grid">
          <a href="/detail" class="property_card">
            <img
              class="grid_img"
              src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfMWJiMzk1YjljYTQ1NGQ5YzhhYzA0ZGY2ZTdkZTk5NGMuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzAwLCJoZWlnaHQiOjcwMCwiZml0IjoiaW5zaWRlIn19fQ=="
            />
            <div class="property-card__price">
              <span class="card__price_text">R 3000$ / month</span>
              <span class="property-card__summary card__price_text">
                Apartment, Renral Monthly
              </span>
              <span class="property-card__summary card__price_text">
                Hatfield, Pretoria
              </span>
            </div>
            <div class="property-card__details">
              <span class="property-card__heading">
                Student Accommodation 2024
              </span>
              <span class="property-card__discription">
                A fully furnished 1-bedroom apartment with a kitchen, living
                area, and bathroom. Located near the university and other
                amenities. Available in January 2024.
              </span>
              <div class="property-card__features">
                <div class="property-card__features_bed">
                  <FontAwesomeIcon icon={faBed} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faBath} />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="single_grid">
          <a href="/detail" class="property_card">
            <img
              class="grid_img"
              src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfZmI0YWE2ZWVmMmZkNGUxN2IyYTJlYTJiZjBlNzk3M2YuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzAwLCJoZWlnaHQiOjcwMCwiZml0IjoiaW5zaWRlIn19fQ=="
            />
            <div class="property-card__price">
              <span class="card__price_text">R 3000$ / month</span>
              <span class="property-card__summary card__price_text">
                Apartment, Renral Monthly
              </span>
              <span class="property-card__summary card__price_text">
                Hatfield, Pretoria
              </span>
            </div>
            <div class="property-card__details">
              <span class="property-card__heading">
                Student Accommodation 2024
              </span>
              <span class="property-card__discription">
                A fully furnished 1-bedroom apartment with a kitchen, living
                area, and bathroom. Located near the university and other
                amenities. Available in January 2024.
              </span>
              <div class="property-card__features">
                <div class="property-card__features_bed">
                  <FontAwesomeIcon icon={faBed} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faBath} />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="single_grid">
          <a href="/detail" class="property_card">
            <img
              class="grid_img"
              src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfMWJiMzk1YjljYTQ1NGQ5YzhhYzA0ZGY2ZTdkZTk5NGMuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzAwLCJoZWlnaHQiOjcwMCwiZml0IjoiaW5zaWRlIn19fQ=="
            />
            <div class="property-card__price">
              <span class="card__price_text">R 3000$ / month</span>
              <span class="property-card__summary card__price_text">
                Apartment, Renral Monthly
              </span>
              <span class="property-card__summary card__price_text">
                Hatfield, Pretoria
              </span>
            </div>
            <div class="property-card__details">
              <span class="property-card__heading">
                Student Accommodation 2024
              </span>
              <span class="property-card__discription">
                A fully furnished 1-bedroom apartment with a kitchen, living
                area, and bathroom. Located near the university and other
                amenities. Available in January 2024.
              </span>
              <div class="property-card__features">
                <div class="property-card__features_bed">
                  <FontAwesomeIcon icon={faBed} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faBath} />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="single_grid">
          <a href="/detail" class="property_card">
            <img
              class="grid_img"
              src="https://d4dw57nojnba9.cloudfront.net/eyJidWNrZXQiOiJzMy5lbnRlZ3JhbC5uZXQiLCJrZXkiOiJiL2ZfMWJiMzk1YjljYTQ1NGQ5YzhhYzA0ZGY2ZTdkZTk5NGMuanBnIiwiZm9ybWF0IjoianBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzAwLCJoZWlnaHQiOjcwMCwiZml0IjoiaW5zaWRlIn19fQ=="
            />
            <div class="property-card__price">
              <span class="card__price_text">R 3000$ / month</span>
              <span class="property-card__summary card__price_text">
                Apartment, Renral Monthly
              </span>
              <span class="property-card__summary card__price_text">
                Hatfield, Pretoria
              </span>
            </div>
            <div class="property-card__details">
              <span class="property-card__heading">
                Student Accommodation 2024
              </span>
              <span class="property-card__discription">
                A fully furnished 1-bedroom apartment with a kitchen, living
                area, and bathroom. Located near the university and other
                amenities. Available in January 2024.
              </span>
              <div class="property-card__features">
                <div class="property-card__features_bed">
                  <FontAwesomeIcon icon={faBed} />
                </div>
                <div>
                  <FontAwesomeIcon icon={faBath} />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="section_type_story">
        <div class="section__heading">
          <div class="grid grid_cols_3">
            <div class="single_grid single_grid_text">
              <a href="#" class="property__card">
                {" "}
                For Sale <FontAwesomeIcon icon={faBuilding} />
              </a>
            </div>
            <div class="single_grid single_grid_text">
              <a href="#" class="property__card">
                {" "}
                For Rent <FontAwesomeIcon icon={faBuildingUser} />
              </a>
            </div>
            <div class="single_grid single_grid_text">
              <a href="#" class="property__card">
                {" "}
                Commercial
              </a>
            </div>
            <div class="single_grid single_grid_text">
              <a href="#" class="property__card">
                {" "}
                List With Us
              </a>
            </div>
            <div class="single_grid single_grid_text">
              <a href="#" class="property__card">
                {" "}
                Property Alerts
              </a>
            </div>
            <div class="single_grid single_grid_text ">
              <a href="#" class="property__card">
                Bond Calculator
              </a>
            </div>
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
