import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import AmazonDashboard from "./components/AmazoneDashboard";
import Products from "./components/Products";
import AmazonProductDetails from "./components/AmazoneDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/amazon/dashboard" replace />} />
        <Route element={<Layout />}>
          <Route path="/amazon/dashboard" element={<AmazonDashboard />} />
          <Route path="/amazon/products" element={<Products />} />
          <Route path="/amazon/products/:id" element={<AmazonProductDetails />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
