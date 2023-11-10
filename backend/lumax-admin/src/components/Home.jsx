import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";
import Tools from "./Tools";

function Home() {
  return (
    <div>
      <Header />
      <Tools />
      <Footer />
    </div>
  );
}

export default Home;
