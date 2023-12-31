import { useState } from 'react';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close, RAlogo } from '../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const currentHash = location.hash.replace('#', '');

  return (
    <nav className={`'${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="max-w-7xl flex items-center justify-between w-full mx-auto">
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={RAlogo} alt={RAlogo} className="object-contain w-16 h-16" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Roch Armengaud <span className="sm:block hidden">3D Portfolio</span>
          </p>
        </a>
        {/* DESKTOP NAVIGATION */}
        <ul className="sm:flex flex-row hidden gap-10 list-none">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${currentHash === link.id ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* MOBILE NAVIGATION */}
        <div className="sm:hidden flex items-center justify-end flex-1">
          <img
            src={toggle ? close : menu}
            alt={menu}
            className="w-[28px] h-(28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="flex flex-col items-start justify-end gap-4 list-none">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${currentHash === link.id ? 'text-white' : 'text-secondary'} font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
