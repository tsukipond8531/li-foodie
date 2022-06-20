import React,{ useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Food } from '../../API/FoodDB'
import { FoodCard, Blob } from '../components/_COMPONENT';

export function SubMenu() {

    const state = useLocation().state;
    const navigate = useNavigate()
    const [search, setSearch] = useState();
    const [menu, setMenu] = useState(Food);
    const [list, setList] = useState([]);  //cart
    const [count, setCount] = useState(0);  //cart item count 

    useEffect(() => {
        if(!state) {
            navigate('/')
        } else {
            const temp = state.from;
            setSearch(temp)
            filter(state.from)
        }
    })
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
                const updatedList = Food.filter((currElm) => {
                    return currElm.tag1 === "signature👌";
                })
                setMenu(updatedList);
                break;
            }
            case "Breakfast" : {
                const updatedList = Food.filter((currElm) => {
                    return currElm.type === "lite";
                })
                setMenu(updatedList);
                break;
            }
            case "Soup" : {
                const updatedList = Food.filter((currElm) => {
                    return currElm.type === "soup";
                })
                setMenu(updatedList);
                break;
            }
            case "Starter" : {
                const updatedList = Food.filter((currElm) => {
                    return currElm.type === "starter";
                })
                setMenu(updatedList);
                break;
            }   
            case "Pizza" : {
                const updatedList = Food.filter((currElm) => {
                    return currElm.type === "pizza";
                })
                setMenu(updatedList);
                break;
            }
            case "Drinks" : {
                const updatedList = Food.filter((currElm) => {
                    return currElm.type === "drink";
                })
                setMenu(updatedList);
                break;
            }   
            case "Dessert" : {
                const updatedList = Food.filter((currElm) => {
                    return currElm.type === "dessert";
                })
                setMenu(updatedList);
                break;
            }    
            case "Pure Veg" : {
                const updatedList = Food.filter((currElm) => {
                    return currElm.category === "veg";
                })
                setMenu(updatedList);
                break;
            }   
            case 'Dinner' : {
                const updatedList = Food.filter((currElm) => {
                    return((currElm.type==="starter")+
                            (currElm.type==="soup")+
                            (currElm.type==="pizza")+
                            (currElm.type==="meal"));
                })
                setMenu(updatedList);
                break; 
            }   
            default :
                console.log('pls bro')  
        }
    };

    return (
        <>
            <section className ='flex flex-col min-w-full items-center md:items-end'>
                <div className='fixed mt-20 z-10 w-full md:w-40r h-20 md:rounded-b-xl flex overflow-hidden' style={{background : 'linear-gradient(180deg,#141E30,#243B55)'}}>
                    <div style={{content: '', position: 'absolute', top: '0', right: '45%', width: '60%', height: '100%', background: `rgba(255,255,255,0.075)`, transform: `skew(25deg)`, display: 'flex' }}>
                        <h1 className='txt3 text-4xl text-center my-auto mx-auto'>
                            <span className='ml-2'>{search}</span>
                        </h1>
                    </div>
                </div>
                <div className="pb-20 h-auto min-w-full absolute top-48 flex justify-center items-center ">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
                        {menu.map((currElm)=>{
                            return(
                                <FoodCard 
                                        key={(currElm.id).toString()}
                                        id={currElm.fnc(currElm.id)}
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
                    <div className="fixed bottom-72 -left-56">
                        <Blob
                            to='#f2709c'
                            via='#ff0084'
                            form='#33001b'
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
