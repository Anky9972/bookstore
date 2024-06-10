import React from "react";
import img from "../assets/book.png";

function Hero() {
  return (
    <section className="w-full h-screen bg-[#ffefe0]">
      <div className="w-full h-[92%] bg-white rounded-bl-[74px] rounded-br-[74px] shadow-2xl">
        <div className="bg-[#5956e9] w-full h-[88%] rounded-bl-[74px] rounded-br-[74px] text-white flex flex-col justify-start items-center gap-8 md:gap-16 lg:gap-20 xl:gap-8 px-4 sm:px-8">
          <div className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl mt-10 flex flex-col font-semibold text-center ">
            <span>Expand your mind,</span>
            <span>reading a book</span>
          </div>
          <div className="text-center px-2 sm:px-4">
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl">
              Reading books is a wonderful way to spend your time. Here we
              believe reading will help you make connections with others.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 ">
            <button className="px-8 py-3  bg-white rounded-lg text-slate-900 text-sm lg:text-xl font-semibold shadow-lg xl:text-lg">
              Download Now
            </button>
            <button className="px-8 py-3 bg-transparent rounded-lg text-sm border border-white lg:text-xl xl:text-lg">
              Read Free Book
            </button>
          </div>
          <div className="w-2/3 md:hidden lg:block  xl:w-1/3">
            <img
              src={img}
              alt="Book"
              loading="lazy"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
