import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Contact.scss';

const Contact = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    // const contact = {
    //   _type: 'contact',
    //   name: formData.username,
    //   email: formData.email,
    //   message: formData.message,
    // };

    // client.create(contact)
    //   .then(() => {
    //     setLoading(false);
    //     setIsFormSubmitted(true);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (

    <>
      <h2 style={{ marginTop: '35px' }} className="head-text">Take <span>a coffee</span> & chat with us</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:contact@archdevis.com" className="p-text">contact@archdevis.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">+1 (123) 456-7890</a>
        </div>
      </div>

      {!isFormSubmitted ?
        <div className="app__footer-form app__flex">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="app__flex" style={{ marginRight: '10px' }}>
              <input style={{ backgroundColor: 'white' }} className="p-text" type="text" placeholder="Your Company Name" name="username" value={username} onChange={handleChangeInput} />
            </div>
            <div className="app__flex">
              <input style={{ backgroundColor: 'white' }} className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
            </div>
          </div>
          <div>
            <textarea
              className="p-text"
              style={{ backgroundColor: 'white' }}
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>

          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
        :
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      }

    </>
  )
}

export default AppWrap(
  MotionWrap(Contact, 'app__contact'),
  'contact',
  'app__primarybg',
);