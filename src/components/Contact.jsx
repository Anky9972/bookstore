import React from "react";
import { IoArrowForward } from "react-icons/io5";
import img from "../assets/file (1).png";
function Contact() {
  return (
    <section className="w-full h-screen flex justify-center items-center p-4 md:p-0">
      <div className="md:w-4/5 lg:w-3/4 md:h-1/2 h-4/5 lg:h-1/2 xl:h-4/5 bg-[#5956e9] rounded-[44px] flex flex-col justify-start items-center gap-5 md:gap-10 relative">
        <div className="flex flex-col gap-5 mt-16">
          <div>
            <h1 className="text-white">CONTACT US</h1>
          </div>
          <div className="text-white text-3xl md:text-5xl font-semibold flex flex-col">
            <span>Let's Work On</span>
            <span>Something Cool Together</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:mt-5">
          <button className="bg-white px-12 py-3 rounded-xl flex gap-3 justify-center items-center font-bold shadow-xl">
            Sign up <IoArrowForward />
          </button>
          <div className="flex justify-center items-center absolute bottom-0 ">
            <img src={img} alt="error" loading="lazy" className="md:w-1/3 lg:w-3/4 xl:w-1/3"  />
          </div>
        </div>
        <span className="hidden lg:block w-3 h-3 left-56 top-40 rounded-full bg-white absolute"></span>
        <span className="w-12 h-12 top-0 left-0 rounded-full bg-white absolute"></span>
        <span className="w-12 h-12  top-0 right-0 rounded-full bg-white absolute"></span>
        <span className=" hidden lg:block w-3 h-3 right-56 top-52 rounded-3xl bg-white absolute"></span>
      </div>
    </section>
  );
}

export default Contact;