import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import img from '../assets/funfact.webp';

function Reviews() {
  return (
    <section className="w-full min-h-screen bg-[#fcfcfd] flex justify-center items-center py-10">
      <div className="w-4/5 flex flex-col lg:flex-row justify-center  gap-10 px-10">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-10">
          <div className="flex flex-col gap-5 text-center lg:text-left">
            <div className="text-3xl lg:text-5xl font-semibold">
              <span>What People</span>
              <span>Say about the</span>
              <span>Epic Reads Book</span>
            </div>
            <div className="text-sm lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nesciunt, id itaque vitae deleniti facere quia.
            </div>
          </div>
          <button className="flex justify-center items-center gap-2 text-lg shadow-lg shadow-slate-300 px-4 py-2 rounded-md bg-white">
            Reviews
            <span className="flex justify-center items-center">
              <IoIosArrowForward />
            </span>
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end gap-10">
          <div className="relative w-60 h-60 flex justify-center items-center">
            <div className="absolute w-60 h-60 bg-white rounded-full shadow-xl flex justify-center items-center">
              <div className="w-44 h-44 bg-[#5956e9] rounded-full"></div>
            </div>
            <img src={img} alt="Fun Fact" className="absolute top-16 left-1/2 transform -translate-x-1/3 w-52 rounded-full" loading="lazy" />
          </div>
          <div className="flex justify-center items-center gap-5 lg:mr-14">
            <button className="w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center border rounded-full">
              <IoArrowBack className="text-lg lg:text-xl" />
            </button>
            <button className="w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center bg-[#5956e9] text-white rounded-full">
              <IoArrowForward className="text-lg lg:text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
