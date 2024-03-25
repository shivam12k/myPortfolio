import React, { useEffect, useState } from "react";
import Section from "./Section";
import Card from "./Card";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://script.googleusercontent.com/macros/echo?user_content_key=DZ1Z4x-GbMKPa4g6svPnkRq8FPwV3U49SFwZflUlya33ftdIiprU9TeU7gQ5Z00xZoYi4p_tzdbSJJwmkOnM-zAgL9NPi1BFm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCs6Q7116h9rJayWXPAYORAPxxCRKr-XEtYztlu3WoZ9hYySul-SZME6VSBAb_z0_GBrc3f_N-sDS34HvNmJ-ySv2mEkBdx3kg&lib=MM1tFzC7m7pM3sLj-hvQDsmszxFkyBayN")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCourses(data.data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <Section
      className="pt-[2rem] -mt-[0.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      id="course"
    >
      <div className="w-full container flex flex-col justify-center">
        <div className="text-[40px] font-black text-center text-sky-500 underline decoration-dashed underline-offset-8">
          Projects
        </div>
        <div className="container grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:pr-[-10em] pt-10 md:pl-[12em] gap-10">
          {courses.map((data, key) => (
            <Card key={key} data={data} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Courses;
