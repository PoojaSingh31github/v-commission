import React from 'react';
import { HelpCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
          <div className="flex items-center gap-2">
            <p className="text-xs sm:text-sm text-gray-700 text-center sm:text-left">
              Copyright © 2025 vCommission. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 hover:text-gray-900 transition-colors">
              <span className="font-medium">Need Help</span>
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
