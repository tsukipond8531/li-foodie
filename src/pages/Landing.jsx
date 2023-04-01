import React,{ useEffect } from 'react'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'
import { LandingComponent1, LandingComponent2, LandingComponent3, LandingComponent4, LandingComponent5, LandingComponent6 } from '../components/_COMPONENT'
import { Svg8 } from '../svg/svg'

export function Landing({setProgress}) {
    useEffect(() => {
        setProgress(100)
    },[])
    return (
        <>
           <ParallaxProvider>
                <ParallaxBanner layers={[{image: require(`../images/others/girl.jpg`), opacity: [1,0.5]},
                    {children:<LandingComponent1></LandingComponent1>, opacity: [1,0.9]}]} 
                    style={{height: '850px'}}/>
                
                <LandingComponent2/>
                
                <ParallaxBanner layers={[{image: require(`../images/others/seating.jpg`), speed: -50, opacity: [1,.5]},
                    {children: <LandingComponent3></LandingComponent3>, speed: -60}]} 
                    style={{height: '600px'}}>
                </ParallaxBanner>

                <LandingComponent4/>

                <ParallaxBanner layers={[{image: require(`../images/others/chef.jpg`), speed: -80, opacity:[.8,1]},
                    {children: <LandingComponent5></LandingComponent5>}]} 
                    style={{height: '850px'}}>
                </ParallaxBanner>
        
                <LandingComponent6/>

                <div className="fixed bottom-0 right-0 -z-30 opacity-10">
                    <Svg8/>
                </div>
           </ParallaxProvider> 
        </>
    )
}
