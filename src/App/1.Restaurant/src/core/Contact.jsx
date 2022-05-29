import React from 'react';
import { SocialMedia } from '../components/_COMPONENT';
import { Svg3 } from '../svg/svg';

const Contact = () => {

    return(
    <React.Fragment>  
        <section className="flex justify-center min-h-screen p-4 flex-col">
            <div className="mt-32 flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-teal-200">Connect With Us</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-400">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="name" className="leading-7 text-sm text-violet-200">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-800 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    </div>
                    <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="email" className="leading-7 text-sm text-violet-200">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-800 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    </div>
                    <div className="p-2 w-full">
                    <div className="relative">
                        <label htmlFor="message" className="leading-7 text-sm text-violet-200">Message</label>
                        <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-800 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    </div>
                    <div className="py-2 w-full h-auto flex justify-center">
                        <button>
                            <a className="relative px-5 py-2 font-medium text-white group">
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-pink-700 group-hover:bg-indigo-700 group-hover:skew-x-12"></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-indigo-700 group-hover:bg-pink-700 group-hover:-skew-x-12"></span>
                                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-pink-700 -rotate-12"></span>
                                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-indigo-700 -rotate-12"></span>
                                <span className="relative text-2xl px-2 py-3">Send</span>
                            </a>
                        </button>
                    </div>
                    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 flex flex-col">
                        <a className="text-pink-300 mx-auto text-lg font-bold">example@email.com</a>
                        <p className="leading-normal my-5 mx-auto">
                                49 Smith St. <br/>Saint Cloud, MN 56301
                        </p>
                        <div className='bg-slate-100 w-fit mx-auto rounded-xl bg-opacity-30'>
                            <SocialMedia/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hl4     svg */}'
            <div className='fixed bottom-0 left-0 opacity-40 -z-10'>
                <Svg3/>
            </div>
        </section>
    </React.Fragment>
    );
}

export {Contact};