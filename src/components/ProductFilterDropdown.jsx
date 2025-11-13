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
        className="py-2 px-7 bg-gradient-to-r from-pink-400 via-pink-500 to-blue-600 text-white font-semibold text-md rounded-lg shadow-lg flex items-center gap-2 hover:from-pink-500 hover:to-blue-700 transition"
        onClick={() => setOpen((o) => !o)}
        type="button"
      >
        Filter <span className="ml-1">▼</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl p-5 z-50 max-h-[70vh] overflow-auto border border-pink-100">
          <div>
            <h4 className="text-base font-semibold mb-2 text-pink-600">Sort By</h4>
            <div className="space-y-1">
              {SORT_OPTIONS.map((opt) => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer text-blue-700">
                  <input
                    type="radio"
                    name="sort"
                    value={opt}
                    checked={sort === opt}
                    onChange={() => setSort(opt)}
                    className="accent-pink-500"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-base font-semibold mb-2 text-pink-600">Geo</h4>
            <div className="space-y-1">
              {GEO_OPTIONS.map((g) => (
                <label key={g} className="flex items-center gap-2 cursor-pointer text-blue-700">
                  <input
                    type="radio"
                    name="geo"
                    value={g}
                    checked={geo === g}
                    onChange={() => setGeo(g)}
                    className="accent-pink-500"
                  />
                  <span>{g}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-base font-semibold mb-2 text-pink-600">Store</h4>
            <div className="space-y-1">
              {STORE_OPTIONS.map((s) => (
                <label key={s} className="flex items-center gap-2 cursor-pointer text-blue-700">
                  <input
                    type="radio"
                    name="store"
                    value={s}
                    checked={store === s}
                    onChange={() => setStore(s)}
                    className="accent-pink-500"
                  />
                  <span>{s}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-base font-semibold mb-2 text-pink-600">Categories</h4>
            <div className="max-h-32 overflow-y-auto pr-1 space-y-1">
              {CATEGORY_OPTIONS.map((cat) => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer text-blue-700">
                  <input
                    type="checkbox"
                    value={cat}
                    checked={categories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                    className="accent-pink-500"
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <button
              className="text-pink-500 py-1 px-2 font-bold hover:underline"
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
              className="h-10 px-5 bg-gradient-to-r from-pink-400 via-pink-500 to-blue-600 hover:opacity-90 transition text-white font-semibold rounded-lg"
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
