import { Tooltip, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {useState} from "react";

const FoodCard = (props) =>{
    const [check,toggleCheck] = useState(false);
    const [times, setTimes] = useState(0);
   
    const add = (arg) =>{
        props.btn(arg);
        toggleCheck(true);
        setTimes(times+1);
    }
    const prise = props.rate - (props.rate*(props.offer/100));

    return(
        <section className="2xl:w-72 w-64  rounded-xl overflow-hidden sm:hover:shadow-xl shadow-neutral-900 h-full group bg-gradient-to-br from-slate-200 via-teal-300 to-amber-100 hover:from-pink-600 hover:via-indigo-400 hover:to-cyan-300 transition duration-500 ease-in-out bg-opacity-90">
            {/* <!-- Card info --> */}
            <div className="px-6 py-2">
                <h1 className="txt6 capitalize text-indigo-900 group-hover:text-white 2xl:text-2xl text-xl">
                    {props.name}
                </h1>
            </div>    
            <img className="w-full 2xl:h-48  h-44 group-hover:scale-105 transition duration-700" src={require(`../images/product-images/${props.img}`)} alt={props.name} loading='lazy'/>
            <div>
                <div className="px-2 py-4">
                    <div className="w-fit inline-block bg-slate-100 group-hover:bg-slate-900 bg-opacity-80 rounded-full px-3 py-1 text-sky-400 mb-2">
                        {/* <!-- tag 1 --> */}
                        {'#'+props.tag1}
                    </div>
                    <div className="w-fit inline-block bg-slate-100 group-hover:bg-slate-900 bg-opacity-80 rounded-full px-3 py-1 text-orange-500 mb-2">
                        {/* <!-- tag 2 --> */}
                        {'#'+props.tag2}
                    </div>
                    <div className={(props.offer > 0)?'w-fit inline-block font-semibold bg-yellow-400 bg-opacity-80 rounded-full px-3 py-1 text-rose-500 mb-2':'hidden'}>
                        {props.offer+'% off'}
                    </div>
                    <br/>
                    <p className="txt8 text-slate-600 text-xs mx-2">
                        {/* <!-- details --> */}
                        {props.des}
                    </p>
                </div>
                <div className="w-full h-auto pl-4 pr-10 pb-4 flex justify-between">
                        {/* <!-- prise --> */}
                    <h1 className="mx-2 font-bold text-2xl">
                        <span className={(props.offer < 1)?'txt3 px-3':'txt1 mr-2 text-rose-500 line-through'}>{"₹"+props.rate}</span>
                        <span className={(props.offer > 0)?'txt3 px-1':'hidden'}>{"₹"+prise}</span>
                    </h1>
                    <Tooltip title={check?'Item Added':'Add To Cart'} placement='right'>
                        <Button onClick={() => {add(props.id)}} variant={check?'contained':'outlined'} color='info'>
                            {check?<span className='text-xl'>{times}</span>:<AddShoppingCartIcon/>}
                        </Button>
                    </Tooltip>
                </div>
            </div> 
        </section>
    );
}

export {FoodCard}
