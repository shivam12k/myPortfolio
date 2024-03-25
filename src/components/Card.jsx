import React from 'react'; // Don't forget to import React when using JSX
import './card.css';

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <div className="card2">
        <div className="relative mx-4 -mt-2 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-violet-500 to-violet-600">
          <img src="" alt="" />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {data.Name}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {data.description}
          </p>
          {/* purchase Button */}
          <div className="w-full flex flex-row-reverse">
          <a type="link" href='${data.GitHub}'  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">view</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
