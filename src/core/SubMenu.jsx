import React,{ useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ShoppingCartCheckoutTwoTone } from '@mui/icons-material';
import { FoodCard } from '../components/_COMPONENT';
import { Tooltip, Badge } from "@mui/material";
import { Link } from 'react-router-dom';
import { useData } from '../Context/DataContext'

export function SubMenu() {

    const state = useLocation().state;
    const navigate = useNavigate()
    const { getItems, product } = useData();
    const cart_arr =  getItems(); // receive array from cart or receive an empty arr while starting
    const [search, setSearch] = useState();
    const [food, setFood] = useState(product());
    const [list, setList] = useState(cart_arr);  //cart
    const [count, setCount] = useState(cart_arr.length);  //cart item count

    useEffect(() => {
        if(!state) {
            navigate('/')
        } else {
            const temp = state.from;
            filter(temp)
            setSearch(temp)
        }
    },[])
    // ------------------------------------//  
    // hl4        add items into cart     
    // ------------------------------------//    
    const add_cart = (data) =>{ 
        let arr = []; 
        arr.push(data);
        setList(list.concat(arr));
        setCount(count+1);
    }
    useEffect(() => {
        localStorage.setItem('item-list', JSON.stringify(list))
    },[list])
    //--------------------------------------//
    //Hl3      set menu according to action 
    //--------------------------------------//
    function filter (args) {
        switch(args) {
            case "Signature" : {
                const updatedList = food.filter((currElm) => {
                    return currElm.tag1 === "signature👌";
                })
                setFood(updatedList);
                break;
            }
            case "Breakfast" : {
                const updatedList = food.filter((currElm) => {
                    return currElm.type === "lite";
                })
                setFood(updatedList);
                break;
            }
            case "Soup" : {
                const updatedList = food.filter((currElm) => {
                    return currElm.type === "soup";
                })
                setFood(updatedList);
                break;
            }
            case "Starter" : {
                const updatedList = food.filter((currElm) => {
                    return currElm.type === "starter";
                })
                setFood(updatedList);
                break;
            }   
            case "Pizza" : {
                const updatedList = food.filter((currElm) => {
                    return currElm.type === "pizza";
                })
                setFood(updatedList);
                break;
            }
            case "Drinks" : {
                const updatedList = food.filter((currElm) => {
                    return currElm.type === "drink";
                })
                setFood(updatedList);
                break;
            }   
            case "Dessert" : {
                const updatedList = food.filter((currElm) => {
                    return currElm.type === "dessert";
                })
                setFood(updatedList);
                break;
            }    
            case "Pure Veg" : {
                const updatedList = food.filter((currElm) => {
                    return currElm.category === "veg";
                })
                setFood(updatedList);
                break;
            }   
            case 'Dinner' : {
                const updatedList = food.filter((currElm) => {
                    return((currElm.type==="starter")+
                            (currElm.type==="soup")+
                            (currElm.type==="pizza")+
                            (currElm.type==="meal"));
                })
                setFood(updatedList);
                break; 
            }   
            default :
                console.log('pls bro')  
        }
        console.log(food)
    };

    return (
        <>
            <section className='flex flex-col min-w-full items-center md:items-end'>
                <div className='fixed mt-20 z-10 w-full md:w-40r h-20 md:rounded-b-xl flex overflow-hidden justify-center items-center' style={{background : 'linear-gradient(180deg,#141E30,#243B55)'}}>
                    <div style={{content: '', position: 'absolute', top: '0', right: '45%', width: '60%', height: '100%', background: `rgba(255,255,255,0.075)`, transform: `skew(25deg)`, display: 'flex' }}>
                    </div>
                    <h1 className='txt5 text-4xl text-teal-400 -skew-x-12 absolute top-0 left-4 md:left-10 h-full flex justify-center items-center'>
                        <span className='ml-2'>{search}</span>
                    </h1>
                    <div className='flex justify-center items-center h-full' style={{position: 'absolute', top: '0', right:'20%'}}>
                        <Tooltip title='Your cart'>
                            <Link to='/cart'>
                                <Badge badgeContent={count} color="secondary" overlap="circular" className="my-2 cursor-pointer">
                                    <ShoppingCartCheckoutTwoTone fontSize="large" className="m-0 text-indigo-400 hover:text-indigo-500"/>
                                </Badge>
                            </Link>
                        </Tooltip>
                    </div>
                </div>
                <div className="pb-20 h-auto min-w-full absolute top-48 flex justify-center items-center ">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
                        {food.map((currElm)=>{
                            return(
                                <FoodCard 
                                        key={currElm.id}
                                        id={currElm.id}
                                        offer={currElm.offer}
                                        quantity={currElm.quantity}
                                        name={currElm.name}
                                        img={currElm.img}
                                        rate={currElm.rate}
                                        des={currElm.des}
                                        tag1={currElm.tag1}
                                        tag2={currElm.tag2} 
                                        btn={add_cart}
                                        >
                                </FoodCard>
                            )
                        })}
                    </div>    
                </div>
                <div key='bg' className="relative min-w-full min-h-screen -z-20">
                    <div className="fixed top-80 -right-32 h-96 w-96 sm:w-30r sm:h-30r rounded-full bg-gradient-to-b from-slate-100 via-blue-500 to-indigo-900 -z-20 shadow-black shadow-xl"></div>
                    <div className="fixed top-80 -right-32 h-96 w-96 sm:w-30r sm:h-30r rounded-full bg-gradient-to-b from-slate-100 via-blue-500 to-indigo-900 -z-20"
                        style={{filter: 'blur(30px)'}}>
                    </div>
                    <div className="fixed -left-36 top-0 -z-20 w-96 h-96 rounded-full shadow-xl shadow-black"
                        style={{background: 'linear-gradient(#833ab4,#fd1d1d,#fcb045)'}}>
                    </div>
                    <div className="fixed -bottom-10 -left-10 h-56 w-56 md:h-72 md:w-72 rounded-full shadow-black shadow-xl" style={{background: 'linear-gradient(#fdeff9,#ec38bc,#7303c0,#03001e)'}}></div>
                    <div className="fixed -bottom-10 -left-10 h-56 w-56 md:h-72 md:w-72 rounded-full shadow-black shadow-xl" style={{background: 'linear-gradient(#fdeff9,#ec38bc,#7303c0,#03001e)', filter: 'blur(30px)'}}></div>
                </div>
            </section>
        </>
    )
}
