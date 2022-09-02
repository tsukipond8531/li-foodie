import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { ArrowUpward } from '@mui/icons-material'

export const ScrollToTop = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', listenTopScroll)
    }, [])

    function listenTopScroll () {
        const heightToShow = 250;
        
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        (winScroll > heightToShow) ? setShow(true) : setShow(false)
    }
    function top () {
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }

    return (
       <div className={show ? 'rounded-full overflow-hidden fixed bottom-4 md:right-6 right-4 z-50 shadow-black shadow-2xl' : 'hidden'}>
            <Button variant='contained' color='primary' onClick={top}>
                <ArrowUpward className='animate-bounce'/>
            </Button>
        </div>
    )
}
