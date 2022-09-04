import React from 'react';


const RandomImg = () => {

    const imgArr = [
        process.env.REACT_APP_BREAKFAST_URL,
        process.env.REACT_APP_DESSERT_URL,
        process.env.REACT_APP_DINNER_URL,
        process.env.REACT_APP_DRINKS_URL,
        process.env.REACT_APP_PIZZA_URL,
        process.env.REACT_APP_SIGNATURE_URL,
        process.env.REACT_APP_SOUP_URL,
        process.env.REACT_APP_STARTER_URL,
        process.env.REACT_APP_VEG_URL
    ]

  
    var imgName = imgArr[Math.floor(Math.random() * 9)]
    
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