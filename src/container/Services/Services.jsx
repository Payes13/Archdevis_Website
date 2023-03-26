import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import { images } from '../../constants'
import './Services.scss';

// const about = [
//   { title: 'Web development', description: "I am a good web developer", imgUrl: images.archWeb },
//   { title: 'Full stack developer', description: "I am a good full stack developer", imgUrl: images.about02 },
//   { title: 'MERN stack', description: "I am a good MERN stack developer", imgUrl: images.about03 },
//   { title: 'SAP CPI Developer', description: "I am a good SAP CPI developer", imgUrl: images.about04 }
// ];

const Services = () => {
  // const [about, setAbout] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "about"]';

  //   client.fetch(query).then((data) => {
  //     setAbout(data);
  //   });
  // }, []);

  return (

    <>
      <h2 className="head-text" style={{ marginTop: '40px' }}>We Know that <span>Good Development</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {/* {about.map((about, index) => (
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
        ))} */}

        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
        >
          <div className='img-service-container'>
            <img src={images.archWeb} alt="Web development" />
          </div>

          <h2 className="bold-text" style={{ marginTop: 20, marginBottom: 10, textTransform: 'uppercase' }}>Web development</h2>
          <ul className='app__navbar-links'>
            <li>Domain name management</li>
            <li>Website metrics & analytics</li>
            <li>Web maintenance and refactoring</li>
            <li>SEO & ADs</li>
            <li>CI/CD evaluation and services</li>
          </ul>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
        >
          <div className='img-service-container'>
            <img src={images.archSolution} alt="Cloud Solutions" />
          </div>
          
          <h2 className="bold-text" style={{ marginTop: 20, marginBottom: 10, textTransform: 'uppercase' }}>Cloud Solutions</h2>
          <ul className='app__navbar-links'>
            <li>Design, prototype, diagram and cloud development</li>
            <li>Cloud hosting & management (Google GCP & Amazon AWS)</li>
            <li>Integrated solutions within your environments</li>
            <li>ETLs</li>
            <li>Resourcing quote & management</li>
          </ul>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
        >
          <div className='img-service-container'>
            <img src={images.archMobile} alt="Mobile development" />
          </div>

          <h2 className="bold-text" style={{ marginTop: 20, marginBottom: 10, textTransform: 'uppercase' }}>Mobile development</h2>
          <ul className='app__navbar-links'>
            <li>Android & IOs</li>
            <li>Design and development of Apps</li>
            <li>Expand your business</li>
          </ul>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
        >
          <div className='img-service-container'>
            <img src={images.archDesktop} alt="Desktop development" />
          </div>
          
          <h2 className="bold-text" style={{ marginTop: 20, marginBottom: 10, textTransform: 'uppercase' }}>Web development</h2>
          <ul className='app__navbar-links'>
            <li>DotNet applications</li>
            <li>Java applications</li>
            <li>Electron applications</li>
          </ul>
        </motion.div>

      </div>
    </>
  )
}

// about IS THE id
// BEFORE EXPORTING THE About COMPONENT WE ARE GOING TO CALL THE AppWrap HOC
// EL COMPONENTE QUE LE PASO A AppWrap ES MotionWrap
export default AppWrap(MotionWrap(Services, 'app__services'), 'services', 'app__whitebg');