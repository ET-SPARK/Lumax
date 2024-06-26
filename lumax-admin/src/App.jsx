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
import DetailSaleView from "./components/DetailSaleView";
import DetailSale from "./components/DetailSale";
import Tools from "./components/Tools";
import RentalForm from "./components/RentalForm";
import SaleForm from "./components/SaleForm";

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
        <Route path="/for-sale-detail" element={<DetailSaleView />} />
        <Route path="/detail/:postId" element={<Detail />} />
        <Route path="/detail-sale/:postId" element={<DetailSale />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/rental-form" element={<RentalForm />} />
        <Route path="/sale-form" element={<SaleForm />} />
      </Routes>
    </Router>
  );
}

export default App;
