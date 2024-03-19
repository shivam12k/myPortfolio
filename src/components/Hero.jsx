import React from "react";
import Section from "./Section";
import RepoterImg from '../assets/repoterc.png';
import {motion} from 'framer-motion';
import { slideAnimation } from "../config/motion";
const Hero = () => {
  return (
    <Section
      className="pt-[10rem] -mt-[0.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative flex flex-col md:flex-row md:py-[-10em]">
        <motion.div {...slideAnimation("up")} className="lg:w-[90em] w-[60] relative">
          <img
            className="grayscale lg:w-[80em] md:w-[40em] w-full lg:mt-[-7.5rem]"
            src={RepoterImg}
            alt="Reporter Image"
            // style={{ marginTop: "-6rem" }} 
          />
        </motion.div>
        <motion.div {...slideAnimation("right")} className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-[20rem] lg:mb-[6rem] ">
          <h1 className="h1 mb-6">
            Unlock The secret of <span className="text-violet-700">Journalism</span> <br /> with Mr Arun
            <p className="text-[0.4em] text-violet-600">Join exclusive 2-Week Online Course</p>
          </h1>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
