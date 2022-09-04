import React from 'react'
import '../css/Bubbles.css';


export  function Bubbles() {
    const color = ['#5eead4','#0ea5e9','#f0abfc'];
    return (
        <>
            <section className='fixed min-h-screen min-w-full -z-10'>
                <div className="bubbles">
                    <img src={require(`../images/others/bubble.png`)} alt='bubble'/>
                    <img src={require(`../images/others/bubble.png`)} alt='bubble'/>
                    <img src={require(`../images/others/bubble.png`)} alt='bubble'/>
                    <img src={require(`../images/others/bubble.png`)} alt='bubble'/>
                    <img src={require(`../images/others/bubble.png`)} alt='bubble'/>
                    <img src={require(`../images/others/bubble.png`)} alt='bubble'/>
                    <img src={require(`../images/others/bubble.png`)} alt='bubble'/>
                    <img src={require(`../images/others/bubble.png`)} alt='bubble'/>
                    <img src={require(`../images/others/bubble.png`)} alt='bubble'/>
                    <img src={require(`../images/others/bubble.png`)} alt='bubble'/>
                </div>
            </section>
            <section className='BubbleContainer'>
                <div className='BubbleDot'>              
                    <span style={{animationDuration:(250/11) + `s`,background: color[0]}} className='shadow-xl shadow-black'></span>
                    <span style={{animationDuration:(250/17) + `s`,background: color[1]}} className='shadow-xl shadow-black'></span>
                    <span style={{animationDuration:(250/24) + `s`,background: color[2]}} className='shadow-xl shadow-black'></span>
                    <span style={{animationDuration:(250/12) + `s`,background: color[1]}} className='shadow-xl shadow-black'></span>
                    <span style={{animationDuration:(250/19) + `s`,background: color[0]}} className='shadow-xl shadow-black'></span>
                    <span style={{animationDuration:(250/23) + `s`,background: color[2]}} className='shadow-xl shadow-black'></span>
                    <span style={{animationDuration:(250/15) + `s`,background: color[1]}} className='shadow-xl shadow-black'></span>
                    <span style={{animationDuration:(250/25) + `s`,background: color[2]}} className='shadow-xl shadow-black'></span>
                    <span style={{animationDuration:(250/19) + `s`,background: color[0]}} className='shadow-xl shadow-black'></span>
                    <span style={{animationDuration:(250/14) + `s`,background: color[2]}} className='shadow-xl shadow-black'></span>
                    <span style={{animationDuration:(250/26) + `s`,background: color[1]}} className='shadow-xl shadow-black'></span>
                    <span style={{animationDuration:(250/13) + `s`,background: color[0]}} className='shadow-xl shadow-black'></span>
                </div>
            </section>
        </>
    )
}
