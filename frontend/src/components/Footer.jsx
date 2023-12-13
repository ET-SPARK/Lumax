import React from "react";
import "./Footer.css";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../images/spark.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer__top">
        <div className="footet_top_col">
          <div className="footer_top_row">
            <div className="footer_top_row_footer_heading_links">
              <span className="footer_top_row_footer_heading">
                {" "}
                Contact Information
              </span>

              <Link
                to="/"
                className="footer_top_row_footer_heading_links_style"
              >
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
              </Link>
              <Link
                to="/"
                className="footer_top_row_footer_heading_links_style"
              >
                <div className="footer_top_row_footer_heading_links_style_icon icon_item">
                  <div>
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="footer_top_row_footer_heading_links_style_icon_text">
                    <p>012 400 8600</p>
                  </div>
                </div>
              </Link>
              <Link
                to="/"
                className="footer_top_row_footer_heading_links_style"
              >
                <div className="footer_top_row_footer_heading_links_style_icon">
                  <div>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="footer_top_row_footer_heading_links_style_icon_text">
                    <p> admin@huurkor.co.za</p>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <span className="footer_top_row_footer_heading">
                social media
              </span>
            </div>
            <div>
              <span className="footer_top_row_footer_heading">
                {" "}
                Quick Links
              </span>

              <Link
                to="/"
                className="footer_top_row_footer_heading_links_style"
              >
                <div className="footer_top_row_footer_heading_links_style_icon">
                  <div className="footer_top_row_footer_heading_links_style_icon_text">
                    <Link to="/contact" className="footer_link">
                      <p> Contact</p>
                    </Link>
                  </div>
                </div>
              </Link>
              <Link
                to="/"
                className="footer_top_row_footer_heading_links_style"
              >
                <div className="footer_top_row_footer_heading_links_style_icon">
                  <div className="footer_top_row_footer_heading_links_style_icon_text">
                    <Link to="/privacy-policy" className="footer_link">
                      <p> Privacy Policy</p>
                    </Link>
                  </div>
                </div>
              </Link>
              <Link
                to="/"
                className="footer_top_row_footer_heading_links_style"
              >
                <div className="footer_top_row_footer_heading_links_style_icon">
                  <div className="footer_top_row_footer_heading_links_style_icon_text">
                    <Link to="/victim" className="footer_link">
                      <p>Don’t be a victim of scams</p>
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="footer_top_row_footer_heading_links2">
            <span className="footer_top_row_footer_heading">
              Refine your property search
            </span>
            <div>
              <div className="footer__navigation_block">
                <span className="footer__navigation_block_text">
                  Residential for sale:
                </span>
                <Link to="/" className="footer__navigation_block_text_link">
                  {" "}
                  Pretoria(112),
                </Link>
                <Link to="/" className="footer__navigation_block_text_link">
                  Akasia (04),
                </Link>
                <Link to="/" className="footer__navigation_block_text_link">
                  {" "}
                  Brakpan (3)
                </Link>
              </div>
              <div className="footer__navigation_block">
                <span className="footer__navigation_block_text">
                  Residential for rent:
                </span>
                <Link to="/" className="footer__navigation_block_text_link">
                  Pretoria(112),
                </Link>
                <Link to="/" className="footer__navigation_block_text_link">
                  {" "}
                  Akasia (04),
                </Link>
                <Link to="/" className="footer__navigation_block_text_link">
                  Brakpan (3)
                </Link>
              </div>
              <div className="footer__navigation_block">
                <span className="footer__navigation_block_text">
                  Commercial to rent:
                </span>
                <Link to="/" className="footer__navigation_block_text_link">
                  Pretoria(112),
                </Link>
                <Link to="/" className="footer__navigation_block_text_link">
                  Akasia (04),
                </Link>
                <Link to="/" className="footer__navigation_block_text_link">
                  Brakpan (3)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div>
          <span className="footer__bottom_mark">
            © LUMAX Property Management. All rights reserved
          </span>
        </div>
        <div className="footer__bottom_logo">
          <div>
            <span>Powered by</span>
          </div>
          <div>
            <Link to="/" className="footer_link">
              {/* <img src={Logo} alt="logo" /> */}
              <svg viewBox="0 0 400 100" width="80" height="20">
                <symbol id="s-text">
                  <text textAnchor="middle" x="50%" y="80%">
                    SPARK.{" "}
                  </text>
                  <text textAnchor="middle" x="52%" y="80%">
                    SPARK.{" "}
                  </text>
                </symbol>
                <g className="g-ants">
                  <use xlinkHref="#s-text" className="text-copy"></use>
                  <use xlinkHref="#s-text" className="text-copy"></use>
                  <use xlinkHref="#s-text" className="text-copy"></use>
                  <use xlinkHref="#s-text" className="text-copy"></use>
                  <use xlinkHref="#s-text" className="text-copy"></use>
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
