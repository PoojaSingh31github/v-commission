import React from 'react';
import { Check } from 'lucide-react';

const productInfo = {
  title: "GENIANI XL Heating Pad for Back Pain & Cramps...",
  description: "Discover this premium GENIANI XL Heating Pad for Back Pain & Cramps... available on Amazon. This product combines quality, functionality, and value, making it a perfect choice for customers seeking reliable solutions. Backed by Amazon's customer service and fast delivery.",
  keyFeatures: [
    "High-quality construction with premium materials",
    "Amazon Prime eligible for fast delivery",
    "Highly rated by Amazon customers",
    "Backed by Amazon's return policy",
    "Customer service support available"
  ],
  amazonBenefits: "This product is fulfilled by Amazon, ensuring fast delivery, easy returns, and reliable customer service. Perfect for affiliate marketers looking to promote trusted products with high conversion rates."
};

const ProductDescription = () => (
  <div className="mt-4">
    <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-2">
          Product Description
        </h2>
        <p className="text-gray-500 text-base">
          Detailed product information and specifications
        </p>
      </div>

      <hr className="border-gray-200 mb-8" />

      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-[#8BC34A] mb-4">
          About This Amazon Product
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          {productInfo.description}
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-[#8BC34A] mb-5">
          Key Features
        </h3>
        <div className="space-y-4">
          {productInfo.keyFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1">
                <Check className="w-6 h-6 text-[#8BC34A]" strokeWidth={2.5} />
              </div>
              <p className="text-gray-700 text-lg">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#8BC34A] mb-4">
          Amazon Benefits
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          {productInfo.amazonBenefits}
        </p>
      </div>
    </div>
  </div>
);

export default ProductDescription;
