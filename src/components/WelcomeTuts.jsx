import React from 'react'
import { Help, OfferSlide, Blob } from './_COMPONENT'

export function WelcomeTuts(props) {

  const search = props.selectMenuName.split("")
  
  return (
    <>
      <section className={props.showHelp?"flex p-4 max-w-full min-h-screen overflow-hidden relative":"hidden"}>
        <div className='absolute w-30r h-30r bg-gradient-to-br from-pink-600 via-blue-500 to-purple-500 rounded-full -z-20 -top-5 -left-12 shadow-2xl shadow-slate-800'></div>
        <div className='absolute w-30r h-30r bg-gradient-to-br from-pink-600 via-blue-500 to-purple-500 rounded-full -z-20 -top-5 -left-12' style={{filter:'blur(200px)'}}></div>
        <div className='absolute bottom-40 md:bottom-72 right-60 md:right-96 mr-0 md:mr-10'>
          <Blob
            from='#ec38bc'
            via='#7303c0'
            to='#03001e'
          />
        </div>
        <div className="min-w-full flex flex-col lg:flex-row">
          <div className='ml-12 sm:ml-20 mt-20 sm:mt-40'>
            <Help key='menu-help'
              menu = {props.menu}
              offer = {props.offer}
              setCustom={props.setCustom}
            />
          </div>
          <div className='ml-0 2xl:ml-96 lg:ml-40 mt-0 lg:mt-40 relative'>
            <div className='absolute -top-56 -right-56 bg-gradient-to-br from-teal-300 via-cyan-400 to-indigo-500 h-30r w-30r rounded-full -z-20 shadow-xl shadow-neutral-900'></div>
            <div className='mx-auto flex w-fit p-2 md:p-10 xl:p-20 justify-center items-center bg-white rounded-xl bg-opacity-10 shadow-xl shadow-black border border-t-0 border-l-0 border-white border-opacity-20 backdrop-blur-sm z-10'>
              <OfferSlide key='offer-slider' list={props.offer_List}/>
            </div>
            <div className='absolute -bottom-24 -left-44 h-96 w-96 rounded-full bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 -z-20 shadow-xl shadow-neutral-900'></div>
            <div className='absolute -bottom-24 -left-44 h-96 w-96 rounded-full bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 -z-20' style={{filter:'blur(150px)'}}></div>
          </div>
        </div>
      </section>
      <section className={props.showHelp?"hidden":"fixed top-0 right-0 mt-32 z-10 w-10 md:w-12 mr-0 md:mr-4 py-10 rounded-full flex overflow-hidden justify-center items-center border-slate-900 border-x shadow-xl shadow-black"}>
        <div style={{content: '', position: 'absolute', top: '-60%', right: '0%', width: '500%', height: '100%', background: `#141e30`, transform: `skew(8deg) rotate(135deg)`, display: 'flex' }}>
        </div>
        <div style={{content: '', position: 'absolute', top: '30%', right: '0%', width: '600%', height: '100%', background: `#141e30`, transform: `skew(8deg) rotate(-45deg)`, display: 'flex' }}>
        </div>
        <div className='flex justify-center items-center flex-col w-full'>
          <div className='txt1 text-4xl font-bold grid grid-cols-1'>
            {search.map((currElm, index) => {
              return(
                <div className='capitalize z-10 text-transparent bg-clip-text bg-gradient-to-b from-pink-500 via-orange-500 to-rose-600' key={index}>
                  <h1>{currElm}</h1>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
