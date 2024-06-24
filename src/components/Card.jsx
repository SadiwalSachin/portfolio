import React from "react";
import { GoArrowRight } from "react-icons/go";

const Card = ({ data }) => {
  const { websiteName, technologyUsed, imageUrl } = data;

  return (
    <>
      <div className="wroks w-full px-[3vh] md:px-[10vh] md:py-[2vh]">
        <div className="w-full md:h-screen h-[30vh] mt-10">
          <div className="image w-full md:h-[90%] bg-blue-300 rounded-2xl overflow-hidden">
            <img className="h-full w-full object-cover" src={imageUrl} alt="" />
          </div>
          <div className="content flex items-center justify-between md:px-[5vh] py-[2vh]">
            <div className="text">
              <h2 className="md:text-[1.4vw] text-[2vh]">{websiteName}</h2>
              <p className="text-xs">{technologyUsed}</p>
            </div>
            <div className="view ">
              <button className="md:px-6 px-[2vh] md:text-[2vh] text-[1.4vh] flex items-center gap-3 md:py-3 py-[1vh] cursor-pointer hover:bg-orange-400 duration-300 hover:px-[4vh] border border-zinc-500 rounded-full">
                View it{" "}
                <span>
                  <GoArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
