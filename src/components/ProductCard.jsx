import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Eye, ExternalLink, Barcode } from "lucide-react";
import { FaGoogle, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

const ProductCard = ({ product, onClick, index }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative max-w-2xl mx-auto overflow-hidden cursor-pointer group rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.18)] bg-gradient-to-br from-pink-50 via-white to-blue-50 border border-pink-100"
      onClick={() => onClick(index)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.013 }}
      transition={{ type: "spring", stiffness: 250, damping: 17 }}
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        initial={{ background: "transparent" }}
        animate={
          isHovered
            ? {
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(190,200,255,0.18) 50%, rgba(255,179,217,0.25) 70%)",
              }
            : { background: "transparent" }
        }
        transition={{ duration: 1.1, ease: "easeInOut" }}
        style={{
          backgroundSize: "180% 180%",
        }}
      />

      {/* Image Section */}
      <div className="relative">
        <motion.img
          key={isHovered ? product.hoverImage : product.image}
          src={isHovered ? product.hoverImage : product.image}
          alt={product.title}
          className="w-full h-56 object-cover transition-all duration-700 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            borderTopLeftRadius: ".65rem",
            borderTopRightRadius: ".65rem",
            borderBottom: "3px solid #ec4899", // pink-400
          }}
        />

        {/* ASIN Tag */}
        <div className="absolute top-4 left-4 bg-pink-500/70 backdrop-blur-md text-white px-2 py-1 rounded-md flex items-center gap-1 font-semibold shadow-sm text-xs">
          <Barcode className="w-4 h-4" />
          ASIN: {product.asin}
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-xl border-2 border-white focus:outline-none transition-all duration-150 ${
            isFavorite
              ? "bg-pink-500 hover:bg-pink-600 ring-2 ring-white"
              : "bg-gradient-to-br from-blue-400 via-pink-400 to-blue-600 hover:from-pink-400 hover:to-blue-500"
          }`}
        >
          <Heart
            className={`w-4 h-4 ${isFavorite ? "fill-white" : ""} text-white`}
            strokeWidth={2}
          />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4 relative z-20 bg-white/90 backdrop-blur-md rounded-b-2xl">
        <h2 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">{product.title}</h2>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-pink-400 to-blue-400 text-white px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
              <span className="font-bold text-sm">{product.rating}</span>
              <span className="text-xs">★</span>
            </div>
            <span className="text-gray-500 text-sm">({product.reviewCount.toLocaleString()})</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
              <span className="text-xs">📦</span>
            </div>
            <span className="text-sm font-medium">{product.seller}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 bg-gradient-to-r from-blue-100 via-pink-50 to-blue-50 py-1.5 px-4 rounded-2xl border border-pink-100">
          <div className="text-blue-700 font-semibold text-xs">{product.category}</div>
          <div className="flex items-center gap-2">
            <a href={product.googleLink} target="_blank" rel="noopener noreferrer"
               className="w-4 h-4 flex items-center justify-center hover:scale-110 transition-transform">
              <FaGoogle className="w-4 h-4 text-[#4285F4]" />
            </a>
            <a href={product.youtubeLink} target="_blank" rel="noopener noreferrer"
               className="w-4 h-4 flex items-center justify-center hover:scale-110 transition-transform">
              <FaYoutube className="w-4 h-4 text-[#FF0000]" />
            </a>
            <a href={product.facebookLink} target="_blank" rel="noopener noreferrer"
               className="w-4 h-4 flex items-center justify-center hover:scale-110 transition-transform">
              <FaFacebook className="w-4 h-4 text-[#1877F2]" />
            </a>
            <a href={product.instagramLink} target="_blank" rel="noopener noreferrer"
               className="w-4 h-4 flex items-center justify-center hover:scale-110 transition-transform">
              <FaInstagram className="w-4 h-4 text-[#E4405F]" />
            </a>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-baseline justify-between">
            <span className="text-gray-400 font-medium text-xs">Price</span>
            <div className="flex items-center gap-1">
              <span className="text-base font-bold text-gray-800">${product.price}</span>
              <span className="text-gray-500 line-through text-xs pl-1">
                (${product.originalPrice})
              </span>
              <span className="text-blue-600 bg-blue-50 px-2 rounded font-semibold text-xs ml-1">{product.discount}% off</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium text-xs">Commission</span>
            <span className="text-sm font-bold text-pink-600">{product.commission}%</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 font-medium text-xs">Est. Payout</span>
            <span className="text-sm font-bold text-blue-500">${product.estimatedPayout}</span>
          </div>
        </div>

        <div className="space-y-2">
          <button className="w-full border-2 border-pink-400 text-pink-500 bg-white py-1.5 rounded-md font-semibold text-sm hover:bg-pink-50 transition-all flex items-center justify-center gap-2 group cursor-pointer">
            <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
            View On Amazon
          </button>
          <button className="w-full bg-gradient-to-r from-pink-400 via-pink-500 to-blue-500 text-white py-2 rounded-lg font-bold text-sm transition shadow flex items-center justify-center gap-2 group cursor-pointer hover:from-pink-500 hover:to-blue-600">
            Generate Tracking Link
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
