const ProductStatusCard = ({ status, brand, createdDate, updatedDate }) => (
  <div className="bg-gradient-to-br from-pink-50 via-white to-blue-50 rounded-2xl shadow-md p-6 mb-6 border border-blue-100">
    <h2 className="text-lg font-semibold text-pink-600 mb-6 drop-shadow-sm">Product Status</h2>
    <div className="flex justify-between items-center mb-4">
      <span className="text-blue-900 font-medium">Status:</span>
      <span className="bg-pink-500 text-white py-1.5 px-4 rounded-full font-semibold text-sm shadow-sm select-none">
        {status}
      </span>
    </div>
    <div className="flex justify-between items-center mb-3">
      <span className="text-blue-900 font-medium">Brand:</span>
      <span className="text-blue-700 font-semibold">{brand}</span>
    </div>
    <div className="flex justify-between items-center mb-3">
      <span className="text-blue-900 font-medium">Created Date:</span>
      <span className="text-blue-700 font-semibold">{createdDate}</span>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-blue-900 font-medium">Updated Date:</span>
      <span className="text-blue-700 font-semibold">{updatedDate}</span>
    </div>
  </div>
);

export default ProductStatusCard;
