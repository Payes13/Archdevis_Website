import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (

    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* THIS WILL BE DISPLAYED ON MOBILE DEVICES */}
      {/* THIS IS THE HAMBURGER MENU */}
      <div className="app__navbar-menu">
        {/* SET IT TO TRUE SO WE CAN OPEN THE MENU */}
        {/* ESTAS SON LAS LINEAS BLANCAS DENTRO DEL CIRCULO AZUL */}
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {/* IF toggle IS true */}
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                // HE DOESN'T ADD THE link- NEXT TO THE item SO HE CAN DIFFERENTIATE THEM FROM THE LINKS ABOVE
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
