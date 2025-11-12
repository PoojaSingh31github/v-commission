import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex items-center text-gray-600 text-base">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
          {item.href ? (
            <a
              href={item.href}
              className="hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-gray-900 font-medium truncate max-w-md">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
