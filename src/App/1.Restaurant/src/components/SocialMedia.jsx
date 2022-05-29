import React from "react";
import { Instagram, Facebook, Twitter, WhatsappOutlined } from "@mui/icons-material";
import Tooltip from '@mui/material/Tooltip';


const SocialMedia = () =>{

    return(
        <ul className='h-full w-full py-4 flex justify-center items-center'>
            <li className='mx-4 cursor-pointer'>
                <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                    <Tooltip  title="instagram" placement="bottom">
                        <Instagram className='instagram text-2xl'/> 
                    </Tooltip>
                </a>
            </li>
            <li className='mx-4 cursor-pointer'>
                <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                    <Tooltip  title="facebook" placement="bottom">
                        <Facebook className='facebook text-2xl'/> 
                    </Tooltip>
                </a>
            </li>
            <li className='mx-4 cursor-pointer'>
                <a href='https://twitter.com/i/flow/login' target='_blank' rel="noreferrer">
                    <Tooltip  title="twitter" placement="bottom">
                        <Twitter className='twitter text-2xl'/> 
                    </Tooltip>
                </a>
            </li>
            <li className='mx-4 cursor-pointer'>
                <a href='https://web.whatsapp.com/' target='_blank' rel="noreferrer">
                    <Tooltip title="whatsapp" placement="bottom">
                        <WhatsappOutlined className='whatsapp text-2x'/>
                    </Tooltip>
                </a>
            </li>
        
        </ul>
    )
}

export {SocialMedia};