import React from 'react';
import NavBar from "./components/NavBar";
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Planner from './components/Planner';
import SkillSet from './components/SkillsSection';
import Projects from './components/Projects';

const App = () => {
 
  return (
 
      <div className="">
        
        <NavBar className="z-10" /> 
        <Hero/>
        <About/>
       <SkillSet/>
        <Planner/>
        <Projects/>
        <Footer/>
       
      </div>
    
  );
};

export default App;
