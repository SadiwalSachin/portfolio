import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const About = () => {
  const frontendSkills = [
    {
      skillName: "HTML",
      logo: <FaHtml5 />,
    },
    {
      skillName: "CSS",
      logo: <IoLogoCss3 />,
    },
    {
      skillName: "Javascript",
      logo: <SiJavascript />,
    },
    {
      skillName: "Ract js",
      logo: <FaReact />,
    },
    {
      skillName: "Tailwind",
      logo: <RiTailwindCssFill />,
    },
  ];

  const BackendSkills = [
    {
      skillName: "Node Js",
      logo: <TbBrandNodejs />,
    },
    {
      skillName: "MonogDB",
      logo: <FaDatabase />,
    },
    {
      skillName: "Express",
      logo: <SiExpress />,
    },
  ];

  return (
    <>
      <div className="w-full  md:px-18 py-[3vh] ">
        <div className="headings px-3">
          <h1 className="text-center md:text-[3vw] text-[4vh] font-semibold text-orange-300">
            About Me
          </h1>
          <p className="text-center">
            My Self Sachin Sadiwal I am full satck web developer always ready to
            learn new things very passionate about my work
          </p>
        </div>
        <div className="skills w-full h-[50%] border-t-2 mt-3 flex md:flex-row flex-col md:px-[10vw] ">
          <div className="frontend px-[3vh] py-[4vh] md:w-1/2">
            <h2 className="mb-5 ml-2 text-[2vh] md:text-[1.4vw]">Frontend -</h2>
            {frontendSkills.map((item, index) => (
              <span
                key={index}
                className="cursor-pointer hover:bg-orange-400 duration-300 hover:px-[1vh] border flex px-[2vh] items-center w-[50%] md:w-[20vh] border-zinc-500 justify-around rounded-full mt-3 py-[1vh]"
              >
                <h2>{item.skillName}</h2>
                {item.logo}
              </span>
            ))}
          </div>
          <div className="frontend px-[3vh] py-[4vh] ">
            <h2 className="mb-5 ml-2 text-[2vh]  md:text-[1.4vw]">Backend -</h2>
            {BackendSkills.map((item, index) => (
              <span
                key={index}
                className="cursor-pointer hover:bg-orange-400 duration-300 hover:px-[1vh] border flex px-[2vh] mt-3 items-center w-[50%] md:w-[20vh] justify-around border-zinc-500 rounded-full py-[1vh]"
              >
                <h2>{item.skillName}</h2>
                {item.logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
