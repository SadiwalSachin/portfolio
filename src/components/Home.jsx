import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import WorkCard from "./WorkCard";
import MainImage from "../assets/MainImage.jpg"

const Home = () => {
  return (
    <>
      <div className="w-full md:px-18 md:py-[5vw] md:p-[5vh] p-[4vh] flex md:flex-row flex-col-reverse">
        <div className="left md:w-1/2 md:px-[4vw] md:py-[3vh]">
          <ul className="flex">
            <a className="md:ml-1 md:text-[4vh] text-[3vh]" href="">
              <IoLogoInstagram />
            </a>
            <a className="md:ml-4 ml-[2vh] md:text-[4vh] text-[3vh]" href="">
              <FaFacebookSquare />
            </a>
            <a className="md:ml-4 ml-[2vh] md:text-[4vh] text-[3vh]" href="">
              <FaXTwitter />
            </a>
            <a className="md:ml-4 ml-[2vh] md:text-[4vh] text-[3vh]" href="">
              <IoLogoLinkedin />
            </a>
          </ul>
          <h1 className="mt-[3vh] md:text-[5vw] text-[6.6vh] leading-[6.5vh] md:leading-[5vw] tracking-tighter">
            Hey there !!!! , It's Sachin Sadiwal
          </h1>
          <p className="mt-[3vh] text-[2vh]">
            Hello! I'm Sachin Sadiwal, a passionate Full Stack Web Developer
            dedicated to crafting seamless, efficient, and visually stunning web
            applications. With expertise in both front-end and back-end
            development, I bring your ideas to life with a blend of creativity
            and technical precision.
          </p>
          <div className="buttons mt-[5vh] flex gap-[5vh] md:gap-5">
            <Link
              to="/contact"
              className="md:px-[2vw] px-[2vh] py-2 border border-zinc-600 rounded-full flex items-center gap-2 bg-orange-400 md:text-[3vh] text-white"
            >
              Say Hello
              <span className="md:text-[3vh] mt-1">
                <GoArrowRight />
              </span>
            </Link>
            <button className="px-5 py-2 border border-zinc-600 rounded-full">
              My Portfolio
            </button>
          </div>
        </div>
        <div className="right md:w-1/2 md:h-0 h-1/2 p-[1vh] w-full md:px-[4vw] mt-4 md:mb-0 mb-5 rounded-md overflow-hidden flex  justify-center">
          <div className=" overflow-hidden rounded-xl w-full h-full md:w-3/4 md:h-3/4  bg-red-500">
            <img
              className="w-full h-full object-center"
              src={MainImage}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="latestWork w-full min-h-screen bg-red-200 md:px-24 md:p-[5vh] p-[4vh]">
        <h1 className="md:text-[2.4vw] text-[4vh]">Explore My Lastes Work</h1>
        <div className="work w-full min-h-screen mt-[3vh] md:mt-[5vw] md:flex-row flex-col flex md:items-start gap-y-[3vh] md:flex-wrap justify-start md:justify-between md:px-0">
          <WorkCard/>
          <WorkCard/>
          <WorkCard/>
          <WorkCard/>

        </div>
      </div>
    </>
  );
};

export default Home;
