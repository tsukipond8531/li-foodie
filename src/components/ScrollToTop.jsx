import React, { useEffect, useState } from 'react'
import { ArrowUpward } from '@mui/icons-material'

export const ScrollToTop = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', listenTopScroll)
    },[])

    function listenTopScroll () {
        const heightToShow = 250;
        
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        (winScroll > heightToShow) ? setShow(true) : setShow(false)
    }
    function top () {
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }

    return (
       <div className={show ? 'fixed bottom-4 md:right-6 right-4 z-50 border border-slate-900 rounded-full p-1 shadow-xl shadow-black bg-slate-400' : 'hidden'}>
            <button onClick={top} className='flex justify-center items-center rounded-full p-1 bg-slate-800'>
                <ArrowUpward className='animate-bounce' sx={{color:'#38bdf8'}}/>
            </button>
        </div>
    )
}
