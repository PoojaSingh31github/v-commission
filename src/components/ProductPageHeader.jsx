// At the top of your Products page
import React from "react";
import { useNavigate } from "react-router-dom";
import ProductFilterDropdown from "./ProductFilterDropdown";

// At the top of your Products page
function ProductPageHeader() {
    const navigate = useNavigate();
  return (
    <div className="bg-[#F6F6F6] pb-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb + Title */}
        <div className="py-3">
          <h1 className="text-3xl font-bold text-[#202b3c] mb-1">
            Amazon Products
          </h1>
          <div className="text-[#505c6c] font-semibold text-base flex items-center gap-2">
            <span onClick={() => navigate("/amazon/dashboard")} 
             className="cursor-pointer hover:text-[#80b415] transition">Dashboard</span>
            <span className="text-[#909fab] font-normal">/</span>
            <span className="font-normal">Products</span>
          </div>
        </div>

        {/* Search + Filter Row */}
        <div className="bg-white rounded-2xl w-full px-6 py-3 flex items-center gap-5 shadow">
          <div className="flex-1 flex items-center gap-3">
            <span className="text-gray-400">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" stroke="#afafaf" strokeWidth="2"/>
                <path d="M21 21l-4.3-4.3" stroke="#afafaf" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-0 py-2 bg-transparent border-0 focus:ring-0 text-gray-700 text-base outline-none"
            />
          </div>
          <ProductFilterDropdown onApply={console.log} />

        </div>
      </div>
    </div>
  );
}

export default ProductPageHeader;
