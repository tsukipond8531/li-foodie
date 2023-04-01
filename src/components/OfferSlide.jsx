import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { Autoplay, Pagination, EffectCube} from "swiper";

export function OfferSlide(props) {
    
    const list = props.list;

    return (
        <section className='w-full h-auto flex flex-col'>
            <h1 className='mx-auto text-3xl md:text-4xl txt7 font-bold'>
                <span className="text-pink-600 font-bold animate-pulse">Hurry!!</span>
                <span className='text-transparent bg-clip-text bg-gradient-to-r to-red-500 via-orange-400 from-amber-400 '> Only for today</span>
            </h1>
            <Swiper spaceBetween={30} centeredSlides={true} loop={true}
                autoplay={{delay: 2500,disableOnInteraction: false}}
                effect={"cube"} grabCursor={true} 
                cubeEffect={{shadow: true,slideShadows: true, shadowOffset: 20,  shadowScale: 0.94,}}
                pagination={{clickable:true}}
                modules={[Autoplay, Pagination, EffectCube]}
                className="mySwiper mt-4 w-80 md:w-96 h-auto">
                {
                    list.map((currElm) => {
                        return(                          
                            <SwiperSlide className='flex justify-center mb-12 group' key={currElm.id}>
                               <div className='flex flex-col bg-gradient-to-br from-slate-200 via-teal-300 to-amber-300 rounded-lg overflow-hidden'>
                                    <h1 className='txt7 text-3xl ml-4 font-extrabold capitalize text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-indigo-500 to-violet-600 my-1'>{currElm.name}</h1>
                                    <img className='w-80 sm:w-96 h-56 sm:h-64' src={require(`../images/product-images/${currElm.imgName}`)} alt={currElm.id}/>
                                    <h1 className='text-xl txt5 ml-4'>
                                        <span className='txt1'>Old price :</span>₹<del className='text-red-500'>{currElm.rate}</del>
                                    </h1>
                                    <h1 className='txt3 text-2xl mx-auto'><span className='txt1'>Offer price:</span>{`₹${currElm.rate - (currElm.rate*(currElm.offer / 100))}`}</h1>
                               </div>
                            </SwiperSlide>
                        )
                    })
                }    
             </Swiper>
        </section>
    )
}
