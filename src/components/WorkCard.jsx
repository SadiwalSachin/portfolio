import React from "react";
import { GoArrowRight } from "react-icons/go";


const WorkCard = () => {
  return (
    <>
      <div className="md:w-[76vh] w-full h-[40vh] md:h-[65vh]">
        <div className="w-full h-[78%] bg-red-400 rounded-xl">
          <img src="" alt="" />
        </div>
        <div className="content w-full h-[15%] flex justify-between items-center mt-[1vh] px-[1vw]">
          <div className="info">
            <h2 className="websiteName text-[2.4vh] md:text-[1.4vw]">Energy Saver</h2>
            <p className="text-xs md:mt-3"> Web Design</p>
          </div>
          <div className="button">
            <button className="px-5 py-2 border  border-zinc-500 rounded-full">
              <GoArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
