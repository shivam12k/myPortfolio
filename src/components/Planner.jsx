import React from "react";
import Section from "./Section";
import "./planner.css";
import { plannerData } from "./data/planner";

const Planner = () => {
  return (
    <Section
      className="pt-[10rem] -mt-[0.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      id="planner"
    >
      <div className="container relative  flex flex-col justify-center">
        <div className="text-[40px] font-black text-center text-violet-800 underline decoration-dashed underline-offset-8">
          2-Week Plan
        </div>

        {/* roadmap */}
        <div className="roadmap">
          

          {plannerData.map((data) => (
            <div className="point" key={data.id}>
              <div className="point-index">{data.id}</div>
              <div className="point-label text-violet-200 underline  decoration-dashed underline-offset-8">{data.title}</div>
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
