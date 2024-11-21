// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuLinks } from './Navbar';

const ResponsiveMenu = ({ showMenu }) => {
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    navigate(link, { replace: true });
    setTimeout(() => {
      window.scrollTo(0, 0);
      window.location.reload();
    }, 0);
  };

  return (
    <div
     className={`${showMenu? "left-0" : "left-[-100%]"}
     fixed top-0  w-[75%] transition-all duration-300
     shadow-md pt-16 px-8 bg-white z-50 flex flex-col justify-between pb-4 `}
    >
      <div className='card'>
        <nav className=''>
          <ul className='space-y-4 text-base'>
            {MenuLinks.map(({ id, name, link }) => (
              <li key={id}>
                <span 
                  onClick={() => handleLinkClick(link)} 
                  className='mb-4 inline-block cursor-pointer'
                >
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div></div>
    </div>
  );
};

export default ResponsiveMenu;
