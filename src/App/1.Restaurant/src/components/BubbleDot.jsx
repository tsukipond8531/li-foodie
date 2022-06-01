import React from 'react'
import '../../css/BubbleDot.css';

export function BubbleDot(props) {
    return (
        <section className='BubbleContainer'>
            <div className='BubbleDot'>              
                <span style={{animationDuration:(250/11) + `s`}}></span>
                <span style={{animationDuration:(250/12) + `s`}}></span>
                <span style={{animationDuration:(250/24) + `s`}}></span>
                <span style={{animationDuration:(250/10) + `s`}}></span>
                <span style={{animationDuration:(250/14) + `s`}}></span>
                <span style={{animationDuration:(250/23) + `s`}}></span>
                <span style={{animationDuration:(250/18) + `s`}}></span>
                <span style={{animationDuration:(250/16) + `s`}}></span>
                <span style={{animationDuration:(250/19) + `s`}}></span>
                <span style={{animationDuration:(250/20) + `s`}}></span>
            </div>
        </section>
    )
}
