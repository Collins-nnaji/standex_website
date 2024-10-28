// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuLinks } from './Navbar';

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${showMenu ? "left-0" : "-left-full"} 
      fixed top-0  w-[75%] transition-all duration-300 
      shadow-md bg-white z-50 flex flex-col justify-between pt-16 px-8 pb-4`}
    >
      <div>
        <ul className="space-y-4 text-base">
          {MenuLinks.map(({ id, name, link }) => (
            <li key={id}>
              <Link
                to={link}
                className="text-lg font-medium hover:text-primary transition-all duration-300"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Optional Footer Section */}
      <div className="text-center text-sm text-gray-500 mt-4">
        <p>&copy; {new Date().getFullYear()} Standex Digital. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
