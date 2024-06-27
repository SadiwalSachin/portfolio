import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const handleMobileMenu = ()=>{

    setOpenMobileNav((prev)=>!prev)
  }

  
  return (
    <nav  className="w-full py-6 md:px-18 p-[5vh] px-[4vh] flex items-center justify-between border-b-[1px] border-zinc-300 relative">
      <div className="logo-and-menubar flex items-center">
        <span onClick={handleMobileMenu} className={`menu-bar ${openMobileNav ?"hidden" : "block"} sm:hidden mr-4 text-2xl cursor-pointer`}>
        <RiMenu3Line />
        </span>
        <h2 className="logo font-semibold text-2xl uppercase">sachin</h2>
      </div>
      <div className="nav-part1 md:flex items-center gap-[3vw] hidden sm:flex">
        <NavLink style={(e)=>{
          return {
            color : e.isActive ? "orange" : ""
          }
        }} className="text-base" to="/">
          Home
        </NavLink>
        <NavLink style={(e)=>{
          return {
            color : e.isActive ? "orange" : ""
          }
        }} className="text-base" to="/about">
          About
        </NavLink>
        <NavLink style={(e)=>{
          return {
            color : e.isActive ? "orange" : ""
          }
        }} className="text-base" to="/work">
          Works
        </NavLink>
        {/* <NavLink className="text-base" href="">
          Services
        </NavLink> */}
        <NavLink style={(e)=>{
          return {
            color : e.isActive ? "orange" : ""
          }
        }} className="text-base" to="/contact">
          Contact
        </NavLink>
      </div>
      <div className="nav-part2">
        <button className="border md:px-4 px-2 py-1 rounded-full text-md border-zinc-400 flex items-center md:gap-2 gap-[3px]">
          Lets talk{" "}
          <span className="mt-[3px]">
            <GoArrowRight />
          </span>
        </button>
      </div>
      <div onClick={()=>handleMobileMenu(false)} className={`mobile-navigation absolute z-[1] duration-300 ease-linear bg-zinc-100  top-[0] left-0 w-full sm:hidden ${openMobileNav ? "block h-[46vh]" :"hidden"}`}>
        <span onClick={handleMobileMenu} className={`cross ${!openMobileNav ?"hidden" : "block"} md:hidden absolute z-[2] text-3xl hover:text-[35px] duration-300 top-7 left-6`}>
          <RxCross2 />
        </span>
        <div onClick={handleMobileMenu} className="nav-links flex flex-col gap-3 px-6 z-[2] absolute bottom-10">
          <NavLink  className="text-2xl hover:text-[27px] duration-300 text-black" to="/">
            Home
          </NavLink>
          <NavLink className="text-2xl hover:text-[27px] duration-300 " to="/about">
            About
          </NavLink>
          <NavLink className="text-2xl hover:text-[27px] duration-300 " to="/work">
            Works
          </NavLink>
          {/* <NavLink className="text-2xl hover:text-[27px] duration-300 " href="">
            Services
          </NavLink> */}
          <NavLink className="text-2xl hover:text-[27px] duration-300 " to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
