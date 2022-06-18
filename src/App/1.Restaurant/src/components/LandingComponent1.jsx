import React from 'react'
import { Link } from 'react-router-dom'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import Tilt from 'react-parallax-tilt'
import ReactTypingEffect from 'react-typing-effect';


export function LandingComponent1() {

    return (
        <>
            <section className='ml-12 md:ml-28 lg:ml-44 mt-20 sm:mt-44 flex flex-col mb-4 w-80 md:w-30r'>
                <h1 className="txt7 capitalize text-6xl md:text-7xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-rose-500">
                    happiness with every bite
                </h1>
                <div className='mt-8 ml-4 flex flex-col w-fit h-auto'>                  
                    <Link to='/restaurant' state={{from: []}} exact='true' className='m-2'>
                        <button className='min-w-full text-center py-2 border-b border-black rounded-sm shadow-xl shadow-black txt7 capitalize font-bold text-xl text-black bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500 hover:bg-gradient-to-l' >
                           <span>Order Now !</span>
                        </button>   
                    </Link>
                   
                    <Tilt tiltReverse={true}>
                        <div className='mx-2 my-4 px-4 py-2 w-40 text-center rounded-sm shadow-xl shadow-black txt7 capitalize font-bold text-xl text-neutral-900' style={{background: 'linear-gradient(90deg, #833ab4,#fd1d1d,#fcb045'}}>
                            <Link to='/login' >
                                <ReactTypingEffect
                                        text={['Get Started...','sign in !','sign up !']}
                                        speed={200} typingDelay={1000} eraseSpeed={100} eraseDelay={1000}
                                    />
                            </Link> 
                        </div>
                    </Tilt>
                </div>
                <div className='mt-10 ml-4'>
                    <h1 className='txt2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500'>Open for both takeout and order online</h1>
                </div>
            </section>
        </>
    )
}
