import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCaretDown,
  faBars,
  faXmark,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../images/LUMAX.png";
function Header() {
  const [onPress, setOnPress] = useState(false);
  const [onpressNav, setOnPressNav] = useState(false);
  const [nav, setNav] = useState(false);
  const [up, setUp] = useState(true);

  const handleOnPress = () => {
    setOnPress(!onPress);
    setNav(!nav);
    setUp(!up);
  };
  const handleonpressNav = () => {
    setOnPressNav(!onpressNav);
  };
  return (
    <header class="sticky-header">
      <div class="headerSection">
        <div class="header__topbar">
          <Link to="/" className="no_und">
            {/* <img src={Logo} alt="logo" class="header__logo" /> */}
            <div class="content">
              <h2>LUMAX</h2>
              <h2>LUMAX</h2>
            </div>
          </Link>
          {onpressNav ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="bars-icon"
              onClick={handleonpressNav}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="bars-icon"
              onClick={handleonpressNav}
            />
          )}
        </div>
        {onpressNav && (
          <div className="mobileHeader">
            <nav>
              <ul class="navList">
                <li>
                  <Link to="/" class="link_style">
                    Home
                  </Link>
                </li>
                <li class="non_link_hov">
                  <span
                    onClick={() => {
                      handleOnPress(setOnPress);
                    }}
                  >
                    {" "}
                    Properties &nbsp;
                    {up ? (
                      <FontAwesomeIcon icon={faCaretDown} />
                    ) : (
                      <FontAwesomeIcon icon={faCaretUp} />
                    )}
                    {nav && (
                      <ul class="navList navList_Properties ">
                        <li>
                          <Link to="/for-sale" class="link_style">
                            For Sale
                          </Link>
                        </li>
                        <li>
                          <Link to="/for-rent" class="link_style">
                            For Rent
                          </Link>
                        </li>
                      </ul>
                    )}
                  </span>
                </li>
                <li>
                  <Link to="/news" class="link_style">
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/about" class="link_style">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" class="link_style">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
        <div className="DektopHeadet">
          <nav>
            <ul class="navList">
              <li>
                <Link to="/" class="link_style">
                  Home
                </Link>
              </li>
              <li class="non_link_hov">
                <span
                  onClick={() => {
                    handleOnPress(setOnPress);
                  }}
                >
                  {" "}
                  Properties &nbsp;
                  {up ? (
                    <FontAwesomeIcon icon={faCaretDown} />
                  ) : (
                    <FontAwesomeIcon icon={faCaretUp} />
                  )}
                  {nav && (
                    <ul class="navList navList_Properties ">
                      <li>
                        <Link to="/for-sale" class="link_style">
                          For Sale
                        </Link>
                      </li>
                      <li>
                        <Link to="/for-rent" class="link_style">
                          For Rent
                        </Link>
                      </li>
                    </ul>
                  )}
                  {onPress && (
                    <span className="prop prop_style">
                      <span>
                        <Link to="/for-sale" class="link_style">
                          For Sale
                        </Link>
                      </span>
                      <span>
                        <Link to="/for-rent" class="link_style">
                          For Rent
                        </Link>
                      </span>
                    </span>
                  )}
                </span>
              </li>
              <li>
                <Link to="/news" class="link_style">
                  News
                </Link>
              </li>
              <li>
                <Link to="/about" class="link_style">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" class="link_style">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
