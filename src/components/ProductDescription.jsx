import React, { useState } from "react";
import { Check, Eye, X } from "lucide-react";

const productInfo = {
  title: "GENIANI XL Heating Pad for Back Pain & Cramps...",
  description:
    "Discover this premium GENIANI XL Heating Pad for Back Pain & Cramps... available on Amazon. This product combines quality, functionality, and value, making it a perfect choice for customers seeking reliable solutions. Backed by Amazon's customer service and fast delivery.",
  keyFeatures: [
    "High-quality construction with premium materials",
    "Amazon Prime eligible for fast delivery",
    "Highly rated by Amazon customers",
    "Backed by Amazon's return policy",
    "Customer service support available",
  ],
  amazonBenefits:
    "This product is fulfilled by Amazon, ensuring fast delivery, easy returns, and reliable customer service. Perfect for affiliate marketers looking to promote trusted products with high conversion rates.",
};

const ProductDescription = () => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="mt-4">
      {/* --- Product Info Card --- */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 mb-1">
            Product Description
          </h2>
          <p className="text-gray-500 text-base">
            Detailed product information and specifications
          </p>
        </div>

        <hr className="border-gray-200 mb-4" />

        <div className="mb-4">
          <h3 className="text-xl font-bold text-[#8BC34A] mb-2">
            About This Amazon Product
          </h3>
          <p className="text-gray-700 text-md leading-relaxed">
            {productInfo.description}
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#8BC34A] mb-2">
            Key Features
          </h3>
          <div className="space-y-1">
            {productInfo.keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-0.5">
                  <Check className="w-6 h-6 text-[#8BC34A]" strokeWidth={2.5} />
                </div>
                <p className="text-gray-700 text-md">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#8BC34A] mb-2">
            Amazon Benefits
          </h3>
          <p className="text-gray-700 text-md leading-relaxed">
            {productInfo.amazonBenefits}
          </p>
        </div>
      </div>

      {/* --- Image Preview Section --- */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 relative">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 mb-1">
            Product Analytics & Data
          </h2>
          <p className="text-gray-500 text-base">
            View detailed product performance and market analysis
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
          <img
            src="https://azaffiliates-dashboard-dev.web.app/assets/images/helium-product-summary.png"
            alt="Helium Product Summary"
            className="w-full object-cover rounded-2xl"
          />
          {/* Grey Overlay with Eye Icon */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button
              onClick={() => setShowImage(true)}
              className="bg-white/80 hover:bg-white text-gray-700 p-3 rounded-full transition-all duration-300"
            >
              <Eye className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* --- Fullscreen Modal --- */}

      {showImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="relative max-w-6xl w-full">
            <button
              onClick={() => setShowImage(false)}
              className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
            >
              <X className="w-5 h-5 text-gray-800" />
            </button>
            <img
              src="https://azaffiliates-dashboard-dev.web.app/assets/images/helium-product-summary.png"
              alt="Full Product Summary"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
