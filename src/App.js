import React from 'react';

import { Header, Solutions, Services, Work, Contact } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {

  return (
    
    <div className='app'>
      <Navbar />
      <Header />
      <Solutions />
      <Services />
      <Work />
      <Contact />
    </div>
  );
}

export default App;