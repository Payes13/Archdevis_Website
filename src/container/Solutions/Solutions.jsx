import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Solutions.scss";

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

const Solutions = () => {

  return (

    <>
      <h2 className="head-text">Experience our <span>Solutions</span></h2>

      <div className="app__skills-container">
        <motion.div
          className="app__skills-text"
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="head-text" style={{ color: '#313bac', marginBottom: '10px' }}>ARCHDEVIS</h1>
          <p className="p-text" style={{ fontSize: '35px' }}>We are here to help, please let us know how we can help you!</p>
        </motion.div>

        <motion.div
          className="app__skills-img"
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
        >
          <img src={images.archHelp} alt="profile_bg" />
        </motion.div>

      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Solutions, "app__solutions"),
  "solutions",
  "app__whitebg"
);
