import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Test.css";

function Test() {
  return (
    <div>
      <Header />
      <div class="gallery">
        <span class="gallery_image">1</span>
        <span class="gallery_image ">2</span>
      </div>
      <Footer />
    </div>
  );
}

export default Test;
