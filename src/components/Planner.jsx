import React from "react";
import Section from "./Section";
import "./planner.css";
import { plannerData } from "./data/planner";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Planner = () => {
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

    timeline.from(scrollRef.current, {
        duration: 0.5,
        x: -300,
        y: -200,
        scale: 1,
        ease: "power1.inOut",
        stagger: 0.2, 
    });

   
  
  }, []);
  return (
    <Section
      className="pt-[10rem] -mt-[0.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      id="education"
    >
      <div className="container relative  flex flex-col justify-center">
        <div   ref={scrollRef} className="text-[40px] font-black text-center text-sky-600 underline decoration-dashed underline-offset-8">
         Education
        </div>

        {/* roadmap */}
        <div className="roadmap">
          

          {plannerData.map((data) => (
            <div className="point" key={data.id}>
              <div className="point-index ">{data.id}</div>
              <div className="point-label text-sky-200 underline my-4 decoration-dashed underline-offset-8 ">{data.title}</div>
              <div className="point-text">
                <ul>
                  <li>{data.discription[0]}</li>
                  <li>{data.discription[1]}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Planner;
