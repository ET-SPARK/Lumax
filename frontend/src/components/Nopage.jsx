import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Nopage() {
  return (
    <div>
      <Header />
      <div className="section__background_overlay" />
      <div>
        <h1 className="section__heading_about ">404 - Page Not Found</h1>
        <h2 className="section__heading_about ">
          Sorry, the page you are looking for does not exist.
        </h2>
      </div>
      <Footer />
    </div>
  );
}

export default Nopage;
