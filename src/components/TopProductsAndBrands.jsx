import React from "react";

const TopProductsAndBrands = ({ data, name }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="p-4 px-6">
        <h2 className="text-2xl font-bold text-[#6D6964]">Top {name}</h2>
        <p className="text-sm text-gray-500 mt-1">Latest Report</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-t border-b border-gray-200">
              <th className="text-left py-4 px-6 text-xs font-bold text-[#6D6964] uppercase tracking-wider">
                Brand
              </th>
              <th className="text-center py-4 px-4 text-xs font-bold text-[#6D6964] uppercase tracking-wider">
                Orders
              </th>
              <th className="text-center py-4 px-4 text-xs font-bold text-[#6D6964] uppercase tracking-wider">
                Sale Amount
              </th>
              <th className="text-center py-4 px-6 text-xs font-bold text-[#6D6964] uppercase tracking-wider">
                Payout
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((product, index) => (
              <tr
                key={product.id}
                className={`group ${
                  index !== data.length - 1 ? "border-b border-gray-100" : ""
                } hover:bg-gray-50 transition-colors cursor-pointer`}
              >
                <td className="py-2 px-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center p-2`}
                    >
                      <img
                        src={product?.logo}
                        alt={product?.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p
                        className={`text-[#6D6964] group-hover:text-[#6a9912] font-semibold transition-colors`}
                      >
                        {product.name}
                      </p>
                      <p className="text-sm text-[#6D6964] group-hover:text-[#6D6964] transition-colors">
                        {product?.productCount || "Visit Site"}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <span className="text-[#6D6964] font-medium group-hover:text-gray-900 transition-colors">
                    {product.orders}
                  </span>
                </td>
                <td className="py-4 px-4 text-center">
                  <span className={`text-[#6D6964] font-medium group-hover:text-red-600 transition-colors`}>
                    {product.saleAmount}
                  </span>
                </td>
                <td className="py-4 px-6 text-center">
                  <span className="text-[#6D6964] font-medium group-hover:text-gray-900 transition-colors">
                    {product.payout}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProductsAndBrands;
