import React, { useState } from "react";
import { ChevronRight, ExternalLink, Crown, Award, Truck } from "lucide-react";
import CommissionCard from "./CommisionCard";
import ProductStatusCard from "./ProductStatusCard";
import ProductDescription from "./ProductDescription";
import { useParams, useNavigate } from "react-router-dom";

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
    title:
      "RENPHO Smart Scale for Body Weight, Large VA Display Bluetooth App",
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
  const product = products.find((p) => p.id === Number(id)); // parseInt fix

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

  // Combine product images into array
  const productImages = [product.image, product.hoverImage];

  return (
    <div className="bg-[#F6F6F6] min-h-screen">
      <div className="max-w-7xl mx-auto pt-4 pb-8 px-2 sm:px-4">
        {/* Breadcrumbs */}
        <div className="mb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-[#1E293B] mb-2">
            Amazon Product Details
          </h1>
          <nav className="flex flex-wrap items-center text-gray-600 text-sm">
            <a href="/amazon/dashboard" className="hover:text-gray-900">Dashboard</a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <a href="/amazon/products" className="hover:text-gray-900">Product</a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium truncate max-w-md">
              {product.title}
            </span>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* Left Section */}
          <div className="flex flex-col gap-4 relative lg:max-w-[75%] flex-1">
            {/* Product Card */}
            <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col md:flex-row gap-4">
              {/* Product Image */}
              <div className="flex-1 flex flex-col">
                <div className="bg-gray-50 rounded-xl overflow-hidden mb-4 w-full flex items-center justify-center aspect-square">
                  <img
                    src={productImages[selectedImage]}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-3 mt-auto overflow-x-auto">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`rounded-xl overflow-hidden border p-1 transition-all ${
                        selectedImage === index
                          ? "border-blue-500"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      style={{ width: 84, height: 84, minWidth: 84 }}
                    >
                      <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col">
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="bg-[#FFB800] text-white px-3 py-1 rounded-md font-semibold text-sm">
                    Amazon's Choice
                  </span>
                  <span className="bg-[#6366F1] text-white px-3 py-1 rounded-md font-semibold text-sm">
                    Bestseller
                  </span>
                  <span className="bg-[#8bc34a] text-white px-3 py-1 rounded-md font-semibold text-sm flex items-center gap-1">
                    <Truck className="w-3 h-3" />
                    Prime
                  </span>
                </div>

                <h2 className="text-lg font-bold text-[#263147] mb-4">{product.title}</h2>

                <div className="flex items-center mb-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <svg key={i} fill="#FFB800" viewBox="0 0 24 24" width="18" height="18">
                      <polygon points="12,2 15,10 23,10 17,14 19,22 12,17 5,22 7,14 1,10 9,10" />
                    </svg>
                  ))}
                  <svg fill="gray" viewBox="0 0 24 24" width="18" height="18">
                    <polygon points="12,2 15,10 23,10 17,14 19,22 12,17 5,22 7,14 1,10 9,10" />
                  </svg>
                  <span className="text-sm font-semibold text-[#263147] ml-2">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>

                <div className="flex items-center mb-4 flex-wrap gap-2">
                  <span className="text-3xl font-semibold text-[#8BC34A]">
                    ${product.price}
                  </span>
                  <span className="text-md text-gray-400 line-through ml-3">
                    ${product.originalPrice}
                  </span>
                  <span className="bg-[#FF6B4A] text-white py-0.5 px-2 rounded-md font-bold text-sm ml-2">
                    {product.discount}% off
                  </span>
                </div>

                <div className="mb-4">
                  <div className="font-bold text-[#263147] mb-1">ASIN</div>
                  <div className="bg-[#e7f5d9] text-[#8BC34A] font-semibold rounded-md px-3 py-1 mb-2 text-sm inline-block">
                    {product.asin}
                  </div>
                </div>

                <div className="mb-3">
                  <div className="font-bold text-[#263147] mb-2">Category</div>
                  <span className="bg-gray-200 text-[#263147] rounded px-2 py-1 text-sm font-semibold inline-block">
                    {product.category}
                  </span>
                </div>

                <div className="font-bold text-[#263147] mb-2">Commission Information</div>
                <div className="bg-[#ecece9] rounded-lg px-4 py-3 flex justify-between items-center mb-2">
                  <span className="text-[#263147] font-medium text-md">Commission Rate:</span>
                  <span className="text-[#8BC34A] font-bold text-md">{product.commission}%</span>
                </div>
                <div className="bg-[#ecece9] rounded-lg px-4 py-3 flex justify-between items-center">
                  <span className="text-[#263147] font-medium text-md">Est. Payout:</span>
                  <span className="text-[#8BC34A] font-bold text-md">${product.estimatedPayout}</span>
                </div>

                <button className="bg-[linear-gradient(135deg,#8bc34a,#689f38)] hover:opacity-90 text-white rounded-lg w-full py-2 font-bold text-md flex justify-center items-center gap-2 mt-5">
                  <ExternalLink className="w-6 h-6 mr-1" />
                  Generate Tracking Link
                </button>
              </div>
            </div>

            {/* Description */}
            <ProductDescription />
          </div>

          {/* Right Sidebar */}
          <div className="lg:fixed lg:h-[90vh] lg:overflow-auto lg:top-46 lg:right-0 lg:w-[20%] w-full shrink-0 flex flex-col gap-4 mr-2">
            <CommissionCard price={product.price} commission={3.2} />
            <ProductStatusCard
              status="Active"
              brand="Shoes"
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
