import React from "react";
import { Svg1 } from "../svg/svg";


const About = () => {
  return (
    <React.Fragment>
      <section className="xl:py-36 lg:py-36 md:py-24 sm:py-24 py-24">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Raw Denim Heirloom Man Braid
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.
            </p>
          </div>
          <section className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 justify-center">
            <div className="p-2 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full w-full mx-5 my-2 bg-gradient-to-br from-gray-700 to-zinc-900  shadow-2xl shadow-black rounded-xl">
              <div className="p-4 h-full items-center inline-flex">
                <svg
                  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="text-gray-300 font-medium">
                  Authentic Cliche Forage
                </span>
              </div>
            </div>
            <div className="p-2 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full w-full mx-5 my-2 bg-gradient-to-br from-gray-700 to-zinc-900  shadow-2xl shadow-black rounded-xl">
              <div className="p-4 h-full items-center inline-flex">
                <svg
                  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="text-gray-300 font-medium">
                  Kinfolk Chips Snackwave
                </span>
              </div>
            </div>
            <div className="p-2 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full w-full mx-5 my-2 bg-gradient-to-br from-gray-700 to-zinc-900  shadow-2xl shadow-black rounded-xl">
              <div className="p-4 h-full items-center inline-flex">
                <svg
                  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="text-gray-300 font-medium">
                  Coloring Book Ethical
                </span>
              </div>
            </div>
            <div className="p-2 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full w-full mx-5 my-2 bg-gradient-to-br from-gray-700 to-zinc-900  shadow-2xl shadow-black rounded-xl">
              <div className="p-4 h-full items-center inline-flex">
                <svg
                  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="text-gray-300 font-medium">
                  Typewriter Polaroid Cray
                </span>
              </div>
            </div>
            <div className="p-2 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full w-full mx-5 my-2 bg-gradient-to-br from-gray-700 to-zinc-900  shadow-2xl shadow-black rounded-xl">
              <div className="p-4 h-full items-center inline-flex">
                <svg
                  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="text-gray-300 font-medium">Pack Truffaut Blue</span>
              </div>
            </div>
            <div className="p-2 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-full w-full mx-5 my-2 bg-gradient-to-br from-gray-700 to-zinc-900  shadow-2xl shadow-black rounded-xl">
              <div className="p-4 h-full items-center inline-flex">
                <svg
                  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="text-gray-300 font-medium">
                  The Catcher In The Rye
                </span>
              </div>
            </div>
          </section>
        </div>
        {/* Hl4     svg */}
        <div className="fixed bottom-0 left-0 -z-20 opacity-90">
          <Svg1/>
        </div>
      </section>
    </React.Fragment>
  );
};

export { About };
