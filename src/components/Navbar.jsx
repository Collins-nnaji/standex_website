import React, { useState, useEffect } from 'react';
import Logo from "../assets/website/logo.svg";
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    navigate(link, { replace: true });
    setTimeout(() => {
      window.scrollTo(0, 0);
      window.location.reload();
    }, 0);  // Ensure scroll-to-top with instant reload
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 bg-white z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className='container py-3 md:py-2'>
          <div className='flex justify-between items-center'>
            <div>
              <Link to="/">
                <img src={Logo} alt="Logo" className='w-32' />
              </Link>
            </div>
            <div className='hidden md:block'>
              <ul className='flex items-center gap-8'>
                {MenuLinks.map(({ id, name, link }) => (
                  <li key={id} className='cursor-pointer py-4'>
                    <span
                      onClick={() => handleLinkClick(link)}
                      className='text-xl font-semibold hover:text-primary py-2 
                      hover:border-b-2 hover:border-primary transition-all 
                      duration-300'
                    >
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex items-center gap-4 md:hidden'>
              {showMenu ? (
                <HiMenuAlt1 className='text-2xl cursor-pointer' onClick={toggleMenu} />
              ) : (
                <HiMenuAlt3 className='text-2xl cursor-pointer' onClick={toggleMenu} />
              )}
            </div>
          </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} />
      </nav>
      <div className="h-16 md:h-14"></div>
    </>
  );
};

export default Navbar;