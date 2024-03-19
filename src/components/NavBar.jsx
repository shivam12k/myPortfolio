import { useState } from "react";
import { navlist } from "./data/navList";
import {Link} from 'react-scroll';
import "./navBar.css";
const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
 
  return (
    <nav
      className={`bg-transparent flixed  top-0 z-50 backdrop-blur-sm border-b lg:pb-2 border-n-6 lg:border-n-8/90 lg:backdrop-blur-sm`}
    >
      <div className="max-w-screen-xl flex flex-col items-center justify-between mx-auto p-4">
        <div className="flex items-center font-semibold text-[30px] text-white">
          <span>
            {" "}
            <span className="text-violet-500">Mr.</span> Arun
          </span>

          {/* Hamburger */}
          <span className="absolute right-4 lg:hidden ml-auto">
            <input
              id="checkbox"
              type="checkbox"
              onChange={() => setOpenNav(!openNav)}
            />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </span>


        </div>

        <div
          className={` ${
            openNav ? "flex " : "hidden"
        }   md:flex-row max-w-screen-xl lg:static lg:flex  items-center justify-between mx-auto p-4  md:w-auto navbar-default`}
        >
         <div>
           <ul className="font-medium flex flex-col justify-center p-4 md:p-0 mt-4  text-white rounded-lg md:flex-row md:space-x-8 md:justify-center rtl:space-x-reverse">
            {navlist.map(
              (
                el,
                index // Added return statement here
              ) => (
                <li key={index} className="my-1">
                  <button
                    className="smky-btn3 relative hover:text-white py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all 
                  hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20]
                   after:bg-violet-500/60 after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600 "
                  >
                  <Link to={el.id} spy={true} smooth={true} offset={50} duration={500}> {el.name}</Link>
                  </button>
                </li>
              )
            )}
          </ul>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
