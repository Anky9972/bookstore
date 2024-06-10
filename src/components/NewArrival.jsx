import React from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import img from "../assets/bookicon.png";

function NewArrival() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center gap-5 bg-[#f7f8f9] py-10">
      <div className="w-4/5 flex flex-col lg:flex-row justify-between items-center mb-10">
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-semibold">New Arrivals</h1>
          <p className="text-sm lg:text-base">
            Find our top categories that will help you find what you are looking
            for.
          </p>
        </div>
        <div className="flex justify-center items-center gap-5 mt-5 lg:mt-0">
          <button className="w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center border rounded-full">
            <IoArrowBack className="text-lg lg:text-xl" />
          </button>
          <button className="w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center bg-[#5956e9] text-white rounded-full">
            <IoArrowForward className="text-lg lg:text-xl" />
          </button>
        </div>
      </div>
      <div className="w-11/12 md:w-4/5  flex justify-center items-center">
        <div className="w-full flex flex-wrap justify-center items-center gap-5 overflow-hidden">
          <div className="bg-white  flex-nowrap rounded-3xl w-full lg:w-auto p-5 flex justify-center items-center gap-5 overflow-x-auto scroll-smooth">
            <div className="bg-[#ffeddc] w-40 lg:w-48 h-60 rounded-3xl p-2 flex flex-col items-center snap-start flex-shrink-0 ml-56 md:ml-0  relative">
              <div className="w-full h-1/2 flex justify-center items-center">
                <div className="w-16 h-16 lg:w-24 lg:h-24 bg-[#fab6c3] rounded-full flex justify-center items-center">
                  <img
                    src={img}
                    alt="Book"
                    className="w-8 lg:w-12"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full h-1/2 bg-white rounded-3xl mt-2 flex flex-col gap-4 p-2">
                <div className="flex justify-between items-center gap-2">
                  <h1 className="text-lg font-semibold text-[#e9768b]">1984</h1>
                  <span className="text-md font-medium text-[#fab6c3]">
                    $12.50
                  </span>
                </div>
                <div>
                  <button className="px-5 py-2 border border-[#ffeddc] rounded-2xl font-bold text-[#fab6c3]">
                    View Book
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#dbdeff] w-40 lg:w-48 h-60 rounded-3xl p-2 flex flex-col items-center snap-start shrink-0 relative">
              <div className="w-full h-1/2 flex justify-center items-center">
                <div className="w-16 h-16 lg:w-24 lg:h-24 bg-[#5450db] rounded-full flex justify-center items-center">
                  <img
                    src={img}
                    alt="Book"
                    className="w-8 lg:w-12"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full h-1/2 bg-white rounded-3xl mt-2 flex flex-col gap-4 p-2">
                <div className="flex justify-between items-center gap-2">
                  <h1 className="text-lg font-semibold text-[#5450db]">Dune</h1>
                  <span className="text-md font-medium text-[#64b4ff]">$9.99</span>
                </div>
                <div>
                  <button className="px-5 py-2 border border-[#64b4ff] rounded-2xl font-bold text-[#5450db]">
                    View Book
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#dbf8ff] w-40 lg:w-48 h-60 rounded-3xl p-2 flex flex-col items-center snap-start shrink-0 relative">
              <div className="w-full h-1/2 flex justify-center items-center">
                <div className="w-16 h-16 lg:w-24 lg:h-24 bg-[#64b4ff] rounded-full flex justify-center items-center">
                  <img
                    src={img}
                    alt="Book"
                    className="w-8 lg:w-12"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full h-1/2 bg-white rounded-3xl mt-2 flex flex-col gap-4 p-2">
                <div className="flex justify-between items-center gap-2">
                  <h1 className="text-lg font-semibold text-[#64b4ff]">Inferno</h1>
                  <span className="text-md font-medium text-[#8ee4fa]">$8.95</span>
                </div>
                <div>
                  <button className="px-5 py-2 border border-[#dbf8ff] rounded-2xl font-bold text-[#64b4ff]">
                    View Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewArrival;
