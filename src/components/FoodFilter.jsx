import React, { useState, forwardRef } from "react";
import {Link} from 'react-router-dom'
import { Tooltip, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Badge, Button } from "@mui/material";
import { CancelOutlined, FoodBankTwoTone, ShoppingCartCheckoutTwoTone, RoomServiceTwoTone } from "@mui/icons-material";
import { WelcomeTuts } from "./_COMPONENT";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction='right' ref={ref} {...props} />;
  });

const menuData = {
    menuClass : 'capitalize text-xl text-indigo-500 hover:text-rose-600 hover:font-semibold cursor-pointer',
    menuName : ["💗A to Z.","🥪Breakfast and Snacks.","🥣Soup.","🍖Starter.","🍕pizza.","🌯lunch and dinner.","🍩dessert.","🍻drinks.","👌signature.","🥗PureVeg."]
}


export function FoodFilter(props) {

    const [open, setOpen] = useState(false);
    const [selectMenuName, setSelectMenuName] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
        props.swap()
    };

    const handleClose = () => {
        setOpen(false);
        props.swap()
    };

    function filter (args) {
        switch(parseInt(args)) {
            case 1 : 
                props.filter2("signature👌")
                setSelectMenuName('Signature')
                handleClose()
                break;
            case 2 :
                props.filter1("lite")
                setSelectMenuName('Breakfast')
                handleClose()
                break;
            case 3 :
                props.filter1("soup")
                handleClose()
                setSelectMenuName("Soup")
                break;
            case 4 :
                props.filter1("starter")
                setSelectMenuName("Starter")
                handleClose()
                break;
            case 5 :
                props.filter1("pizza")
                setSelectMenuName("Pizza")
                handleClose()
                break;
            case 6 :
                props.filter1("drink")
                setSelectMenuName('Drinks')
                handleClose()
                break;
            case 7 : 
                props.filter1("dessert")
                setSelectMenuName("Dessert")
                handleClose()
                break;
            case 8 :
                props.filter4("veg")
                setSelectMenuName('PureVeg')
                handleClose()
                break;
            case 9 :
                props.filter3()
                setSelectMenuName("Dinner")
                handleClose()
                break; 
            case 10 :
                props.filter5()
                setSelectMenuName('A to z')
                handleClose()
                break; 
            default :
                console.log('pls bro')  
        }
    }
    
    return (
        <>
            <section className="w-fit h-auto flex justify-center items-center">
                <section className="fixed top-0 left-0 w-10 my-52 h-56 rounded-full inline-flex justify-center flex-col z-10 shadow-black shadow-xl" style={{background :'linear-gradient(#C6FFDD,#FBD786,#f7797d)'}}>
                    <div>
                        <button onClick={handleClickOpen}>
                            <Tooltip placement="right-start" title="Our Menu">
                                <RoomServiceTwoTone fontSize="large" className="ml-0.5 text-indigo-600 hover:text-indigo-700 my-2 cursor-pointer"/>
                            </Tooltip>
                        </button>
                        <button onClick={() => {
                                props.offer()
                                setSelectMenuName('Discount') 
                            }}>
                            <Tooltip placement="right-start" title="Only For Today 😍">
                                <FoodBankTwoTone fontSize="large" className="ml-0.5 text-indigo-600 hover:text-indigo-700 my-2 cursor-pointer"/>
                            </Tooltip>
                        </button>
                        <Link to="/cart" className="my-2 cursor-pointer">
                            <Tooltip placement="right-start" title="Your Cart">
                                <Badge badgeContent={props.count} color="secondary" overlap="circular">
                                    <ShoppingCartCheckoutTwoTone fontSize="large" className="m-0 text-indigo-600 hover:text-indigo-700"/>
                                </Badge>
                            </Tooltip>
                        </Link>
                    </div>
                </section>
                <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="food category" className="bg-slate-900 bg-opacity-60">
                    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
                        <DialogTitle className="w-full flex flex-col">
                            <p className="txt3 text-2xl pt-4">Welcome to LiFoodie!</p>
                            <p className="pt-2 text-2xl text-pink-600 mx-auto">
                                <span className='underline'>Our</span><span className='underline ml-2'>Menu</span>
                            </p>
                        </DialogTitle>
                        <DialogContent >
                            <ul className="txt1 capitalize h-full w-full py-4 flex justify-start flex-col">
                                <li> <button onClick={() => filter(1)} className={menuData.menuClass}> {menuData.menuName[8]} </button> </li>
                                <li> <button onClick={() => filter(2)} className={menuData.menuClass}> {menuData.menuName[1]} </button> </li>
                                <li> <button onClick={() => filter(3)} className={menuData.menuClass}> {menuData.menuName[2]} </button> </li>
                                <li> <button onClick={() => filter(4)} className={menuData.menuClass}> {menuData.menuName[3]} </button> </li>
                                <li> <button onClick={() => filter(5)} className={menuData.menuClass}> {menuData.menuName[4]} </button> </li>
                                <li> <button onClick={() => filter(6)} className={menuData.menuClass}> {menuData.menuName[7]} </button> </li>
                                <li> <button onClick={() => filter(7)} className={menuData.menuClass}> {menuData.menuName[6]} </button> </li>
                                <li> <button onClick={() => filter(8)} className={menuData.menuClass}> {menuData.menuName[9]} </button> </li>
                                <li> <button onClick={() => filter(9)} className={menuData.menuClass}> {menuData.menuName[5]} </button> </li>
                                <li> <button onClick={() => filter(10)} className={menuData.menuClass}> {menuData.menuName[0]} </button> </li>
                            </ul>
                        </DialogContent>  
                        <DialogActions>
                            <Button onClick={handleClose} startIcon={<CancelOutlined/>} color='error'>close</Button>
                        </DialogActions>            
                    </div>   
                </Dialog>
            </section>
            <WelcomeTuts 
                showHelp = {props.showHelp}
                offer_List = {props.offer_List}
                menu = {handleClickOpen}
                offer = {props.offer}
                selectMenuName={selectMenuName}
            />
        </>
    );
}
