import React from 'react'
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {

  return (
    // <div className="app__header app__flex" id="home">
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <h1 className="head-text" style={{color: '#313bac'}}>ARCHDEVIS</h1>
              <p className="p-text" style={{ fontSize: '15px'}}>is a services-led, software-enabled, IT & Cloud Solutions provider, focused on delivering industry-leading solutions.</p>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text" style={{ fontSize: '20px'}}>We develop websites and more</p>
            <p className="p-text">for you and your business.</p>
            <p className="p-text">contact us to discover our solutions</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-img"
      >
        <img src={images.archHeader} alt="profile_bg" />
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home');