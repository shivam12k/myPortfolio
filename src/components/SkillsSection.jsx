import Section from "./Section";
import SkillCard from "./SkillCard";
import skillsData from "./data/SkillsData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const SkillSet = () => {
  const scrollRef = useRef();
  const scrollCardRef = useRef();

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "bottom bottom",
        end: "top 20%",
        scrub: true,
      },
    });

    timeline.from(scrollRef.current, {
        duration: 0.5,
        x: -300,
        y: -200,
        scale: 1,
        ease: "power1.inOut",
        stagger: 0.2, // Stagger the animation for each box
    });

    // const boxes = gsap.utils.toArray(scrollCardRef.current.children);
    // boxes.forEach((box) => {
      timeline.from(scrollCardRef.current, {
        duration: 0.5,
        x: -500,
        scale: 1,
        ease: "power1.inOut",
        stagger: 0.8,
      });
    // });
  }, []);

  return (
    <Section
      className="pt-[2rem] -mt-[0.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      id="skills"
    >
      <div className="w-full container flex flex-col justify-center">
        <div
          ref={scrollRef}
          className="text-[40px] font-black text-center text-sky-500 underline decoration-dashed underline-offset-8"
        >
          Skill Set
        </div>
        <div
          ref={scrollCardRef}
          className="container w-full md:w-[80em] flex flex-col md:flex-row lg:flex-row justify-center xl:flex-row xl:pr-[-5em] pt-10 gap-10"
        >
          {skillsData.map((data, key) => (
            <SkillCard key={key} data={data} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SkillSet;
