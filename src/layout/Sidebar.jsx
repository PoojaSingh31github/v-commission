import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Minus, Plus, X } from "lucide-react";
import india from "../assets/india.jpg"
import setting from "../assets/setting.jpg"
import us from "../assets/us.jpg"

const Sidebar = ({ onMenuClick }) => {
  const location = useLocation();

  const [sections, setSections] = useState([
    {
      id: "amazon",
      title: "Amazon",
      iconClass: us, // <-- added class for icon
      isOpen: true,
      items: [
        { label: "Dashboard", path: "/amazon/dashboard" },
        { label: "Products", path: "/amazon/products" },
        { label: "Brands", path: "/amazon/brands" },
        { label: "My Links", path: "/amazon/my-links" },
        { label: "My Favourite", path: "/amazon/my-favourite" },
        { label: "Orders", path: "/amazon/orders" },
        { label: "Reports", path: "/amazon/reports" },
      ],
    },
    {
      id: "d2c",
      title: "D2C Ecom",
      iconClass: india, // <-- updated
      isOpen: false,
      items: [
        { label: "Dashboard", path: "/d2c/dashboard" },
        { label: "Products", path: "/d2c/products" },
        { label: "Brands", path: "/d2c/brands" },
        { label: "My Links", path: "/d2c/my-links" },
        { label: "My Favourite", path: "/d2c/my-favourite" },
        { label: "Orders", path: "/d2c/orders" },
        { label: "Reports", path: "/d2c/reports" },
      ],
    },
    {
      id: "integration",
      title: "Integration",
      iconClass: setting, // <-- replaced ⚙️ with icon class
      isOpen: false,
      items: [
        { label: "Postback", path: "/integration/postback" },
        { label: "Facebook", path: "/integration/facebook" },
        { label: "Google Ads", path: "/integration/googleads" },
      ],
    },
  ]);

  const toggleSection = (id) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === id ? { ...section, isOpen: !section.isOpen } : section
      )
    );
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="h-screen bg-pink-200 overflow-y-auto rounded-tr-4xl rounded-br-4xl shadow-md">
      <div className="p-4 flex justify-between items-center">
        <Link to="/" className="block">
          <img
            src="https://azaffiliates-dashboard-dev.web.app/assets/images/logo/1.png"
            alt="logo"
            className="max-w-36"
          />
        </Link>
        <X
          onClick={onMenuClick}
          className="md:hidden  w-6 h-6 text-gray-400 transition-all duration-300 mr-4 cursor-pointer"
        />
      </div>

      <div className="space-y-2 px-4">
        {sections.map((section) => (
          <div key={section.id} className="mb-2">
            <button
              onClick={() => toggleSection(section.id)}
              className={`w-full cursor-pointer flex items-center justify-between px-3 py-1 rounded-lg transition-all duration-300 ${
                section.isOpen
                  ? "bg-[#80b415] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <img  className="md:w-7 md:h-7  w-5 h-5 rounded-full" src={section.iconClass} alt="" />
                <span className="font-semibold">{section.title}</span>
              </div>
              {section.isOpen ? (
                <Minus className="w-3 h-3 transition-transform" />
              ) : (
                <Plus className="w-3 h-3 transition-transform" />
              )}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                section.isOpen
                  ? "max-h-96 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="space-y-1 pl-4">
                {section.items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`w-full text-sm flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? "text-[#80b415] font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full border-2 ${
                        isActive(item.path)
                          ? "border-[#80b415] bg-[#80b415]"
                          : "border-gray-400"
                      }`}
                    ></span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
