import React from 'react';
import { Food } from '../../API/FoodDB'
const RandomImg = () => {

    var rand = [];
    Food.map((currElm) => {
        return(
            rand.push(currElm.img)
        )
    })
   
    var imgName = rand[Math.floor(Math.random() * 106)]
    
    return(
    <>        
        <img
        className="object-cover w-full h-full"
        src={require(`../../css/images/items/${imgName}`)}
        // src="https://source.unsplash.com/user/erondu/1600x900"
        alt="img" loading='lazy'
        />     
    </>
    );
}

export {RandomImg};