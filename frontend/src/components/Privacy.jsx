import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Privacy.css";

function Privacy() {
  return (
    <div>
      <Header />
      <div className="section__background_overlay" />
      <div>
        <h1 className="section__heading_about">Privacy Policy</h1>
        <div className="section_theme_lightest section__sub">
          <div className="section__subheading">Commitment to your privacy</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
