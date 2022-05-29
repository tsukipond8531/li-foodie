import React from "react";
import { LocalDining, DeliveryDiningRounded, GradeRounded, CurrencyExchange } from "@mui/icons-material";
import ReactTypingEffect from 'react-typing-effect'
//import { Svg9 } from '../svg/svg'
export function LandingComponent2() {
  return( 
    <section className="flex h-auto p-7 md:p-14 flex-col" style={{background: 'linear-gradient(to bottom left, #0f0c29,#302b63,#24243e)'}}>
        <h1 className='mx-auto mb-8 md:text-4xl text-3xl text-white font-bold txt1'>
            <ReactTypingEffect
                text={['What we believe in','Love, care and share...','your test ','our responsibility...']}
                speed={200} eraseSpeed={100} eraseDelay={1000} typingDelay={1000}
            />
        </h1>
        <div className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16">
            <div className="w-72 h-auto rounded-xl p-4 flex flex-col bg-gradient-to-br via-violet-800 from-indigo-800 to-slate-900 transition ease-in-out duration-300 hover:-translate-y-2 shadow-xl shadow-black cursor-pointer">
                <div className="mx-auto mt-2 rounded-full p-4 bg-gradient-to-b from-amber-400 to-rose-500 w-24 h-24 flex justify-center items-center shadow-xl shadow-black">
                    <LocalDining sx={{ fontSize: 50}}/>
                </div>
                <h1 className="mt-4 mx-auto text-2xl txt6 text-white">Special unique menu.</h1>
                <p className="mx-auto mt-2 px-4 txt2 text-lg text-white">Happiness with every bite.</p>
            </div>

            <div className="w-72 h-auto rounded-xl p-4 flex flex-col bg-gradient-to-br via-violet-800 from-indigo-800 to-slate-900 transition ease-in-out duration-300 hover:-translate-y-2 shadow-xl shadow-black cursor-pointer">
                <div className="mx-auto mt-2 rounded-full p-4 bg-gradient-to-b from-amber-400 to-rose-500 w-24 h-24 flex justify-center items-center shadow-xl shadow-black">
                    <DeliveryDiningRounded sx={{ fontSize: 50}}/>
                </div>
                <h1 className="mt-4 mx-auto text-2xl txt6 text-white">Don't get hungry.</h1>
                <p className="mx-auto mt-2 px-4 txt2 text-lg text-white">Within 30min delivery.</p>
            </div>

            <div className="w-72 h-auto rounded-xl p-4 flex flex-col bg-gradient-to-br via-violet-800 from-indigo-800 to-slate-900 transition ease-in-out duration-300 hover:-translate-y-2 shadow-xl shadow-black cursor-pointer">
                <div className="mx-auto mt-2 rounded-full p-4 bg-gradient-to-b from-amber-400 to-rose-500 w-24 h-24 flex justify-center items-center shadow-xl shadow-black">
                    <CurrencyExchange sx={{ fontSize: 50}}/>
                </div>
                <h1 className="mt-4 mx-auto text-2xl txt6 text-white">Make easy payment.</h1>
                <p className="mx-auto mt-2 px-4 txt2 text-lg text-white">Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="w-72 h-auto rounded-xl p-4 flex flex-col bg-gradient-to-br via-violet-800 from-indigo-800 to-slate-900 transition ease-in-out duration-300 hover:-translate-y-2 shadow-xl shadow-black cursor-pointer">
                <div className="mx-auto mt-2 rounded-full p-4 bg-gradient-to-b from-amber-400 to-rose-500 w-24 h-24 flex justify-center items-center shadow-xl shadow-black">
                    <GradeRounded sx={{ fontSize: 50}}/>
                </div>
                <h1 className="mt-4 mx-auto text-2xl txt6 text-white">3.5k + reviews.</h1>
                <p className="mx-auto mt-2 px-4 txt2 text-lg text-white">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </section>
    );
}
