import React from "react";
import { useNavigate } from "react-router-dom";
import ProductFilterDropdown from "./ProductFilterDropdown";

function ProductPageHeader() {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-blue-50 pb-6 shadow-sm border-b border-pink-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb + Title */}
        <div className="py-4">
          <h1 className="text-3xl font-extrabold text-pink-600 mb-2 drop-shadow-sm">
            Amazon Products
          </h1>
          <div className="text-blue-500 font-semibold text-base flex items-center gap-2 select-none">
            <span
              onClick={() => navigate("/amazon/dashboard")}
              className="cursor-pointer hover:text-pink-600 transition"
            >
              Dashboard
            </span>
            <span className="text-pink-400 font-normal select-none">/</span>
            <span className="font-normal text-blue-600 select-text">Products</span>
          </div>
        </div>

        {/* Search + Filter Row */}
        <div className="bg-white rounded-2xl w-full px-6 py-3 flex items-center gap-5 shadow-md border border-pink-100">
          <div className="flex-1 flex items-center gap-3 text-pink-400">
            <span className="text-pink-300">
              <svg
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
                className="transition-colors duration-300"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
                <path
                  d="M21 21l-4.3-4.3"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-0 py-2 bg-transparent border-0 focus:ring-0 text-pink-600 text-base outline-none placeholder-pink-300"
            />
          </div>
          <ProductFilterDropdown onApply={console.log} />
        </div>
      </div>
    </div>
  );
}

export default ProductPageHeader;
