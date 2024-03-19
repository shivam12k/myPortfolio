import React from "react";
import Typewriter from "typewriter-effect";
const Header = () => {
  return (
    <div className="container w-full h-screen flex flex-row ml-20 mt-10 mb-20 ">
      <div className="w-1/2 h-full text-white text-[40px]">
        <span className="text-[65px] text-amber-400 font-sm">U</span>nlock the
        Secrets
        <br /> of {" "}
        <span className="underline decoration-amber-400/70">Journalism </span>
        <br />
        <span className="text-amber-400">
          <Typewriter
            options={{
              strings: [" with Mr. Arun"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default Header;
