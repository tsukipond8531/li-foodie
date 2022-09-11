import React from 'react'
import Tilt from 'react-parallax-tilt'
import { useNavigate } from 'react-router-dom'

export function Error404() {

  const navigate = useNavigate()

    return (
      <section className='w-full h-full p-4 flex justify-center'>
        <Tilt className='sm:mt-40 mt-32' tiltReverse={true}>
            <div className='max-w-3xl h-auto bg-white flex flex-col rounded-xl shadow-2xl shadow-black p-6' style={{transform: 'translateZ(60px)'}}>
                <h1 className='txt7 font-bold sm:text-6xl text-3xl mx-auto text-indigo-500'>
                  <span className='text-pink-700 animate-pulse'>404 Error</span> - Page not found
                </h1>
                <h1 className='mt-12 ml-4 txt1 font-bold text-xl'>The page you are looking for doesn't exist or has been removed.</h1>
                <div className='mt-12 w-full h-auto p-6 flex justify-center'>
                  <button onClick={() => {navigate(-1)}}
                    className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative txt7 text-xl">Go Back</span>
                  </button>
                </div>
            </div>
        </Tilt>
      </section>
    )
}
