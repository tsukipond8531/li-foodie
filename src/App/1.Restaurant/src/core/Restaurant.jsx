import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {Food} from "../../API/FoodDB";
import "../../css/Category.css";
import '../../css/Bubbles.css';
import { FoodCard, FoodFilter, Blob } from "../components/_COMPONENT";


const Restaurant = () =>{

    const [items,updatedItems] = useState(Food);
    const [showMenu, toggleShowMenu] = useState(false);
    const [showItems,toggleShowItems] = useState(false);
    const [showHelp,toggleShowHelp] = useState(false);
    const cart_arr = useLocation().state.from; // receive array from cart or receive an empty arr
    const [list, setList] = useState(cart_arr);  //cart
    const [count, setCount] = useState(cart_arr.length);  //cart item count
     
    
    var temp=1;
    const wlc_food = () =>{
        //toggle between wlc msg or food menu wlc msg will be shown ones at first time only
        showItems?temp=5:toggleShowItems(!showItems);
    }

    const swap = () =>{
        showItems?temp=5:toggleShowHelp(true)
        toggleShowMenu(!showMenu);
    }

// -----------------------------------//
// HL1       filtering food          
// -----------------------------------//
    const filterItem1 = (type) =>{
        const updatedList = Food.filter((currElm) => {
        return currElm.type === type;
        })
        updatedItems(updatedList);
        toggleShowMenu(!showMenu);
        wlc_food();
    }
    const filterItem2 = (type) =>{
        const updatedList = Food.filter((currElm) => {
            return currElm.tag1 === type;
        })
        updatedItems(updatedList);
        toggleShowMenu(!showMenu);
        wlc_food();
    }
    const filterItem3 = () =>{
        const updatedList = Food.filter((currElm) => {
            return((currElm.type==="starter")+
                    (currElm.type==="soup")+
                    (currElm.type==="pizza")+
                    (currElm.type==="meal"));
        })
        updatedItems(updatedList);
        toggleShowMenu(!showMenu);
        wlc_food();
    }
    const filterItem4 = (type) =>{
        const updatedList = Food.filter((currElm) => {
            return currElm.category === type;
        })
        updatedItems(updatedList.sort());
        toggleShowMenu(!showMenu);
        wlc_food();
    }
    const filterItem5 = () =>{
        updatedItems(Food);
        toggleShowMenu(!showMenu);
        wlc_food();
    }
    const filterItem6 = () => {
        const updatedList = Food.filter((currElm) => {
            return currElm.offer > 0;
        })
        updatedItems(updatedList);
        showItems?temp=5:toggleShowHelp(true)
        wlc_food();
    }
// ------------------------------------//  
// hl4        add items into cart     
// ------------------------------------//    
    const add_cart = (data) =>{ 
        let arr = []; 
        arr.push(data);
        setList(list.concat(arr));
        setCount(count+1);
    }
//===================================//
//HL5       offer list              
//===================================//
    const offer_List = Food.filter((elm) => {
        return elm.offer > 1;
    })

    return(
        <React.Fragment>
            <FoodFilter
                key='food_filter_&_side_navbar'
                list = {list}
                count = {count}
                showMenu = {showMenu}
                swap = {swap}
                filter1 = {filterItem1}
                filter2 = {filterItem2}
                filter3 = {filterItem3}
                filter4 = {filterItem4} 
                filter5 = {filterItem5}
                offer = {filterItem6}
                showHelp = {showHelp}
                offer_List = {offer_List}
            />
            <section className={showItems?"":"hidden"} key='menu_items'>
                <div className="pb-20 h-auto w-full absolute top-40 flex justify-center items-center ">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
                        {items.map((currElm)=>{
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
        </React.Fragment>
    )
}

export {Restaurant}