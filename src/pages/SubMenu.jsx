import React,{ useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ShoppingCartCheckoutTwoTone, ReplyTwoTone } from '@mui/icons-material';
import { FoodCard } from '../components/_COMPONENT';
import { Tooltip, Badge } from "@mui/material";
import { Link } from 'react-router-dom';
import { useData } from '../Context/DataContext'

export function SubMenu({setProgress}) {

    const state = useLocation().state;
    const navigate = useNavigate()
    const { getItems, product, setItems } = useData();
    const cart_arr =  getItems(); // receive array from cart or receive an empty arr while starting
    const [search, setSearch] = useState([]);
    const [food, setFood] = useState(product());
    const [list, setList] = useState(cart_arr);  //cart
    const [count, setCount] = useState(cart_arr.length);  //cart item count

    useEffect(() => {
        if(!state) {
            navigate('/')
        } else {
            const temp = state.from;
            filter(temp)
            setSearch(temp.split(""))
        }
        setProgress(100)
    },[])

    // hl4        add items into cart     
    const add_cart = (data) =>{ 
        let arr = []; 
        arr.push(data);
        setList(list.concat(arr));
        setCount(count+1);
    }
    useEffect(() => {
        setItems(list)
    },[list])

    //Hl3      set menu according to action 
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
    };

    return (
        <>
            <section className='flex flex-col min-w-full items-center md:items-end'>
                <div className='fixed top-0 left-0 mt-24 z-10 w-10 md:w-12 py-8 rounded-full flex overflow-hidden justify-center items-center border-slate-900 border-x shadow-xl shadow-black'>
                    <div style={{content: '', position: 'absolute', top: '-60%', right: '0%', width: '500%', height: '100%', background: `#141e30`, transform: `skew(8deg) rotate(135deg)`, display: 'flex' }}>
                    </div>
                    <div style={{content: '', position: 'absolute', top: '30%', right: '0%', width: '600%', height: '100%', background: `#141e30`, transform: `skew(8deg) rotate(-45deg)`, display: 'flex' }}>
                    </div>
                    <div className='flex justify-center items-center flex-col w-full'>
                        <div className='txt1 text-4xl font-bold grid grid-cols-1'>
                           {search.map((currElm, index) => {
                                return(
                                    <div className='capitalize z-10 text-transparent bg-clip-text bg-gradient-to-b from-amber-300 via-green-400 to-indigo-400' key={index}>
                                        <h1>{currElm}</h1>
                                    </div>
                                )
                           })}
                        </div>
                        <div className='mt-4 flex justify-center items-center w-full flex-col z-10'>
                            <Tooltip title='Your cart' placement='right'>
                                <Link to='/cart'>
                                    <Badge badgeContent={count} color="secondary" overlap="circular">
                                        <ShoppingCartCheckoutTwoTone fontSize="large" className="cursor-pointer text-indigo-400 hover:text-indigo-500"/>
                                    </Badge>
                                </Link>
                            </Tooltip>
                            <Tooltip title="Back" placement='right'>
                                <ReplyTwoTone onClick={() => {navigate(-1)}} fontSize="large" className='cursor-pointer text-pink-500 hover:text-pink-600'/>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className="pb-20 h-auto min-w-full absolute top-40 flex justify-center items-center ">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-16">
                        {food.map((currElm)=>{
                            return(
                                <FoodCard 
                                        key={currElm.id}
                                        id={currElm.id}
                                        offer={currElm.offer}
                                        quantity={currElm.quantity}
                                        name={currElm.name}
                                        img={currElm.imgName}
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
