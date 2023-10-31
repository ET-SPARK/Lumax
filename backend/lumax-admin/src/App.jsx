import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacts from "./components/Contacts";
import News from "./components/News";
import Sale from "./components/Sale";
import Rent from "./components/Rent";
import DetailRentView from "./components/DetailRentView";
import Detail from "./components/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/news" element={<News />} />
        <Route path="/for-sale" element={<Sale />} />
        <Route path="/for-rent" element={<Rent />} />
        <Route path="/for-rent-detail" element={<DetailRentView />} />
        <Route path="/detail/:postId" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
