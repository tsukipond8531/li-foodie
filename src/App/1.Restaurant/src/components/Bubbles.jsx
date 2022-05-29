import React from 'react'
import '../../css/Bubbles.css';

export  function Bubbles() {
    return (
        <section className='fixed min-h-screen min-w-full -z-10'>
            <div className="bubbles">
                <img src={require(`../../css/images/others/bubble.png`)}/>
                <img src={require(`../../css/images/others/bubble.png`)}/>
                <img src={require(`../../css/images/others/bubble.png`)}/>
                <img src={require(`../../css/images/others/bubble.png`)}/>
                <img src={require(`../../css/images/others/bubble.png`)}/>
                <img src={require(`../../css/images/others/bubble.png`)}/>
                <img src={require(`../../css/images/others/bubble.png`)}/>
                <img src={require(`../../css/images/others/bubble.png`)}/>
                <img src={require(`../../css/images/others/bubble.png`)}/>
                <img src={require(`../../css/images/others/bubble.png`)}/>
            </div>
        </section>
    )
}
