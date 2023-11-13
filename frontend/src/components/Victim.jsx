import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Victim() {
  return (
    <div>
      <Header />
      <div className="section__background_overlay" />
      <div>
        <h1 className="section__heading_about">Don't Be A Victim Of Scams</h1>
        <div className="section_theme_lightest section__sub">
          <div className="section__subheading">
            How exactly does the rental housing scam work?
          </div>
          <div className="section__subheading">
            How do these criminals work?
          </div>
          <div className="section__subheading">
            How to avoid being a victim of these scams:
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Victim;
