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
    <header className="sticky-header">
      <div className="headerSection">
        <div className="header__topbar">
          <Link to="/" className="no_und">
            {/* <img src={Logo} alt="logo" class="header__logo" /> */}
            <div className="content">
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
              <ul className="navList">
                <li>
                  <Link to="/" className="link_style">
                    Home
                  </Link>
                </li>
                <li className="non_link_hov">
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
                      <ul className="navList navList_Properties ">
                        <li>
                          <Link to="/for-sale" className="link_style">
                            For Sale
                          </Link>
                        </li>
                        <li>
                          <Link to="/for-rent" className="link_style">
                            For Rent
                          </Link>
                        </li>
                      </ul>
                    )}
                  </span>
                </li>
                <li>
                  <Link to="/news" className="link_style">
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="link_style">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="link_style">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
        <div className="DektopHeadet">
          <nav>
            <ul className="navList">
              <li>
                <Link to="/" className="link_style">
                  Home
                </Link>
              </li>
              <li className="non_link_hov">
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
                    <ul className="navList navList_Properties ">
                      <li>
                        <Link to="/for-sale" className="link_style">
                          For Sale
                        </Link>
                      </li>
                      <li>
                        <Link to="/for-rent" className="link_style">
                          For Rent
                        </Link>
                      </li>
                    </ul>
                  )}
                  {onPress && (
                    <span className="prop prop_style">
                      <span>
                        <Link to="/for-sale" className="link_style">
                          For Sale
                        </Link>
                      </span>
                      <span>
                        <Link to="/for-rent" className="link_style">
                          For Rent
                        </Link>
                      </span>
                    </span>
                  )}
                </span>
              </li>
              <li>
                <Link to="/news" className="link_style">
                  News
                </Link>
              </li>
              <li>
                <Link to="/about" className="link_style">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link_style">
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
