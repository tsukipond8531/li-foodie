import React from "react";
import { Link } from "react-router-dom";
import { FoodBank, ShoppingCart, RoomService } from "@mui/icons-material";
import { useData } from '../Context/DataContext';

const style = {
    btn : 'bg-yellow-200 rounded-full h-fit w-fit py-1 px-3 m-1 inline-flex justify-center items-center text-indigo-900 italic text-xl txt5 shadow-xl shadow-black',
}


const Help = (props) => {

    
    const { getUser } = useData();
    const userData = getUser();

    function setCustom () {
        props.offer()
        props.setCustom()
    }
   

    return (
        <React.Fragment>
            <div className="flex flex-col mb-4 w-80 md:w-96">
                <h1 className="txt7 capitalize text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500">best food for your test</h1>
                <h2 className="text-2xl px-4">
                    <span className='text-3xl pt-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400'>
                        {(userData.displayName === undefined)?"Welcome user":`Welcome ${userData.displayName}`}
                    </span>
                    <span className='ml-1'>🙋‍♂️</span>
                </h2>
                <p className="txt7 font-bold px-4 mt-2 text-neutral-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus sit cumque nam non delectus ea, quo laudantium veniam laboriosam hic ipsa consequuntur qui rerum voluptas atque at. Provident asperiores, quae quia aspernatur cum quas corporis</p>
                <h2 className="txt7 font-bold px-4 text-amber-400 text-2xl mt-2">Access this sidebar to get :</h2>
                <div className="mt-2 flex flex-col">
                    <button onClick={props.menu} className={style.btn}>
                         <RoomService className="text-pink-700"/>Our menu
                    </button>
                    <button onClick={setCustom} className={style.btn}>
                         <FoodBank className="text-pink-700"/>Today's special
                    </button>
                    <Link to="/cart" exact='true' className={style.btn}>
                         <ShoppingCart className="text-pink-700"/>Your cart
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
};
export { Help };
