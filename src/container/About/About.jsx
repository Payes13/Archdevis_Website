import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import { images } from '../../constants'
import './About.scss';

const about = [
  { title: 'Web development', description: "I am a good web developer", imgUrl: images.about01},
  { title: 'Full stack developer', description: "I am a good full stack developer", imgUrl: images.about02},
  { title: 'MERN stack', description: "I am a good MERN stack developer", imgUrl: images.about03},
  { title: 'SAP CPI Developer', description: "I am a good SAP CPI developer", imgUrl: images.about04}
];

const About = () => {
  // const [about, setAbout] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "about"]';

  //   client.fetch(query).then((data) => {
  //     setAbout(data);
  //   });
  // }, []);

  return (

    <>
      <h2 className="head-text">We Know that <span>Good Development</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {about.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          
          </motion.div>
        ))}
      </div>
    </>
  )
}

// about IS THE id
// BEFORE EXPORTING THE About COMPONENT WE ARE GOING TO CALL THE AppWrap HOC
// EL COMPONENTE QUE LE PASO A AppWrap ES MotionWrap
export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');