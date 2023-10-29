import React from "react";
import { faBed, faBath } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
import Header from "./Header";
import "./Sale.css";
function Sale() {
  return (
    <div>
      <Header />
      <div className="section__background_overlay" />
      <div>
        <h1 className="section__heading_about ">Properties For Sale</h1>
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
        <div className="view_section__content">
          <a href="#" className="view_section__content_link">
            View all properties for rent
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sale;
