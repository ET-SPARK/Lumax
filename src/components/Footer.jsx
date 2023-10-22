import React from "react";
import "./Footer.css";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div>
      <div class="footer__top">
        <div class="footet_top_col">
          <div class="footer_top_row">
            <div class="footer_top_row_footer_heading_links">
              <span class="footer_top_row_footer_heading">
                {" "}
                Contact Information
              </span>
              <a href="#" class="footer_top_row_footer_heading_links_style">
                <div className="footer_top_row_footer_heading_links_style_icon icon_item">
                  <div>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div className="footer_top_row_footer_heading_links_style_icon_text">
                    <p>
                      {" "}
                      Huurkor Building, 187 Esselen Street, Sunnyside, 0002
                    </p>
                  </div>
                </div>
              </a>
              <a href="#" class="footer_top_row_footer_heading_links_style">
                <div className="footer_top_row_footer_heading_links_style_icon icon_item">
                  <div>
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="footer_top_row_footer_heading_links_style_icon_text">
                    <p>012 400 8600</p>
                  </div>
                </div>
              </a>
              <a href="#" class="footer_top_row_footer_heading_links_style">
                <div className="footer_top_row_footer_heading_links_style_icon">
                  <div>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="footer_top_row_footer_heading_links_style_icon_text">
                    <p> admin@huurkor.co.za</p>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <span class="footer_top_row_footer_heading">social media</span>
            </div>
            <div>
              <span class="footer_top_row_footer_heading"> Quick Links</span>
              <a href="#" class="footer_top_row_footer_heading_links_style">
                <div className="footer_top_row_footer_heading_links_style_icon">
                  <div className="footer_top_row_footer_heading_links_style_icon_text">
                    <p> Contact</p>
                  </div>
                </div>
              </a>
              <a href="#" class="footer_top_row_footer_heading_links_style">
                <div className="footer_top_row_footer_heading_links_style_icon">
                  <div className="footer_top_row_footer_heading_links_style_icon_text">
                    <p> Privacy Policy</p>
                  </div>
                </div>
              </a>
              <a href="#" class="footer_top_row_footer_heading_links_style">
                <div className="footer_top_row_footer_heading_links_style_icon">
                  <div className="footer_top_row_footer_heading_links_style_icon_text">
                    <p>Don’t be a victim of scams</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="footer_top_row_footer_heading_links2">
            <span class="footer_top_row_footer_heading">
              Refine your property search
            </span>
            <div>
              <div class="footer__navigation_block">
                <span className="footer__navigation_block_text">
                  Residential for sale:
                </span>
                <a href="#" className="footer__navigation_block_text_link">
                  Pretoria(112),
                </a>
                <a href="#" className="footer__navigation_block_text_link">
                  Akasia (04),
                </a>
                <a href="#" className="footer__navigation_block_text_link">
                  Brakpan (3)
                </a>
              </div>
              <div class="footer__navigation_block">
                <span className="footer__navigation_block_text">
                  Residential for rent:
                </span>
                <a href="#" className="footer__navigation_block_text_link">
                  Pretoria(112),
                </a>
                <a href="#" className="footer__navigation_block_text_link">
                  Akasia (04),
                </a>
                <a href="#" className="footer__navigation_block_text_link">
                  Brakpan (3)
                </a>
              </div>
              <div class="footer__navigation_block">
                <span className="footer__navigation_block_text">
                  Commercial to rent:
                </span>
                <a href="#" className="footer__navigation_block_text_link">
                  Pretoria(112),
                </a>
                <a href="#" className="footer__navigation_block_text_link">
                  Akasia (04),
                </a>
                <a href="#" className="footer__navigation_block_text_link">
                  Brakpan (3)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div>
          <span>© Huurkor. All rights reserved</span>
        </div>
        <div className="footer__bottom_logo">
          <span>Powered by</span>
          <a>
            <img src="https://www.huurkor.co.za/assets/media/entegral-flex.2bc50e5844a02d4798efd5fdb25caf41.png" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
