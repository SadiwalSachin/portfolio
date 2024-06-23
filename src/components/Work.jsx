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
            imageUrl:Work1
        },
        {
            websiteName:"Ochi React",
            technologyUsed:"React js , framer motion",
            imageUrl:Work2
        },
        {
            websiteName:"lazerv.io",
            technologyUsed:"html css js gsap scrolltrigger",
            imageUrl:Work3
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
