// eslint-disable-next-line no-unused-vars
import React from 'react';
import { MenuLinks } from './Navbar';

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
     className={`${showMenu? "left-0" : "left-[-100%]"}
     fixed bottom-0 top-0 w-[75%] transition-all duration-300
     shadow-md pt-16 px-8 bg-white z-50 flex flex-col justify-between pb-4 `}
    >
      <div className='card'>
        {/*Menu Section*/}
        <nav className=''>
          <ul className='space-y-4 text-base'>
            {MenuLinks.map(( { id, name, link }) => {
              return(
                <li key={id}>
                  <a href={link} className='mb-4 inline-block'> {name}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      {/*Footer Section*/}
      <div></div>
    </div>
  );
};

export default ResponsiveMenu;