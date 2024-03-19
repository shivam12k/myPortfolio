import React from "react";
import Section from "./Section";
import Card from "./Card";
 import coursedata from "./data/Coursedata";
const Courses = () => {
  return (
    <Section
      className="pt-[2rem] -mt-[0.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      // customPaddings
      id="course"
    >
      <div className="w-full container flex flex-col justify-center">
        <div className="text-[40px] font-black text-center text-violet-800 underline decoration-dashed underline-offset-8">
          Courses
        </div>
        <div className="container flex flex-col md:flex-row lg:flex-row justify-center xl:flex-row xl:pr-[-10em] pt-10 gap-10">
          {coursedata.map((data, key) => (
            <Card key={key} data={data} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Courses;
