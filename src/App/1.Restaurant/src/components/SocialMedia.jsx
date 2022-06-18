import React from "react";
import { Instagram, Facebook, Twitter, WhatsappOutlined } from "@mui/icons-material";
import Tooltip from '@mui/material/Tooltip';


const SocialMedia = () =>{

    return(
        <ul className='h-full w-full py-4 flex justify-center items-center'>
            <li className='mx-4 cursor-pointer'>
                <a href='#' target='' rel="noreferrer">
                    <Tooltip  title="instagram" placement="bottom">
                        <Instagram className='instagram text-2xl'/> 
                    </Tooltip>
                </a>
            </li>
            <li className='mx-4 cursor-pointer'>
                <a href='https://www.facebook.com/moinak.majumdar.9' target='_blank' rel="noreferrer">
                    <Tooltip  title="facebook" placement="bottom">
                        <Facebook className='facebook text-2xl'/> 
                    </Tooltip>
                </a>
            </li>
            <li className='mx-4 cursor-pointer'>
                <a href="https://twitter.com/messages/compose?recipient_id=moinak005&ref_src=twsrc%5Etfw&text=Hi" target='_blank'>
                    <Tooltip  title="twitter" placement="bottom">
                        <Twitter className='twitter text-2xl'/> 
                    </Tooltip>
                </a>
            </li>
            <li className='mx-4 cursor-pointer'>
                <a href='https://api.whatsapp.com/send?phone=+919804139678&text=Hi' target='_blank' rel="noreferrer">
                    <Tooltip title="whatsapp" placement="bottom">
                        <WhatsappOutlined className='whatsapp text-2x'/>
                    </Tooltip>
                </a>
            </li>
        
        </ul>
    )
}

export {SocialMedia};