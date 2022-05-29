import React,{ useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import CakeIcon from '@mui/icons-material/Cake';
import { useAuth } from "../Context/AuthContext";
import { useHaveProfile } from "../Context/HaveProfileContext";
import { RandomImgSlider, Home_Wlc_msg , Blob} from "../components/_COMPONENT";
import ReactTypingEffect from 'react-typing-effect';


const Home = () => {

    const [error, setError] = useState('');
    const { currentUser } = useAuth();
    const { haveProfile, user_Have_Profile } = useHaveProfile();
    const [show, setShow] = useState(false) // show will be true if user have already created his profile. 
    const navigate = useNavigate();

    useEffect(() => {
        checkUserHaveProfile(currentUser.uid)
    },[currentUser.uid])
    async function checkUserHaveProfile(params) {
        setError("")
        try{
            await haveProfile(params)
        } catch(err) {
            setError(err)
        }
    }
    useEffect(() => {
        setShow(user_Have_Profile)
    },[user_Have_Profile])


    
    return(
        <>
        <section className="flex justify-center h-auto p-4">
            <div className="mt-32 sm:mt-56 flex-1 h-full max-w-4xl mx-auto bg-slate-200 bg-opacity-70 shadow-2xl shadow-black rounded-2xl overflow-hidden">
                <section className="flex flex-col md:flex-row">
                    <div className="h-full md:h-auto md:w-1/2 flex justify-center items-center">
                        <RandomImgSlider/>
                    </div>
                    {/* Hl1  user  section*/}
                    <div className="flex justify-center py-4 px-6 md:w-1/2 border border-white border-t-0 border-l-0 border-opacity-20">
                        <div className="w-full">
                            <div className="flex flex-col items-center my-2 h-auto w-full">
                                <CakeIcon className="text-pink-600 mx-2" fontSize="large"/>
                                <h1 className="txt1 text-xl sm:text-2xl font-extrabold text-center bg-gradient-to-r bg-clip-text from-pink-500 to-purple-600 text-transparent ">
                                    <ReactTypingEffect 
                                        text={['Happiness with every bite.','love, care and share...']}
                                        speed={200} typingDelay={1000} eraseSpeed={100} eraseDelay={1000}
                                    />
                                </h1>
                            </div>
                            {error && <Alert severity="error">{error}</Alert>}
                            {/* Hl2       no profile found     */}
                            {!show && <div className="txt8 mt-10 flex w-full flex-col">
                                <p className="txt7">Welcome guest 😄. We are glad to welcome you at <b>LiFoodie!</b>. To access the restaurant you need to complete your profile first, trust me it will not take a long. 👨‍🍳</p><br/>
                                <p className="txt7"><b>Your email: </b><span className="text-yellow-400 md:text-rose-500 italic font-bold">{currentUser.email}</span></p>
                                <div className="w-full mt-16 text-center">
                                    <Link to="/create-profile" exact='true'
                                        className="txt7 font-bold text-xl text-gray-800 mt-3 cursor-pointer">Complete your profile : 
                                        <span className="text-indigo-600 underline">Create profile</span> 
                                    </Link>
                                </div>
                            </div>}
                            {/*Hl4       profile found        */}
                            {show && <div className="mt-4 w-full flex flex-col">
                                <Home_Wlc_msg/>
                            </div>}
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <section className="w-full max-h-screen relative overflow-hidden -z-10">
            <div className="fixed w-35r h-35r rounded-full right-56 bottom-20 shadow-black shadow-xl"
            style={{background: "linear-gradient(#00c3ff,#ffff1c,#e94057)"}}>
            </div>
            <div className="fixed w-35r h-35r rounded-full right-56 bottom-20"
            style={{background: "linear-gradient(#00c3ff,#ffff1c,#e94057)",filter: 'blur(250px)'}}></div>
            <div className="fixed w-96 h-96 ml-0 sm:ml-56 sm:left-24 left-24 sm:top-24 top-10">
                <Blob
                    from='#93c5fd'
                    via='#00c3ff'
                    to='#4f46e5'
                />
            </div>
            <div className="fixed w-96 h-96 rounded-full ml-72 -left-80 -bottom-20" 
            style={{background: "linear-gradient(#8a2387,#e94057,#f27121)"}}></div>
            <div className="fixed w-96 h-96 rounded-full ml-72 -left-80 -bottom-20" 
            style={{background: "linear-gradient(#8a2387,#e94057,#f27121)",filter: 'blur(250px)'}}></div>
        </section>
        </>
    )
};

export {Home};
