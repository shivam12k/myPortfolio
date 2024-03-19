import React from 'react';
import NavBar from "./components/NavBar";
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Footer from './components/Footer';

const App = () => {
  return (
 
      <div className="">
       
        <NavBar className="z-10" /> 
        <Hero/>
        <About/>
        <Courses/>
        <Footer/>
       
      </div>
    
  );
};

export default App;
