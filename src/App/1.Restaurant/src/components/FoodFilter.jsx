import React, { useState, forwardRef } from "react";
import {Link} from 'react-router-dom'
import { Tooltip, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Badge, Button} from "@mui/material";
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
                handleClose()
                break;
            case 2 :
                props.filter1("lite")
                handleClose()
                break;
            case 3 :
                props.filter1("soup")
                handleClose()
                break;
            case 4 :
                props.filter1("starter")
                handleClose()
                break;
            case 5 :
                props.filter1("pizza")
                handleClose()
                break;
            case 6 :
                props.filter1("drink")
                handleClose()
                break;
            case 7 : 
                props.filter1("dessert")
                handleClose()
                break;
            case 8 :
                props.filter4("veg")
                handleClose()
                break;
            case 9 :
                props.filter3()
                handleClose()
                break; 
            case 10 :
                props.filter5()
                handleClose()
                break; 
            default :
                console.log('pls bro')  
        }
    }
    
    return (
        <>
            <section className="w-fit h-auto flex justify-center items-center">
                <section className="fixed top-0 left-0 w-10 my-52 h-56 bg-gradient-to-b border-0 from-slate-100 via-teal-300 to-amber-100 rounded-full inline-flex justify-center flex-col z-10 shadow-black shadow-xl">
                    <div>
                        <button onClick={handleClickOpen}>
                            <Tooltip placement="right-start" title="Our Menu">
                                <RoomServiceTwoTone fontSize="large" className="ml-0.5 text-indigo-600 hover:text-indigo-900 my-2 cursor-pointer"/>
                            </Tooltip>
                        </button>
                        <button onClick={() => props.offer()}>
                            <Tooltip placement="right-start" title="Only For Today 😍">
                                <FoodBankTwoTone fontSize="large" className="ml-0.5 text-indigo-600 hover:text-indigo-900 my-2 cursor-pointer"/>
                            </Tooltip>
                        </button>
                        <Tooltip placement="right-start" title="Your Cart">
                            <Link to="/cart">
                                <Badge badgeContent={props.count} color="secondary" overlap="circular" className="my-2 cursor-pointer">
                                    <ShoppingCartCheckoutTwoTone fontSize="large" className="m-0 text-indigo-600 hover:text-indigo-900"/>
                                </Badge>
                            </Link>
                        </Tooltip>
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
                                <li> <a onClick={() => filter(1)} className={menuData.menuClass}> {menuData.menuName[8]} </a> </li>
                                <li> <a onClick={() => filter(2)} className={menuData.menuClass}> {menuData.menuName[1]} </a> </li>
                                <li> <a onClick={() => filter(3)} className={menuData.menuClass}> {menuData.menuName[2]} </a> </li>
                                <li> <a onClick={() => filter(4)} className={menuData.menuClass}> {menuData.menuName[3]} </a> </li>
                                <li> <a onClick={() => filter(5)} className={menuData.menuClass}> {menuData.menuName[4]} </a> </li>
                                <li> <a onClick={() => filter(6)} className={menuData.menuClass}> {menuData.menuName[7]} </a> </li>
                                <li> <a onClick={() => filter(7)} className={menuData.menuClass}> {menuData.menuName[6]} </a> </li>
                                <li> <a onClick={() => filter(8)} className={menuData.menuClass}> {menuData.menuName[9]} </a> </li>
                                <li> <a onClick={() => filter(9)} className={menuData.menuClass}> {menuData.menuName[5]} </a> </li>
                                <li> <a onClick={() => filter(10)} className={menuData.menuClass}> {menuData.menuName[0]} </a> </li>
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
                cart = {props.list}
            />
        </>
    );
}
