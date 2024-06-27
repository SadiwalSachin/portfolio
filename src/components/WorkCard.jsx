import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";


const WorkCard = ({data, key}) => {

  const {websiteName , technologyUsed , imageUrl , websiteUrl} = data

  return (
    <>
      <div className="md:w-[76vh] w-full h-[30vh]  bg-red md:h-[65vh]">
        <div className="w-full overflow-hidden  rounded-xl">
          <img className="h-full w-full object-cover" src={imageUrl} alt="" />
        </div>
        <div className="content w-full h-[15%] flex justify-between items-center mt-[1vh] px-[1vw]">
          <div className="info">
            <h2 className="websiteName text-[2.4vh] md:text-[1.4vw]">{websiteName}</h2>
            <p className="text-xs md:mt-3">{technologyUsed}</p>
          </div>
          <div className="button">
            <Link to={websiteUrl} className="px-5 py-2 border  border-zinc-500 rounded-full">
              <GoArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
