import React, { useState } from "react";
import { Menu, Bell, X  } from "lucide-react";

const Header = ({
  onMenuClick,
  userAvatar = "https://azaffiliates-dashboard-dev.web.app/assets/images/logo/logo2.png",
  userName = "User",
  notificationCount = 0,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
      {/* Menu Button */}
      <button
        onClick={onMenuClick}
        className="p-2 rounded-xl cursor-pointer bg-gray-100 hover:bg-gray-200 transition-all"
        aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      <div className="flex items-center gap-4 ml-auto">
        {/* Notification */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-xl hover:bg-gray-100 transition-all relative"
            aria-label="Notifications"
          >
            <Bell className="w-6 h-6 text-gray-700 cursor-pointer" />
            {notificationCount > 0 && (
              <span className="absolute  top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
            )}
          </button>
        </div>

        {/* User Avatar */}
        <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img
            src={userAvatar}
            alt={userName}
            className="w-10 cursor-pointer h-10 rounded-xl border-2 border-teal-400 object-cover"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
