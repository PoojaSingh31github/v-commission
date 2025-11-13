import { ExternalLink } from "lucide-react";

const CommissionCard = ({ price, commission }) => (
  <div className="bg-gradient-to-br from-pink-50 via-white to-blue-50 rounded-2xl shadow-md p-6 mb-6 border border-pink-100">
    <h2 className="text-lg font-semibold text-pink-600 mb-5 drop-shadow-sm">
      Amazon Commission Details
    </h2>
    <div className="bg-white/90 rounded-xl p-5 mb-6 border border-pink-100 shadow-sm">
      <div className="flex justify-between mb-3">
        <span className="text-blue-900 font-medium">Product Price:</span>
        <span className="text-blue-900 font-bold">${price}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-blue-900 font-medium">Commission (8%):</span>
        <span className="text-pink-600 font-bold text-lg">${commission}</span>
      </div>
    </div>
    <button className="bg-gradient-to-r from-pink-400 via-pink-500 to-blue-600 hover:opacity-90 transition text-white w-full py-3 rounded-lg text-md font-semibold flex items-center justify-center gap-3 mb-4 shadow-md">
      <ExternalLink className="w-5 h-5" />
      Generate Link
    </button>
    <button className="w-full border border-blue-400 text-blue-600 flex items-center justify-center gap-2 rounded-lg py-3 text-md font-semibold mb-4 hover:bg-blue-100 transition">
      <svg className="w-5 h-5" /> View on Amazon
    </button>
    <button className="w-full border border-pink-500 text-pink-600 flex items-center justify-center gap-2 rounded-lg py-3 text-md font-semibold bg-white hover:bg-pink-50 transition">
      <svg className="w-5 h-5" /> Add to Favorites
    </button>
  </div>
);

export default CommissionCard;
