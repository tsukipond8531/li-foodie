import React from 'react'
import Tilt from 'react-parallax-tilt'


export function LandingComponent5() {
    return (
      <section className='relative mt-20 sm:mt-44 flex flex-col mb-4'>
        <div className='fixed right-0 mr-0 md:mr-28 lg:mr-32 max-w-lg'>
          <Tilt className=''> 
            <div className='inner-element bg-white bg-opacity-40 shadow-2xl shadow-black p-6 md:p-12'>
              <h1 className="txt7 capitalize text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-slate-900">best certified chefs</h1>
              <p className='txt2 font-bold text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis ullam cupiditate quam quae. Sed aut minima, facere dignissimos incidunt perferendis fugit delectus. Perferendis, quam.</p>
              <h2 className='txt1 ml-4 mt-8 text-3xl font-bold text-pink-700'> - chef's word</h2>
            </div>
          </Tilt>
        </div>
      </section>
    )
}
