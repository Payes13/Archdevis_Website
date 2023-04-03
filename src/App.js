import React from 'react';

import { Services, Footer, Header, Solutions, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {

  return (
    
    <div className='app'>
      <Navbar />
      <Header />
      <Services />
      <Work />
      <Solutions />
      <Footer />
    </div>
  );
}

export default App;