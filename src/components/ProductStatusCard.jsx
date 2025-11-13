const ProductStatusCard = ({ status, brand, createdDate, updatedDate }) => (
  <div className="bg-white rounded-2xl shadow p-4 mb-4">
    <h2 className="text-lg font-semibold text-[#1E293B] mb-4">Product Status</h2>
    <div className="flex justify-between items-center mb-3">
      <span className="text-[#223355] font-medium text-md">Status:</span>
      <span className="bg-[#8bc34a] text-white py-1 px-3 rounded font-semibold text-sm">
        {status}
      </span>
    </div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-[#223355] font-medium text-md">Brand:</span>
      <span className="text-gray-700 font-semibold">{brand}</span>
    </div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-[#223355] font-medium text-md">Created Date:</span>
      <span className="text-gray-700 font-semibold">{createdDate}</span>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-[#223355] font-medium text-md">Updated Date:</span>
      <span className="text-gray-700 font-semibold">{updatedDate}</span>
    </div>
  </div>
);

export default ProductStatusCard;
