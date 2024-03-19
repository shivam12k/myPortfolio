import Section from "./Section";

const About = () => {
 
  return (
    <Section
      className="pt-[9rem] -mt-[0.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      // customPaddings
      id="about"
    >
      <div className="container flex flex-col md:flex-row md:py-[-20em] md:items-center relative">
        <div className="lg:w-1/3 mb-10 lg:mr-[10em] lg:ml-[10em] md:items-center text-center md:text-start text-[30px] font-black tracking-wide text-violet-800 underline decoration-dashed underline-offset-8">
          About me
         
        </div>
        <div className="lg:w-1/2 h-full text-center md:text-start ">
          <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
            Meet me, Arun, a seasoned figure in the realm of journalism. With a
            career spanning over three decades, I've had the privilege of
            witnessing the dynamic evolution of the media landscape firsthand.
            From delving into groundbreaking stories to guiding and nurturing
            aspiring journalists, my journey embodies the essence of
            storytelling and underscores the significance of ethical journalism.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
