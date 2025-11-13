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
    <div className="mt-6">
      {/* --- Product Info Card --- */}
      <div className="bg-gradient-to-br from-pink-50 via-white to-blue-50 rounded-2xl shadow-md p-7 mb-8 border border-pink-200">
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-pink-600 mb-2 drop-shadow-sm">
            Product Description
          </h2>
          <p className="text-blue-800 text-base font-medium">
            Detailed product information and specifications
          </p>
        </div>

        <hr className="border-pink-200 mb-6" />

        <div className="mb-5">
          <h3 className="text-2xl font-bold text-pink-600 mb-3 drop-shadow-sm">
            About This Amazon Product
          </h3>
          <p className="text-blue-800 text-lg leading-relaxed">{productInfo.description}</p>
        </div>

        <div className="mb-9">
          <h3 className="text-2xl font-bold text-pink-600 mb-3 drop-shadow-sm">
            Key Features
          </h3>
          <div className="space-y-2">
            {productInfo.keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <Check className="w-7 h-7 text-pink-500" strokeWidth={3} />
                <p className="text-blue-800 text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-pink-600 mb-3 drop-shadow-sm">
            Amazon Benefits
          </h3>
          <p className="text-blue-800 text-lg leading-relaxed">{productInfo.amazonBenefits}</p>
        </div>
      </div>

      {/* --- Image Preview Section --- */}
      <div className="bg-gradient-to-br from-pink-50 via-white to-blue-50 rounded-2xl shadow-md p-6 border border-pink-200 relative">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-pink-600 mb-2 drop-shadow-sm">
            Product Analytics & Data
          </h2>
          <p className="text-blue-800 text-base font-medium">
            View detailed product performance and market analysis
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100 to-blue-100 border border-pink-200 shadow-sm">
          <img
            src="https://azaffiliates-dashboard-dev.web.app/assets/images/helium-product-summary.png"
            alt="Helium Product Summary"
            className="w-full object-cover rounded-2xl"
          />
          {/* Grey Overlay with Eye Icon */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <button
              onClick={() => setShowImage(true)}
              className="bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <Eye className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* --- Fullscreen Modal --- */}
      {showImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="relative max-w-6xl w-full">
            <button
              onClick={() => setShowImage(false)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition"
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>
            <img
              src="https://azaffiliates-dashboard-dev.web.app/assets/images/helium-product-summary.png"
              alt="Full Product Summary"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
