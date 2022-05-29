import React from 'react'
import { Help, OfferSlide} from './_COMPONENT'


export function WelcomeTuts(props) {
  return (
    <section className={props.showHelp?"hidden":"flex p-4 max-w-full min-h-screen overflow-hidden relative"}>
      <div className='absolute w-30r h-30r bg-gradient-to-br from-pink-600 via-blue-500 to-purple-500 rounded-full -z-20 -top-5 -left-12 shadow-2xl shadow-slate-800'></div>
      <div className='absolute w-30r h-30r bg-gradient-to-br from-pink-600 via-blue-500 to-purple-500 rounded-full -z-20 -top-5 -left-12' style={{filter:'blur(200px)'}}></div>
      <div className="flex flex-col lg:flex-row">
        <div className='ml-12 sm:ml-20 mt-20 sm:mt-56'>
          <Help key='menu-help'/>
        </div>
        <div className='ml-0 md:ml-96 mt-0 md:mt-40 relative'>
          <div className='absolute -top-56 -right-56 bg-gradient-to-br from-teal-300 via-cyan-400 to-indigo-500 h-30r w-30r rounded-full -z-20 shadow-xl shadow-neutral-900'></div>
          <div className='flex w-auto p-2 sm:p-20 justify-center items-center bg-white rounded-xl bg-opacity-10 shadow-xl shadow-black border border-t-0 border-l-0 border-white border-opacity-20 backdrop-blur-sm z-10'>
            <OfferSlide key='offer-slider' list={props.offer_List}/>
          </div>
          <div className='absolute -bottom-24 -left-44 h-96 w-96 rounded-full bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 -z-20 shadow-xl shadow-neutral-900'></div>
          <div className='absolute -bottom-24 -left-44 h-96 w-96 rounded-full bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 -z-20' style={{filter:'blur(150px)'}}></div>
        </div>
      </div>
    </section>
  )
}
