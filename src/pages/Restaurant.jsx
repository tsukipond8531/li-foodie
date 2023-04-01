import React, { useState, useEffect } from "react";
import "../css/Category.css";
import { FoodCard, FoodFilter } from "../components/_COMPONENT";
import { useData } from '../Context/DataContext'

const Restaurant = ({setProgress}) =>{

    const { getItems, product, setItems } = useData();
    const [food, setFood] = useState([]);
    const Food = product();
    const [showMenu, toggleShowMenu] = useState(false);
    const [showItems,toggleShowItems] = useState(false);
    const [showHelp, toggleShowHelp] = useState(true);
    const cart_arr =  getItems(); // receive array from cart or receive an empty arr while starting
    const [list, setList] = useState(cart_arr);  //cart
    const [count, setCount] = useState(cart_arr.length);  //cart item count

    useEffect(() => {
        setProgress(100)
    },[])
    useEffect(() => {
        setProgress(100)
    },[food])
    
    const setShowItems = () =>{
        if(!showItems) {
            toggleShowItems(!showItems)
        }
    }

    useEffect(() => {
        if(showItems === true) {
            toggleShowHelp(false)
        }
    },[showItems])
    
// HL1       filtering food         
    const filterItem1 = (type) =>{
        const updatedList = Food.filter((currElm) => {
            return currElm.type === type;
        })
        setFood(updatedList);
        toggleShowMenu(!showMenu);
        setShowItems()
    }
    const filterItem2 = (type) =>{
        const updatedList = Food.filter((currElm) => {
            return currElm.tag1 === type;
        })
        setFood(updatedList);
        toggleShowMenu(!showMenu);
        setShowItems()
    }
    const filterItem3 = () =>{
        const updatedList = Food.filter((currElm) => {
            return((currElm.type==="starter")+
                    (currElm.type==="soup")+
                    (currElm.type==="pizza")+
                    (currElm.type==="meal"));
        })
        setFood(updatedList);
        toggleShowMenu(!showMenu);
        setShowItems()
    }
    const filterItem4 = (type) =>{
        const updatedList = Food.filter((currElm) => {
            return currElm.category === type;
        })
        setFood(updatedList);
        toggleShowMenu(!showMenu);
        setShowItems()
    }
    const filterItem5 = () =>{
        setFood(product());
        toggleShowMenu(!showMenu);
        setShowItems()
    }
    const filterItem6 = () => {      
        const updatedList = Food.filter((currElm) => {
            return currElm.offer > 0;
        })
        setFood(updatedList);
        if(!showItems) {
            toggleShowHelp(true)
        }
        setShowItems()
    }

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

//HL5       offer list              
    const offer_List = Array.isArray(Food) ? Food.filter((elm) => {
        return elm.offer > 1;
    }) : [] ;

    return(
        <React.Fragment>
            <FoodFilter
                key='food_filter_&_side_navbar'
                count = {count}
                showMenu = {showMenu}
                swap = {() => {toggleShowMenu(!showMenu)}}
                filter1 = {filterItem1}
                filter2 = {filterItem2}
                filter3 = {filterItem3}
                filter4 = {filterItem4} 
                filter5 = {filterItem5}
                offer = {filterItem6}
                showHelp = {showHelp}
                offer_List = {offer_List}
            />
            <section className={showItems?"":"hidden"}>
                <div className="pb-20 h-auto w-full absolute top-32 flex justify-center items-center px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
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
                <div className="relative min-w-full min-h-screen -z-20">
                    <div className="fixed top-80 -right-32 h-96 w-96 md:w-30r md:h-30r rounded-full bg-gradient-to-b from-slate-100 via-blue-500 to-indigo-900 -z-20 shadow-black shadow-xl"></div>
                    <div className="fixed top-80 -right-32 h-96 w-96 md:w-30r md:h-30r rounded-full bg-gradient-to-b from-slate-100 via-blue-500 to-indigo-900 -z-20"
                        style={{filter: 'blur(30px)'}}>
                    </div>
                    <div className="fixed -left-36 top-0 -z-20 w-96 h-96 rounded-full shadow-xl shadow-black"
                        style={{background: 'linear-gradient(#833ab4,#fd1d1d,#fcb045)'}}>
                    </div>
                    <div className="fixed -bottom-10 -left-10 h-56 w-56 md:h-72 md:w-72 rounded-full shadow-black shadow-xl" style={{background: 'linear-gradient(#fdeff9,#ec38bc,#7303c0,#03001e)'}}></div>
                    <div className="fixed -bottom-10 -left-10 h-56 w-56 md:h-72 md:w-72 rounded-full shadow-black shadow-xl" style={{background: 'linear-gradient(#fdeff9,#ec38bc,#7303c0,#03001e)', filter: 'blur(30px)'}}></div>
                </div>
            </section>
        </React.Fragment>
    )
}

export {Restaurant}