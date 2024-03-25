import Section from "./Section";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const scrollRef = useRef();

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "bottom bottom",
        end: "top 20%",
        scrub: true,
      },
    });

    const box = scrollRef.current;

    timeline.from(box, {
      duration: 0.5,
      x: -230,
      y: -230,
      scale: 1,
      ease: "power1.inOut",
      stagger: 0.2, // Stagger the animation for each box
    });
  }, []);

  useGSAP(() => {
    gsap.to("#text", {
      opacity: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#text",
        start: "bottom bottom",
        end: "top 20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <Section
      className="pt-[9rem] -mt-[0.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      id="about"
    >
      <div className="container flex flex-col md:flex-row md:py-[-20em] md:items-center relative">
        <div
          ref={scrollRef}
          id="about-text"
          className="lg:w-1/3 mb-10 lg:mr-[10em] lg:ml-[10em] md:items-center text-center md:text-start text-[30px]  font-black tracking-wide text-sky-600 underline decoration-dashed underline-offset-8"
        >
          About me
        </div>
        <div className="lg:w-1/2 h-full text-center md:text-start ">
          <p
            id="text"
            className="mb-3 opacity-0 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start"
          >
            Meet me, Shivam, Passionate and driven individual with a solid
            background in Electronics and Telecommunication from Kalinga
            Institute of Industrial Technology. Skilled in, Web development, API
            integrations. Proficient in React.js, Python, and IoT technologies.
            A proactive problem-solver, adept collaborator, and committed to
            leveraging technology for positive impact.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
