import React from 'react'
import { Link } from 'react-router-dom';
import { useHaveProfile } from '../Context/HaveProfileContext';

const Home_Wlc_msg = () => {

    const { profileData } = useHaveProfile()
   
    return (
        <>
            {profileData && <div className='w-full h-auto flex flex-col'>
                <p className='txt7'>Hello <b className='capitalize text-indigo-800'>{profileData.name}</b>, nice to see you again. We are glad to inform you that we have some special discount menu for you, dont forget to check this out.👨‍🍳</p><br/>
                <p className='txt7'>Once again welcome to <b>LiFoodie</b></p><br/>
                <p className='txt7'><b>Shipping Address: </b><span className='text-blue-800 font-semibold'>{profileData.address}</span></p>
                <p className='txt7'><b>Contact Number: </b><span className='text-blue-800 font-semibold'>{profileData.ph_no}</span></p>
            </div>}
            <div className="my-4 w-full flex justify-center">
                <Link to='/restaurant' state={{from : []}}
                className="px-5 py-2 relative hover:animate-none rounded group text-white font-medium inline-block">
                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                    <span className="relative text-lg">Jump Into Restaurant</span>
                </Link>
            </div>
        </>
    )
}
export {Home_Wlc_msg}