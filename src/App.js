import './App.css';
import React from 'react';

//Components
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import About1 from './components/About1';
import About2 from './components/About2';
import Round from './components/Round'
import Bartender from './components/Bartender';
import Subscription from './components/Subscription';
import Videos from './components/Videos';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <About1 />
      <About2 />
      <Round />
      <Bartender />
      <Videos />
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
