import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Eye, ExternalLink, Barcode } from "lucide-react";
import { FaGoogle, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

const ProductCard = ({ product, onClick, index }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative max-w-2xl mx-auto bg-white rounded-2xl shadow-lg cursor-pointer overflow-hidden group"
      onClick={() => onClick(index)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-2xl"
        initial={{ background: "transparent" }}
        animate={
          isHovered
            ? {
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 70%)",
                backgroundPosition: ["200% 0", "-200% 0"],
              }
            : { background: "transparent" }
        }
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{
          backgroundSize: "200% 200%",
          maskImage: "linear-gradient(120deg, transparent 30%, black 50%, transparent 70%)",
        }}
      ></motion.div>

      {/* Image Section */}
      <div className="relative">
        <motion.img
          key={isHovered ? product.hoverImage : product.image}
          src={isHovered ? product.hoverImage : product.image}
          alt={product.title}
          className="w-full h-56 object-cover transition-all duration-700 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .8, ease: "easeInOut" }}
        />

        {/* ASIN Tag */}
        <div className="absolute top-4 left-4 bg-gray-700/30 backdrop-blur-sm text-white px-2 py-1 rounded-lg flex items-center gap-2">
          <Barcode className="w-4 h-4" />
          <span className="font-semibold text-sm">ASIN: {product.asin}</span>
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            isFavorite
              ? "bg-red-500 hover:bg-red-600"
              : "bg-[#FF6B4A] hover:bg-[#FF5536]"
          }`}
        >
          <Heart
            className={`w-4 h-4 ${isFavorite ? "fill-white" : ""} text-white`}
            strokeWidth={2}
          />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4 relative z-20">
        <h2 className="text-md font-medium text-gray-800 mb-3 line-clamp-2">
          {product.title}
        </h2>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="bg-[#FF6B4A] text-white px-1.5 py-0.5 rounded-md flex items-center gap-1">
              <span className="font-medium text-sm">{product.rating}</span>
              <span className="text-xs">★</span>
            </div>
            <span className="text-gray-500 text-sm">
              ({product.reviewCount.toLocaleString()})
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs">📦</span>
            </div>
            <span className="text-sm font-medium">{product.seller}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 bg-[#e3f2fd] py-1.5 px-4 rounded-4xl">
          <div className="text-[#1976d2] rounded-lg">
            <span className="font-semibold text-sm">{product.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={product.googleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-4 h-4 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <FaGoogle className="w-4 h-4 text-[#4285F4]" />
            </a>
            <a
              href={product.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-4 h-4 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <FaYoutube className="w-4 h-4 text-[#FF0000]" />
            </a>
            <a
              href={product.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-4 h-4 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <FaFacebook className="w-4 h-4 text-[#1877F2]" />
            </a>
            <a
              href={product.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-4 h-4 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <FaInstagram className="w-4 h-4 text-[#E4405F]" />
            </a>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-baseline justify-between">
            <span className="text-gray-500 font-medium text-sm">Price</span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-gray-800">
                ${product.price}
              </span>
              <span className="text-gray-700 line-through text-sm">
                (${product.originalPrice})
              </span>
              <span className="text-[#AECC34] px-1 py-1 rounded-md font-semibold text-xs">
                {product.discount}% off
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-500 font-medium text-sm">
              Commission
            </span>
            <span className="text-sm font-bold text-[#28a745]">
              {product.commission}%
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-500 font-medium text-sm">
              Est. Payout
            </span>
            <span className="text-sm font-bold text-[#17a2b8]">
              ${product.estimatedPayout}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <button className="w-full bg-white border border-black text-gray-800 py-1 rounded-md font-semibold text-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group cursor-pointer">
            <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
            View On Amazon
          </button>

          <button className="w-full bg-[linear-gradient(135deg,#8bc34a,#689f38)] text-white py-2 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 group cursor-pointer">
            Generate Tracking Link
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
