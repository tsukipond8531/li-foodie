import React from 'react';
import { useData } from '../Context/DataContext';
const RandomImg = () => {

    const { product } = useData()
    const food = product()

    let rand = [];
    food.map((currElm) => {
        return(
            rand.push(currElm.img)
        )
    })
   
    var imgName = rand[Math.floor(Math.random() * 106)]
    
    return(
    <>        
        <img
        className="object-cover w-full h-full"
        src={imgName}
        // src="https://source.unsplash.com/user/erondu/1600x900"
        alt="img" loading='lazy'
        />     
    </>
    );
}

export {RandomImg};