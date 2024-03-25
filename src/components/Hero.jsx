import Section from "./Section";
import RepoterImg from "../assets/repoterc.png";
import { motion } from "framer-motion";
import { slideAnimation } from "../config/motion";
import Spline from '@splinetool/react-spline';
const Hero = () => {
  return (
    <Section
      className="pt-[6rem] -mt-[0.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative flex flex-col md:flex-row md:py-[-10em]">
        <motion.div
          {...slideAnimation("up")}
          className="lg:w-[40em] w-[60] h-[25em]   relative   rounded-full"
        >
          <Spline  className="rounded-full" scene="https://prod.spline.design/fagOyRDplcNuY5Vh/scene.splinecode" />
          {/* <img
            className="grayscale lg:w-[80em] md:w-[40em] w-full "
            src={RepoterImg}
            alt="Reporter Image"
            // style={{ marginTop: "-6rem" }}
          /> */}

        </motion.div>
        <motion.div
          {...slideAnimation("right")}
          className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-[20rem] lg:mb-[6rem] "
        >
          <h1 className="h1 mb-6">
            Welcome to my <span className="text-sky-500"> portfolio!</span>{" "}
            <p className="text-[0.4em] text-sky-200 leading-6 mt-4">
              Here, we showcase our expertise, creativity, and passion in
              various projects and endeavors.
            </p>
          </h1>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
