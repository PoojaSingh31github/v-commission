import React, { useState } from "react";
import { ChevronRight, ExternalLink, Crown, Award, Truck } from "lucide-react";
import CommissionCard from "./CommisionCard";
import ProductStatusCard from "./ProductStatusCard";
import ProductDescription from "./ProductDescription";
import { useParams, useNavigate } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import { motion, AnimatePresence } from "framer-motion"; // <-- add this import at top

const products = [
  {
    id: 0,
    image:
      "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/11.jpg",
    hoverImage:
      "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/12.jpg",
    asin: "B01N1UX8RW",
    title:
      "GENIANI XL Heating Pad for Back Pain & Cramps Relief, Auto Shut-Off",
    rating: 4.8,
    reviewCount: 339242,
    seller: "GENIANI",
    category: "Health",
    googleLink: "#",
    youtubeLink: "#",
    facebookLink: "#",
    instagramLink: "#",
    price: 39.96,
    originalPrice: 49.99,
    discount: 20,
    commission: 4.5,
    estimatedPayout: 1.57,
  },
  {
    id: 1,
    image:
      "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/15.jpg",
    hoverImage:
      "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/16.jpg",
    asin: "B07VY1XZXB",
    title:
      "Glocusent Book Light, 3-Color & 6-Brightness Amber Neck Reading Lamp",
    rating: 4.6,
    reviewCount: 125000,
    seller: "Glocusent",
    category: "Electronics",
    googleLink: "#",
    youtubeLink: "#",
    facebookLink: "#",
    instagramLink: "#",
    price: 21.99,
    originalPrice: 27.99,
    discount: 21,
    commission: 4.5,
    estimatedPayout: 1.57,
  },
  {
    id: 2,
    image:
      "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/13.jpg",
    hoverImage:
      "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/14.jpg",
    asin: "B07VY1XZXC",
    title:
      "Glocusent Book Light, 3-Color & Adjustable Brightness, LED Neck Lamp",
    rating: 4.6,
    reviewCount: 139242,
    seller: "Glocusent",
    category: "Clothing",
    googleLink: "#",
    youtubeLink: "#",
    facebookLink: "#",
    instagramLink: "#",
    price: 21.99,
    originalPrice: 25.99,
    discount: 15,
    commission: 4.5,
    estimatedPayout: 1.57,
  },
  {
    id: 3,
    image:
      "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/05.jpg",
    hoverImage:
      "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/06.jpg",
    asin: "B071CQ5LB2",
    title: "RENPHO Smart Scale for Body Weight, Digital Bathroom Scale",
    rating: 4.7,
    reviewCount: 300120,
    seller: "RENPHO",
    category: "Shoes & Jewelry",
    googleLink: "#",
    youtubeLink: "#",
    facebookLink: "#",
    instagramLink: "#",
    price: 34.99,
    originalPrice: 39.99,
    discount: 12,
    commission: 4.5,
    estimatedPayout: 1.57,
  },
  {
    id: 4,
    image:
      "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/09.jpg",
    hoverImage:
      "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/10.jpg",
    asin: "B071CQ5LB3",
    title: "RENPHO Smart Scale for Body Weight, Large VA Display Bluetooth App",
    rating: 4.7,
    reviewCount: 212565,
    seller: "RENPHO",
    category: "Clothing",
    googleLink: "#",
    youtubeLink: "#",
    facebookLink: "#",
    instagramLink: "#",
    price: 34.99,
    originalPrice: 44.99,
    discount: 22,
    commission: 4.5,
    estimatedPayout: 1.57,
  },
  {
    id: 5,
    image:
      "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/04.jpg",
    hoverImage:
      "https://azaffiliates-dashboard-dev.web.app/assets/images/ecommerce/03.jpg",
    asin: "B01NMPA4JZ",
    title: "Zyllion Shiatsu Back and Neck Massager with Heat",
    rating: 4.7,
    reviewCount: 134000,
    seller: "Zyllion",
    category: "Clothing",
    googleLink: "#",
    youtubeLink: "#",
    facebookLink: "#",
    instagramLink: "#",
    price: 74.95,
    originalPrice: 89.99,
    discount: 17,
    commission: 4.5,
    estimatedPayout: 1.57,
  },
];

const AmazonProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const { isSidebarOpen } = useSidebar();

  if (!product) {
    return (
      <div className="p-8 text-red-600 text-center">
        Product not found
        <button
          className="ml-4 text-blue-600 underline"
          onClick={() => navigate("/amazon/products")}
        >
          Go Back
        </button>
      </div>
    );
  }
  const productImages = [product.image, product.hoverImage];

  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-blue-50 min-h-screen">
      <div className="pt-3 px-3 sm:px-4 lg:pl-0">
        {/* Breadcrumbs */}
        <div className="mb-4">
          <h1 className="text-lg sm:text-2xl font-bold text-pink-500 mb-1 sm:mb-2 drop-shadow-sm">
            Amazon Product Details
          </h1>
          <nav className="flex flex-wrap items-center text-blue-600 text-xs sm:text-sm overflow-hidden font-medium">
            <a href="/amazon/dashboard" className="hover:text-blue-900 transition-colors truncate">
              Dashboard
            </a>
            <ChevronRight className="w-3 h-3 mx-1 sm:mx-2" />
            <a href="/amazon/products" className="hover:text-blue-900 transition-colors truncate">
              Product
            </a>
            <ChevronRight className="w-3 h-3 mx-1 sm:mx-2" />
            <span className="text-pink-600 font-semibold truncate max-w-40 sm:max-w-md">
              {product.title}
            </span>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* Left Section */}
          <div className={`flex flex-col gap-4 relative flex-1 ${isSidebarOpen ? "lg:max-w-[74%]" : "lg:max-w-[80%]"}`}>
            {/* Product Card */}
            <div className="bg-gradient-to-br from-pink-50 via-white to-blue-50 rounded-2xl p-3 sm:p-4 shadow-xl border border-pink-100 flex flex-col md:flex-row gap-4">
              {/* Product Image */}
              <div className="flex-1 flex flex-col">
                <div className="relative rounded-xl mb-3 sm:mb-4 w-full flex items-center justify-center aspect-square overflow-hidden border border-blue-100 bg-blue-50">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedImage} // ensures re-render animation
                      src={productImages[selectedImage]}
                      alt={product.title}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="w-full h-full object-cover absolute top-0 left-0"
                    />
                  </AnimatePresence>
                  {/* ASIN Tag */}
                  <span className="absolute bottom-3 left-3 bg-pink-400/90 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                    ASIN: {product.asin}
                  </span>
                </div>

                <div className="flex gap-2 sm:gap-3 mt-auto overflow-x-auto pb-1">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`rounded-xl cursor-pointer overflow-hidden border p-1 transition-all shadow-sm ${
                        selectedImage === index
                          ? "border-pink-400"
                          : "border-blue-100 hover:border-blue-300"
                      }`}
                      style={{ width: 70, height: 70, minWidth: 70 }}
                    >
                      <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col">
                <div className="flex gap-2 flex-wrap mb-3 sm:mb-4">
                  <span className="bg-blue-500/90 text-white px-2 py-0.5 rounded-lg font-semibold text-xs sm:text-sm shadow-sm">
                    Amazon's Choice
                  </span>
                  <span className="bg-pink-500/90 text-white px-2 py-0.5 rounded-lg font-semibold text-xs sm:text-sm shadow-sm">
                    Bestseller
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-lg font-semibold text-xs sm:text-sm flex items-center gap-1 border border-blue-200">
                    <Truck className="w-3 h-3" />
                    Prime
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-blue-800 mb-3">
                  {product.title}
                </h2>

                <div className="flex items-center mb-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <svg key={i} fill="#ec4899" viewBox="0 0 24 24" width="16" height="16">
                      <polygon points="12,2 15,10 23,10 17,14 19,22 12,17 5,22 7,14 1,10 9,10" />
                    </svg>
                  ))}
                  <svg fill="#d1d5db" viewBox="0 0 24 24" width="16" height="16">
                    <polygon points="12,2 15,10 23,10 17,14 19,22 12,17 5,22 7,14 1,10 9,10" />
                  </svg>
                  <span className="text-xs sm:text-sm font-semibold text-blue-900 ml-2">
                    {product.rating} ({product.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>

                <div className="flex items-center mb-4 flex-wrap gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-pink-500">${product.price}</span>
                  <span className="text-sm sm:text-md text-blue-400 line-through ml-2">
                    ${product.originalPrice}
                  </span>
                  <span className="bg-blue-500/90 text-white py-0.5 px-2 rounded-md font-bold text-xs sm:text-sm ml-1 shadow-sm">
                    {product.discount}% off
                  </span>
                </div>

                <div className="font-bold text-blue-900 mb-1">ASIN</div>
                <div className="bg-pink-50 text-pink-500 font-semibold rounded-full px-3 py-1 mb-2 text-xs sm:text-sm inline-block shadow">
                  {product.asin}
                </div>

                <div className="mb-3">
                  <div className="font-bold text-blue-900 mb-1">Category</div>
                  <span className="bg-blue-50 text-blue-700 rounded px-2 py-0.5 text-xs sm:text-sm font-semibold inline-block border border-blue-100">
                    {product.category}
                  </span>
                </div>

                <div className="font-bold text-blue-900 mb-2">
                  Commission Info
                </div>
                <div className="bg-gradient-to-r from-pink-100 to-blue-50 rounded-lg px-3 py-2 flex justify-between items-center mb-2 text-sm sm:text-md border border-pink-100">
                  <span className="text-blue-900 font-medium">Rate:</span>
                  <span className="text-pink-500 font-bold">
                    {product.commission}%
                  </span>
                </div>
                <div className="bg-gradient-to-r from-pink-100 to-blue-50 rounded-lg px-3 py-2 flex justify-between items-center text-sm sm:text-md border border-blue-100">
                  <span className="text-blue-900 font-medium">Est. Payout:</span>
                  <span className="text-blue-500 font-bold">
                    ${product.estimatedPayout}
                  </span>
                </div>

                <button className="bg-gradient-to-r from-pink-400 via-pink-500 to-blue-500 hover:opacity-90 text-white rounded-lg w-full py-2 font-bold text-sm sm:text-md flex justify-center items-center gap-2 mt-4 shadow-md hover:from-pink-500 hover:to-blue-600 transition-all">
                  <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 mr-1" />
                  Generate Tracking Link
                </button>
              </div>
            </div>

            {/* Description */}
            <ProductDescription />
          </div>

          {/* Right Sidebar */}
          <div className="lg:fixed lg:top-20 right-0 lg:h-[calc(100vh-6rem)] overflow-y-auto lg:w-[21%] w-full mr-1 flex flex-col gap-[7px] mt-4 lg:mt-0">
            <CommissionCard price={product.price} commission={product.commission} />
            <ProductStatusCard
              status="Active"
              brand={product.category}
              createdDate="11/11/2025"
              updatedDate="11/11/2025"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazonProductDetails;
