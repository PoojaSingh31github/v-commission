import React, { useState, useRef, useEffect } from "react";

const SORT_OPTIONS = [
  "Best Sellers",
  "Highest Rated",
  "Newly Added",
  "Highest Commission",
  "Price: Low to High",
  "Price: High to Low",
  "Name (A-Z)",
];

const GEO_OPTIONS = ["United States"];
const STORE_OPTIONS = ["All Stores"];
const CATEGORY_OPTIONS = [
  "Appliances",
  "Arts, Crafts & Sewing",
  "Automotive",
  "Baby",
  "Beauty",
  "Books",
  "Clothing, Shoes & Jewelry",
  "Electronics",
  "Grocery & Gourmet Food",
  "Handmade",
  "Health & Personal Care",
  "Home & Kitchen",
  "Industrial & Scientific",
  "Musical Instruments",
  "Office Products",
  "Patio, Lawn & Garden",
  "Pet Supplies",
  "Sports & Outdoors",
  "Tools & Home Improvement",
  "Toys & Games",
];

function ProductFilterDropdown({ onApply }) {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState(SORT_OPTIONS[0]);
  const [geo, setGeo] = useState(GEO_OPTIONS[0]);
  const [store, setStore] = useState(STORE_OPTIONS[0]);
  const [categories, setCategories] = useState([]);
  const ref = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategoryChange = (cat) => {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleApply = () => {
    onApply({ sort, geo, store, categories });
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        className="h-12 px-7 bg-[#90c51a] hover:bg-[#7DAC15] transition-all text-white font-semibold text-lg rounded-lg shadow-sm flex items-center gap-2"
        onClick={() => setOpen((o) => !o)}
        type="button"
      >
        Filter <span className="ml-1">▼</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl p-5 z-50 max-h-[70vh] overflow-auto border border-gray-100">
          {/* Sort By */}
          <div>
            <h4 className="text-base font-semibold mb-2 text-gray-700">Sort By</h4>
            <div className="space-y-1">
              {SORT_OPTIONS.map((opt) => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sort"
                    value={opt}
                    checked={sort === opt}
                    onChange={() => setSort(opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Geo */}
          <div className="mt-4">
            <h4 className="text-base font-semibold mb-2 text-gray-700">Geo</h4>
            <div className="space-y-1">
              {GEO_OPTIONS.map((g) => (
                <label key={g} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="geo"
                    value={g}
                    checked={geo === g}
                    onChange={() => setGeo(g)}
                  />
                  <span>{g}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Store */}
          <div className="mt-4">
            <h4 className="text-base font-semibold mb-2 text-gray-700">Store</h4>
            <div className="space-y-1">
              {STORE_OPTIONS.map((s) => (
                <label key={s} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="store"
                    value={s}
                    checked={store === s}
                    onChange={() => setStore(s)}
                  />
                  <span>{s}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Categories */}
          <div className="mt-4">
            <h4 className="text-base font-semibold mb-2 text-gray-700">Categories</h4>
            <div className="max-h-32 overflow-y-auto pr-1 space-y-1">
              {CATEGORY_OPTIONS.map((cat) => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    value={cat}
                    checked={categories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Footer */}
          <div className="flex items-center justify-between mt-6">
            <button
              className="text-[#90c51a] py-1 px-2 font-bold"
              onClick={() => {
                setSort(SORT_OPTIONS[0]);
                setGeo(GEO_OPTIONS[0]);
                setStore(STORE_OPTIONS[0]);
                setCategories([]);
              }}
            >
              Clear all
            </button>
            <button
              className="h-10 px-5 bg-[#90c51a] hover:bg-[#7DAC15] transition-all text-white font-semibold rounded-lg"
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductFilterDropdown;
