import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  console.log({ toggle });
  
  const handleClickTrue = () => {
    console.log('true');
    setToggle(true)
    console.log('true2');
  }

  const handleClickFalse = () => {
    console.log('false');
    setToggle(false)
    console.log('false2');
  }
 
  return (

    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href='#home'><img src={images.archLogo2} alt="company logo" /></a>
      </div>

      <ul className="app__navbar-links">
        {['home', 'solutions', 'services', 'work', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* THIS WILL BE DISPLAYED ON MOBILE DEVICES */}
      {/* THIS IS THE HAMBURGER MENU */}
      <div className="app__navbar-menu">
        {/* ESTAS SON LAS LINEAS BLANCAS DENTRO DEL CIRCULO AZUL */}
        <HiMenuAlt4 onClick={handleClickTrue} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={handleClickFalse} />

            <ul>
              {['home', 'solutions', 'services', 'work', 'contact'].map((item) => (
                // HE DOESN'T ADD THE link- NEXT TO THE item SO HE CAN DIFFERENTIATE THEM FROM THE LINKS ABOVE
                <li key={item}>
                  <a href={`#${item}`} onClick={handleClickFalse}>
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
