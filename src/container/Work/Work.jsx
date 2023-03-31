import React, { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants'

import './Work.scss';

const works = [
  { title: 'Modern UI/UX Website', description: 'A modern UI/UX Portfolio Website', projectLink: "http://www.bakatattoo.com", codeLink: 'http://www.google.com', imgUrl: images.archWork, name: 'Web development', tags: ['Websites']},
  { title: 'Modern UI/UX Website', description: 'A modern UI/UX Portfolio Website', projectLink: "http://www.stoneartmtl.com", codeLink: 'http://www.google.com', imgUrl: images.about04, name: 'Web development', tags: 'React JS'},
  { title: 'Cool Mobile App', description: 'Tinder Clone in React Native', projectLink: "http://www.stoneartmtl.com", codeLink: 'http://www.google.com', imgUrl: images.about02, name: 'Web development', tags: 'Mobile App'},
  { title: 'Cool Mobile App', description: 'Tinder Clone in React Native', projectLink: "http://www.stoneartmtl.com", codeLink: 'http://www.google.com', imgUrl: images.about03, name: 'Web development', tags: ['UI/UX', ' Mobile App']},
];

const Work = () => {

  // const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState(works);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        // I WANT TO KEEP THEM ONLY IF THIS IS true work.tags.includes(item)
        setFilterWork(works.filter((work) => work.tags.includes(item)));        
      }
    }, 500);
  };

  return (
    
    <>
      <h2 className="head-text" style={{marginTop: '30px'}}>Our <span>Portfolio</span> Section</h2>
      <h2 className="head-text"><span>Contact us </span>to Start Building Your Solution</h2>

      <div className="app__work-filter">
        {['UI/UX', 'Websites', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              {/* OVERLAY ICONS */}
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                
              </motion.div>

            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags}</p>
              </div>
            </div>

          </div>
        ))}
        
      </motion.div>

    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
);