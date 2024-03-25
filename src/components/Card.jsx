import "./card.css";
const Card = ({data}) => {
  return (
    <div className="card ">
      <div className="card2">
        <div className="relative mx-4 -mt-2 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-violet-500 to-violet-600">
          <img src="" alt="" />
        </div>
        <div className="p-6">

          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
           {data.Name}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
           {data.discription}
          </p>
          {/* purchace Button */}
         <div className="w-full  flex flex-row-reverse ">
         <div data-tooltip={`Price: ${data.price}`} className="button">
            <div className="button-wrapper">
              <div className="text">Buy Now</div>
              <span className="icon">
                <svg
                  viewBox="0 0 16 16"
                  className="bi bi-cart2"
                  fill="currentColor"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                </svg>
              </span>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
