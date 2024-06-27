import React from "react";
import Card from "./Card";
import Work1 from "../assets/Work1.png";
import Work2 from "../assets/Work2.png"
import Work3 from "../assets/Work3.png"


const Work = () => {

    const work = [
        {
            websiteName:"SundownStudio",
            technologyUsed:"html css js gsap scrolltrigger",
            imageUrl:Work1,
            websiteUrl:"https://sundownclone-project-sachin-sadiwals-projects.vercel.app/"
        },
        {
            websiteName:"Ochi React",
            technologyUsed:"React js , framer motion",
            imageUrl:Work2,
            websiteUrl:""
        },
        {
            websiteName:"lazerv.io",
            technologyUsed:"html css js gsap scrolltrigger",
            imageUrl:Work3,
            websiteUrl:""
        }
    ]

  return (
    <>
      <div className="w-full min-h-screen">
        <h1 className="text-[2vw] text-orange-400 text-center">
          Here are my Works
        </h1>
            {work.map((item,index)=><Card data={item}/>)}
      </div>
    </>
  );
};

export default Work;
