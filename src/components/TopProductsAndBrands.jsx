import React from "react";

const TopProductsAndBrands = ({ data, name }) => (
  <div className="bg-gradient-to-br from-pink-50 via-white to-blue-50 rounded-2xl shadow-xl border border-pink-100 overflow-hidden">
    <div className="p-5 pb-3 border-b border-pink-100 bg-gradient-to-r from-blue-50 to-pink-50">
      <h2 className="text-lg font-bold text-pink-500">Top {name}</h2>
      <p className="text-xs text-blue-500 font-medium">Latest Report</p>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-xs uppercase font-semibold bg-gradient-to-r from-blue-100 to-pink-100 text-blue-600">
            <th className="text-left py-3 px-6">Brand</th>
            <th className="text-center py-3 px-3">Orders</th>
            <th className="text-center py-3 px-3">Sale Amount</th>
            <th className="text-center py-3 px-6">Payout</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product, index) => (
            <tr
              key={product.id}
              className={`group ${
                index !== data.length - 1 ? "border-b border-pink-50" : ""
              } hover:bg-gradient-to-r hover:from-blue-50 hover:to-pink-50 transition`}
            >
              <td className="py-3 px-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-gradient-to-br from-blue-100 to-pink-50 flex items-center justify-center p-1 shadow-sm border border-pink-100">
                    <img
                      src={product.logo}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-blue-800 font-bold group-hover:text-pink-500 transition-colors">{product.name}</p>
                    <p className="text-xs text-pink-400 group-hover:text-blue-400 transition-colors">{product.productCount || "Visit Site"}</p>
                  </div>
                </div>
              </td>
              <td className="py-2 px-3 text-center">
                <span className="text-blue-700 font-semibold">{product.orders}</span>
              </td>
              <td className="py-2 px-3 text-center">
                <span className="text-red-300 group-hover:text-red-500 font-semibold">{product.saleAmount}</span>
              </td>
              <td className="py-2 px-6 text-center">
                <span className="text-blue-700 font-semibold">{product.payout}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default TopProductsAndBrands;
