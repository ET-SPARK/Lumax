import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";
import axios from "axios";

function Home() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
