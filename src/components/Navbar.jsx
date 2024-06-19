import React from "react";
import { GoArrowRight } from "react-icons/go";

function Navbar() {
  return (
    <nav className="w-full py-6 md:px-18 p-[5vh] flex items-center justify-between border-b-[1px] border-zinc-300">
      <h2 className="logo font-semibold text-2xl uppercase">sachin</h2>
      <div className="nav-part1 md:flex items-center gap-[3vw] hidden sm:flex">
        <a className="text-base" href="">
          Home
        </a>
        <a className="text-base" href="">
          About
        </a>
        <a className="text-base" href="">
          Works
        </a>
        <a className="text-base" href="">
          Services
        </a>
        <a className="text-base" href="">
          Contact
        </a>
      </div>
      <div className="nav-part2">
        <button
          className="border px-4 py-1 rounded-full text-md border-zinc-400 flex items-center gap-2"
        >
          Lets talk{" "}
          <span className="mt-[3px]">
          <GoArrowRight />
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
