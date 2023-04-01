import React, { useEffect } from "react";
import { Svg2 } from "../svg/svg";

const Branches = ({ setProgress }) => {
  useEffect(() => {
    setProgress(100)
  }, [])
  return (
    <>
      <section className="container px-5 mx-auto flex flex-col">
        <div className="mt-36 mb-20 flex flex-wrap w-full flex-col items-center text-center">
          <h1 className="txt5 sm:text-4xl text-2xl font-black pb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500">
            All our branches across all over India
          </h1>
          <p className="txt8 lg:w-1/2 w-full leading-relaxed text-black md:text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dignissimos fugiat fugit beatae impedit laudantium.
          </p>
        </div>
        <section className="flex flex-wrap justify-center -m-4">
          <div className="xl:w-[30%] md:w-1/2 p-4 transition duration-300 hover:-translate-y-2 ease-in-out">
            <div className="p-6 rounded-xl bg-zinc-900 bg-opacity-90 shadow-2xl shadow-black">
              <div className="inline-flex items-center justify-center mb-4">
                <img src='./icon/icon.png' className='h-12 w-14' alt='logo' />
              </div>
              <h2 className="text-2xl txt3 font-bold mb-2">
                Shooting Stars
              </h2>
              <p className="text-zinc-300 txt2 text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ratione.
              </p>
            </div>
          </div>
          <div className="xl:w-[30%] md:w-1/2 p-4 transition duration-300 hover:-translate-y-2 ease-in-out">
            <div className="p-6 rounded-xl bg-zinc-900 bg-opacity-90 shadow-2xl shadow-black">
              <div className="inline-flex items-center justify-center mb-4">
                <img src='./icon/icon.png' className='h-12 w-14' alt='logo' />
              </div>
              <h2 className="text-2xl txt3 font-bold mb-2">
                The Catalyzer
              </h2>
              <p className="text-zinc-300 txt2 text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ratione.
              </p>
            </div>
          </div>
          <div className="xl:w-[30%] md:w-1/2 p-4 transition duration-300 hover:-translate-y-2 ease-in-out">
            <div className="p-6 rounded-xl bg-zinc-900 bg-opacity-90 shadow-2xl shadow-black">
              <div className="inline-flex items-center justify-center mb-4">
                <img src='./icon/icon.png' className='h-12 w-14' alt='logo' />
              </div>
              <h2 className="text-2xl txt3 font-bold mb-2">
                Neptune
              </h2>
              <p className="text-zinc-300 txt2 text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ratione.
              </p>
            </div>
          </div>
          <div className="xl:w-[30%] md:w-1/2 p-4 transition duration-300 hover:-translate-y-2 ease-in-out">
            <div className="p-6 rounded-xl bg-zinc-900 bg-opacity-90 shadow-2xl shadow-black">
              <div className="inline-flex items-center justify-center mb-4">
                <img src='./icon/icon.png' className='h-12 w-14' alt='logo' />
              </div>
              <h2 className="text-2xl txt3 font-bold mb-2">
                Melanchole
              </h2>
              <p className="text-zinc-300 txt2 text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ratione.
              </p>
            </div>
          </div>
          <div className="xl:w-[30%] md:w-1/2 p-4 transition duration-300 hover:-translate-y-2 ease-in-out">
            <div className="p-6 rounded-xl bg-zinc-900 bg-opacity-90 shadow-2xl shadow-black">
              <div className="inline-flex items-center justify-center mb-4">
                <img src='./icon/icon.png' className='h-12 w-14' alt='logo' />
              </div>
              <h2 className="text-2xl txt3 font-bold mb-2">
                Bunker
              </h2>
              <p className="text-zinc-300 txt2 text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ratione.
              </p>
            </div>
          </div>
          <div className="xl:w-[30%] md:w-1/2 p-4 transition duration-300 hover:-translate-y-2 ease-in-out">
            <div className="p-6 rounded-xl bg-zinc-900 bg-opacity-90 shadow-2xl shadow-black">
              <div className="inline-flex items-center justify-center mb-4">
                <img src='./icon/icon.png' className='h-12 w-14' alt='logo' />
              </div>
              <h2 className="text-2xl txt3 font-bold mb-2">
                Ramona Falls
              </h2>
              <p className="text-zinc-300 txt2 text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ratione.
              </p>
            </div>
          </div>
        </section>
        {/* Hl4     svg */}
        <div className="fixed top-0 right-0 opacity-80 -z-20">
          <Svg2 />
        </div>
      </section>
    </>
  );
};

export { Branches };
