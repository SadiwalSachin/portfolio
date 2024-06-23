import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="w-full px-[10vw] flex flex-col items-center ">
        <div className="mt-10 w-full">
          <h1 className="text-center md:text-[3vw] text-[5vh] font-semibold text-orange-300">
            Contact
          </h1>
          <p className="text-center md:text-[1vw] inli  mt-3">
            Lets Connect and Create Something Amazing Together. React Out to
            start a Conversation about your project or idea Today!
          </p>
        </div>
        <div className="mt-[7vh]">
          <Link to="/" className=" px-5 py-2 bg-orange-300 text-white border border-zinc-800 rounded-full">Go Back</Link>
        </div>
        <div className="mt-[4vw] md:px-[15vw]  flex flex-col items-center">
          <h2 className="text-center md:text-[2vw] tracking-tighter font-semibold ">
            Send us a meassage
          </h2>
          <form className="mt-16" action="">
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-x-10 md:gap-y-4 flex-wrap md:w-[50vw] w-full">
              <span className="w-full md:w-auto">
                <label htmlFor="name" className="md:text-xl">
                  Name
                </label>
                <br />
                <input
                  className="px-4  w-full md:w-[23vw] mt-2 py-2 outline-none rounded-md border"
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                />
              </span>
              <span className="w-full md:w-auto">
                <label htmlFor="name" className="md:text-xl">
                  E-mail
                </label>
                <br />
                <input
                  className="px-4 w-full md:w-[23vw] mt-2 py-2 outline-none rounded-md border"
                  type="email"
                  id="name"
                  placeholder="Enter your email"
                />
              </span>
              <span className="w-full md:w-auto">
                <label htmlFor="name" className="md:text-xl">
                  Subject
                </label>
                <br />
                <input
                  className="px-4 w-full md:w-[23vw] mt-2 py-2 outline-none rounded-md border"
                  type="text"
                  id="name"
                  placeholder="Your Subject"
                />
              </span>
              <span className="w-full md:w-auto">
                <label htmlFor="name" className="md:text-xl">
                  Phone
                </label>
                <br />
                <input
                  className="px-4 w-full md:w-[23vw] mt-2 py-2 outline-none rounded-md border"
                  type="number"
                  id="name"
                  placeholder="Enter your phone no"
                />
              </span>
            </div>
            <div className="mt-5 px-2">
                <label htmlFor="message">Message</label>
                <br />
                <textarea className="row-50 col-5 resize-none w-full mt-2 md:w-full outline-none border rounded-md" name="" id="message"></textarea>
            </div>
            <span className="w-full md:w-auto">
                <br />
                <input
                  className="px-4 w-full md:w-[23vw] bg-orange-400 mt-2 py-2 outline-none rounded-md border"
                  type="submit"
                  id="name"
                  placeholder="Enter your phone no"
                />
              </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
