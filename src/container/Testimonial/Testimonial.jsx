import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants'

import './Testimonial.scss';

const testimonials = [
  {name: 'Alexander', company: 'Microsoft', feedback: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum corporis ab voluptates odio voluptatibus ipsam illo harum amet esse, nihil incidunt ratione perferendis magni aliquam, perspiciatis ipsa, quibusdam eveniet veniam.', imgurl: images.javascript},
  {name: 'Sarah', company: 'Google', feedback: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum corporis ab voluptates odio voluptatibus ipsam illo harum amet esse, nihil incidunt ratione perferendis magni aliquam, perspiciatis ipsa, quibusdam eveniet veniam.', imgurl: images.html},
  {name: 'Micael', company: 'Amazon Web Services', feedback: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum corporis ab voluptates odio voluptatibus ipsam illo harum amet esse, nihil incidunt ratione perferendis magni aliquam, perspiciatis ipsa, quibusdam eveniet veniam.', imgurl: images.css},
]

const brands = [
  {name: 'New Balance', imgUrl: images.nb},
  {name: 'Skype', imgUrl: images.skype},
  {name: 'Spotify', imgUrl: images.spotify},
  {name: 'Amazon', imgUrl: images.amazon},
]

const Testimonial = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  // const [testimonials, setTestimonials] = useState([]);
  // const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].imgurl} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>

          <div className="app__testimonial-brands app__flex">
            {brands.map((brand) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, type: 'tween' }}
                key={brand._id}
              >
                <img src={brand.imgUrl} alt={brand.name} />
              </motion.div>
            ))}
          </div>
          
        </>
      )}

    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);