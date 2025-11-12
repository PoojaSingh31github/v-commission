import { ExternalLink } from "lucide-react";

const CommissionCard = ({ price, commission }) => (
  <div className="bg-white rounded-2xl shadow p-4 mb-4">
    <h2 className="text-lg font-semibold text-gray-600 mb-4">Amazon Commission Details</h2>
    <div className="bg-gray-50 rounded-xl p-4 mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-[#223355] font-medium text-md">Product Price:</span>
        <span className="text-[#223355] font-bold text-md">${price}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-[#223355] font-medium text-md">Commission (8%):</span>
        <span className="text-[#8bc34a] font-semibold text-lg">${commission}</span>
      </div>
    </div>
    <button className="bg-[#8bc34a] hover:bg-[#689f38] transition text-white w-full py-2 rounded-lg text-md font-semibold flex items-center justify-center gap-2 mb-3">
      <ExternalLink className="w-5 h-5" />
      Generate Link
    </button>
    <button className="w-full border border-gray-300 flex items-center justify-center gap-2 rounded-lg py-2 text-md font-semibold text-gray-700 mb-3">
      <svg className="w-5 h-5" />
      View on Amazon
    </button>
    <button className="w-full border border-[#8bc34a] flex items-center justify-center gap-2 rounded-lg py-2 text-md font-semibold text-[#8bc34a] bg-white">
      <svg className="w-5 h-5" />
      Add to Favorites
    </button>
  </div>
);

export default CommissionCard;
