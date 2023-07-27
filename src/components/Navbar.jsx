import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import ralogo from '../assets/ralogo.png';

const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <nav className={`'${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={ralogo} alt={ralogo} className="w-16 h-16 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Roch Armengaud <span className="sm:block hidden">Front-end developer</span>
          </p>
        </Link>
        {/* DESKTOP NAVIGATION */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* MOBILE NAVIGATION */}
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
