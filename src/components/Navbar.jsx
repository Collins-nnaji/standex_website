// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Logo from "../assets/website/logo.svg";
import { Link } from 'react-router-dom';
import ResponsiveMenu from './ResponsiveMenu';  
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';

export const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Tech Elevate",
    link: "/Tech-Elevate",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // Make the navbar visible when scrolling up or at the top
      setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 bg-white z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className='container mx-auto py-3 md:py-2 px-4'>
          <div className='flex justify-between items-center'>
            {/* Logo Section */}
            <div>
              <Link to="/">
                <img src={Logo} alt="Logo" className='w-32' />
              </Link>
            </div>
            {/* Desktop NavLinks Section */}
            <div className='hidden md:block'>
              <ul className='flex items-center gap-8'>
                {MenuLinks.map(({ id, name, link }) => (
                  <li key={id} className='cursor-pointer py-4'>
                    <Link
                      to={link}
                      className='text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-all duration-300'
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Mobile View */}
            <div className='flex items-center gap-4 md:hidden'>
              {showMenu ? (
                <HiMenuAlt1
                  className='text-2xl cursor-pointer'
                  onClick={toggleMenu}
                />
              ) : (
                <HiMenuAlt3
                  className='text-2xl cursor-pointer'
                  onClick={toggleMenu}
                />
              )}
            </div>
          </div>
        </div>
        {/* Mobile NavLinks Section */}
        <ResponsiveMenu showMenu={showMenu} />
      </nav>
      <div className="h-16 md:h-14"></div>
    </>
  );
};

export default Navbar;
