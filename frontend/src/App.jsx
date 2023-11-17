import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacts from "./components/Contacts";
import About from "./components/About";
import News from "./components/News";
import Sale from "./components/Sale";
import Rent from "./components/Rent";
import Detail from "./components/Detail";
import DetailRentView from "./components/DetailRentView";
import DetailSaleView from "./components/DetailSaleView";
import DetailSale from "./components/DetailSale";
import Tools from "./components/Tools";
import Victim from "./components/Victim";
import Privacy from "./components/Privacy";
import Test from "./components/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/for-sale" element={<Sale />} />
        <Route path="/for-rent" element={<Rent />} />
        <Route path="/for-rent-detail" element={<DetailRentView />} />
        <Route path="/for-sale-detail" element={<DetailSaleView />} />
        <Route path="/detail/:postId" element={<Detail />} />
        <Route path="/detail-sale/:postId" element={<DetailSale />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/victim" element={<Victim />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
