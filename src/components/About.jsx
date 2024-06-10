import React from "react";
import { TiUserOutline } from "react-icons/ti";
import { CgFileDocument } from "react-icons/cg";
import img from '../assets/freepik-export-20240609051359XZWC.png';

function About() {
  return (
    <section className="bg-[#ffefe0] w-full min-h-screen flex flex-col justify-center items-center py-10">
      <div className="w-4/5 md:w-full lg:w-full flex flex-col lg:flex-row px-5 lg:px-20 mb-10 lg:gap-5">
        <div className="text-3xl lg:text-5xl flex flex-col lg:w-1/2 justify-center text-left font-semibold mb-5 lg:mb-0">
          <span>About</span>
          <span>The Epic Reads</span>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center text-left">
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            eligendi doloribus! Exercitationem eaque, quas possimus minima minus
            tempora architecto, ducimus.
          </p>
        </div>
      </div>
      <div className="md:w-full lg:w-full flex flex-col lg:flex-row px-5 lg:px-20 py-10">
        <div className="bg-[#fab8c4] w-full lg:h-full flex flex-col lg:flex-row rounded-3xl">
          <div className="w-full lg:w-1/3 flex justify-center items-center p-5">
            <img src={img} alt="Book" loading="lazy" className="object-contain"/>
          </div>
          <div className="w-full lg:w-2/3 p-5">
            <div className="w-full h-full bg-white rounded-3xl flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-3xl lg:text-5xl font-semibold p-5">
                <span className="text-left leading-normal">
                  The <br />
                  Epic Reads
                </span>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-left p-5">
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span>
                        <TiUserOutline size={24} />
                      </span>
                      <h1 className="text-[#4b4949] text-lg">Author</h1>
                    </div>
                    <p className="ml-8 text-black font-medium">Epic Reads Library</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span>
                        <CgFileDocument size={24} />
                      </span>
                      <h1 className="text-[#4b4949] text-lg">Total</h1>
                    </div>
                    <p className="ml-8 text-black font-medium">80 books</p>
                  </div>
                  <div className="flex justify-center items-center gap-10 w-full mt-5">
                    <div className="w-10 h-10 bg-[#fab8c4] rounded-full"></div>
                    <div className="w-16 h-16 bg-[#5956e9] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
