import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Test.css";

function Test() {
  return (
    <div>
      <Header />
      <div className="gallery__images">
        <div className="gallery__image">1</div>
        <div className="gallery__image">2</div>
        <div className="gallery__image">3</div>
      </div>
      <Footer />
    </div>
  );
}

export default Test;
