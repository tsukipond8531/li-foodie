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
        <section className="2xl:w-80 w-72 rounded-xl overflow-hidden sm:hover:shadow-xl shadow-neutral-900 h-full transform transition duration-500 sm:hover:scale-105 bg-gradient-to-br from-slate-200 via-teal-300 to-amber-100 bg-opacity-90">
            {/* <!-- Card info --> */}
            <div className="px-6 py-2">
                <h1 className="txt6 capitalize text-indigo-900 sm:text-3xl text-2xl">
                    {props.name}
                </h1>
            </div>    
            <img className="w-full sm:h-52 h-44" src={require(`../../css/images/items/${props.img}`)} alt={props.name} loading='lazy'/>
            <div>
                <div className="px-2 py-4">
                    <div className="w-fit inline-block bg-slate-200 bg-opacity-80 rounded-full px-3 py-1 text-base font-semibold text-sky-400 mb-2">
                        {/* <!-- tag 1 --> */}
                        {'#'+props.tag1}
                    </div>
                    <div className="w-fit inline-block bg-slate-200 bg-opacity-80 rounded-full px-3 py-1 text-base font-semibold text-orange-500 mb-2">
                        {/* <!-- tag 2 --> */}
                        {'#'+props.tag2}
                    </div>
                    <div className={(props.offer > 0)?'w-fit inline-block bg-slate-200 bg-opacity-80 rounded-full px-3 py-1 text-base font-semibold text-rose-500 mb-2':'hidden'}>
                        {props.offer+'% off'}
                    </div>
                    <br/>
                    <p className="txt8 text-slate-600 text-base mx-2">
                        {/* <!-- details --> */}
                        {props.des}
                    </p>
                </div>
                <div className="w-full h-auto pl-4 pr-10 pb-4 flex justify-between">
                        {/* <!-- prise --> */}
                    <h1 className="mx-2 font-bold text-2xl">
                        <del className={(props.offer < 1)?'txt3 px-3':'txt1 mr-2 text-rose-500 des'}>{"₹"+props.rate}</del>
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
