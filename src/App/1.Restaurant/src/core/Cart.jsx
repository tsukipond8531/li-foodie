import React,{ useState} from 'react';
import { useLocation, Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination ,Keyboard, Navigation} from "swiper";
import { Food } from '../../API/FoodDB';
import { OrderTotal, OrderCard, Checkout, Blob } from '../components/_COMPONENT'
import { Svg8 } from '../svg/svg'; 

const Cart = () => {
    const state = useLocation().state;
    let order = [];
    order = state.from;
    const items = [... new Set(order)];
    const order_quantity_pair = {};
    for (const element of order) 
    {
        if (order_quantity_pair[element]) 
        {
            order_quantity_pair[element] += 1;
        } 
        else 
        {
            order_quantity_pair[element] = 1;
        }
    }
    const item_name = items.sort((a, b) => { return a - b ;});
    const item_quantity = Object.values(order_quantity_pair);
    const menu = Food;
    var list = [];
    var i;

    var grandTotal= 0;
    for(i = 0; i <= item_name.length; i = i+1)
    {
        const elm = item_name[i];
        menu.map(fnc)
        function fnc(a)
        {
            if(elm == a.id)
            {
                const name = a.name;
                const img = a.img;
                const rate = a.rate;
                const offer = a.offer;
                const id = elm;
                const quantity = item_quantity[i];
                let cost = 0;
                if(offer > 0){
                    cost = parseInt((rate - (rate*(offer/100)))*quantity);
                    
                } else {
                    cost = parseInt(rate*quantity);
                }
                grandTotal += cost
                list.push({name,id,img,rate,quantity,offer})
            }
        }
    }
    const [final, setFinal] = useState(grandTotal);
    const [chkAdd, setChkAdd] = useState([])
    const [chkRemove, setChkRemove] = useState([])
    const plus = (amt, item_id) => { 
        setFinal(final + amt);
        setChkAdd(chkAdd.concat(item_id))
    }
    const sub = (amt, item_id,) => {   
        setFinal(final - amt);
        setChkRemove(chkRemove.concat(item_id))
    }
    const [finalPay, setFinalPay] = useState([]);
    const pay = (arg) => {
        setFinalPay(arg)
    }

    return(
        <>
            <section className='w-full h-auto flex justify-center sm:px-4 px-2'>
                <div className='sm:mt-40 mt-32 flex-1 h-full max-w-xl mx-auto shadow-2xl bg-white bg-opacity-10 sm:bg-opacity-50 shadow-zinc-900 rounded-2xl overflow-hidden py-2 border border-t-0 border-l-0 border-white border-opacity-30'>
                    <div className={(items.length == 0 )?'flex justify-center py-20 flex-col':'hidden'}>
                        <h1 className='text-4xl text-bold text-gray-800 mx-4 text-center'>Your cart is empty 😫</h1>
                        <div className='mx-auto mt-8'>
                            <Link to='/restaurant' state={{from: order}} 
                                className="box-border relative z-30 inline-flex items-center justify-center w-auto px-1 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none animate-bounce">
                                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                <span className="relative z-20 flex items-center text-sm">
                                <svg className="relative w-5 h-5 mx-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    Shop More
                                </span>
                            </Link>
                        </div>
                    </div>
                    <section className={(items.length > 0)?'w-auto h-auto lg:mx-5 md:mx-2 sm:mx-1 mx-1 my-3':'hidden'}>
                        <div className="flex w-full h-auto justify-center items-center flex-col">
                            <h1 className='txt4 mt-3 text-3xl sm:text-4xl '>Welcome to LiFoodie!</h1>
                            <h1 className='txt7 text-xl font-extrabold'>Your Cart</h1>
                        </div>
                        {/*Hl6  order cart   */}
                        <Swiper  freeMode={true} pagination={{type:'progressbar', clickable:true}} keyboard={true} 
                            navigation={true}
                            style={{"--swiper-navigation-color": "#fff","--swiper-pagination-color": "#67e8f9"}}
                            modules={[FreeMode, Pagination, Keyboard, Navigation ]}
                            className="mySwiper mt-6 w-full h-auto">
                            {
                                list.map((currElm,index) => {
                                    return(                                        
                                        <SwiperSlide className='my-6 inline-flex justify-center items-center w-80' key={currElm.id}>
                                            <OrderCard
                                                key = {index}
                                                id={currElm.id}
                                                name = {currElm.name}
                                                img = {currElm.img}
                                                rate = {currElm.rate}
                                                offer = {currElm.offer}
                                                quantity = {currElm.quantity}
                                                add = {plus}
                                                reduce = {sub}
                                        />
                                        </SwiperSlide>
                                    )
                                    })
                                }
                        </Swiper> 
                        <OrderTotal key="grandTotal" amount = {final} getTotal={pay}/>
                        <div className='mt-2'>
                            <Checkout initial={order}
                                added={chkAdd}
                                removed={chkRemove}
                                finalPay={finalPay}
                            />
                        </div>
                    </section>
                </div>
                {/* Hl3     svg ......................................*/}
                <div className="fixed bottom-0 right-0 -z-30 opacity-10">
                    <Svg8/>
                </div>
                <div className='fixed min-h-screen min-w-full -z-20 overflow-hidden'>
                    <div className='absolute top-10 -left-64 h-30r w-30r rounded-full bg-gradient-to-r -z-20 shadow-xl shadow-neutral-900' style={{background: "linear-gradient(#eecda3, #ef629f)" }}></div>
                    <div className='absolute top-10 -left-64 h-30r w-30r rounded-full bg-gradient-to-r -z-20' style={{background: "linear-gradient(#eecda3, #ef629f)",filter:'blur(200px)'}}></div>
                    <div className='absolute -bottom-24 -right-24 h-96 w-96 rounded-full -z-20 shadow-xl shadow-neutral-900' style={{background: "linear-gradient(#3a1c71, #d76d77, #ffaf7b)" }}></div>
                    <div className='absolute -bottom-24 -right-24 h-96 w-96 rounded-full -z-20' style={{background: "linear-gradient(#3a1c71, #d76d77, #ffaf7b)",filter:'blur(150px)'}}></div>
                    <div className='absolute top-12 sm:right-96 right-12 sm:mr-96 h-44 w-44 -z-20'>
                        <Blob
                            from='#FDFC47'
                            via='#24FE41'
                            to='#76b852'
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export {Cart};