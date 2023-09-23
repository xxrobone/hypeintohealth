import React, { useState } from 'react';
import MenuBtn from '../menuBtn/MenuBtn';

interface NavProps {
  
  children: React.ReactNode;
}

const Nav: React.FC<NavProps> = ({ children }) => {
  const [active, setActive] = useState(false);
  return (
    <nav
      className={`z-50 grid place-content-center transition-all ease-in-out rounded-full px-4`}
    >
      <ul className={`menu ${active ? 'open' : ''} flex justify-end items-center`}>{children}</ul>
      <MenuBtn active={active} setActive={setActive} />
    </nav>
  );
};

export default Nav;

/* 
${
        active ? 'scroll' : ''
      }
*/