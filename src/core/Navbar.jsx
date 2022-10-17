import React,{ useRef } from 'react'
import { NavLink, useNavigate} from 'react-router-dom';
import { MenuOpen, Logout, AssignmentInd, Update, ShoppingCart, Cancel, Login } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import "../css/navbar.css";
import { useAuth } from "../Context/AuthContext";
import { useData } from '../Context/DataContext';

const Navbar = () =>{
    
    const { logout, currentUser } = useAuth();
 
    const navigate = useNavigate();
    const { clearItem } = useData();

    function profile () {
        navigate('/profile')
        toggleSidebar('close')
    }   
    function activity () {
        navigate('/activity')
        toggleSidebar('close')
    }
    function cart () {
        navigate('/cart')
        toggleSidebar('close')
    }
    
    async function handleLoginLogout () {
        if(!currentUser) {
            navigate('/login')
            toggleSidebar('close')
        } 
        if(currentUser) {
            try {
                await logout()
                navigate('/')
                clearItem()
            } catch(e) {
                console.log(e)
                alert('Failed to Log out')
            } finally {
                toggleSidebar('close')
            }
        }
    }
    const mobileRef = useRef()
    const tabRef = useRef()
    function toggleSidebar(args) {
        switch(args) {
            case "mobile" : {
               if(mobileRef.current.classList.contains('translate-x-full')){
                    mobileRef.current.classList.remove('translate-x-full')
                    mobileRef.current.classList.add('translate-x-0')
                } else if(!mobileRef.current.classList.contains('translate-x-full')) {
                    mobileRef.current.classList.remove('translate-x-0')
                    mobileRef.current.classList.add('translate-x-full')
                }
                break;
            }
            case "tab" : {
                if(tabRef.current.classList.contains('translate-x-full')){
                    tabRef.current.classList.remove('translate-x-full')
                    tabRef.current.classList.add('translate-x-0')
                } else if(!tabRef.current.classList.contains('translate-x-full')) {
                    tabRef.current.classList.remove('translate-x-0')
                    tabRef.current.classList.add('translate-x-full')
                }
                break;
            }
            case "close" : {
                mobileRef.current.classList.remove('translate-x-0')
                mobileRef.current.classList.add('translate-x-full')
                tabRef.current.classList.remove('translate-x-0')
                tabRef.current.classList.add('translate-x-full')
                break;
            }
            default : 
                console.log('pls')
            
        }
        
    }

    

    return(
        <React.Fragment>
            <nav className='navbar'>
                {/*Hl1 logo */}
                <div className='mx-auto lg:mx-5 xl:mx-16 2xl:mx-40 inline-flex justify-center items-center'> 
                    <button onClick={() => navigate('/')} className='cursor-pointer w-fit flex'>
                        <img src={require('../images/others/heading2.png')} className='h-16 xl:-mt-2 w-40 md:w-44' alt='heading'/>
                    </button>
                </div>
                {/*Hl1 navbar */}
                <section className="ml-auto hidden lg:inline">
                    <ul className="navUl txt9" >
                        <div className='navLi'>
                            <NavLink className='navA navA1' exact='true' activeclassname="active" to='/restaurant' data-text='&nbsp;Home'>&nbsp;Home&nbsp;</NavLink>
                        </div>
                        <div className='navLi'>
                            <NavLink className='navA navA2' exact='true' activeclassname="active" to='/about' data-text='&nbsp;About'>&nbsp;About&nbsp;</NavLink>
                        </div>
                        <div className='navLi'>
                            <NavLink className='navA navA3' exact='true' activeclassname="active" to='/contact' data-text='&nbsp;Contact'>&nbsp;Contact&nbsp;</NavLink>
                        </div>    
                        <div className='navLi'>
                            <NavLink className='navA navA4' exact='true' activeclassname="active" to='/branches' data-text='&nbsp;Branches'>&nbsp;Branches&nbsp;</NavLink>
                        </div>    
                    </ul>
                </section>
                 {/* HL2 hamburger button and side things */}
                <section className='lg:ml-4 min-h-full hidden md:flex justify-center items-center mr-1'>
                    <button onClick={handleLoginLogout} className='mr-2 px-1 border border-pink-500 hover:bg-pink-500 rounded-lg transition-all text-pink-500 hover:text-slate-800 hover:shadow-lg hover:shadow-pink-600'>
                       <span className='txt7 text-lg font-bold '>{currentUser?'Logout':"Login"}</span>
                    </button>
                    <div className='mr-2 cursor-pointer border rounded-md border-amber-300 px-1'>
                        <Tooltip title='Cart' placement='bottom'>
                            <ShoppingCart onClick={cart} style={{fontSize:25}} className="text-amber-300"/>
                        </Tooltip>
                    </div>
                    <div className='mr-4 border border-white rounded-md'>
                        <MenuOpen onClick={() => {toggleSidebar('tab')}} sx={{color: '#FFFFFF'}} style={{fontSize:25}} className='cursor-pointer'/>
                    </div>
                </section>
                <section className='flex min-h-full justify-center items-center md:hidden absolute top-0 right-0'>
                    <div className='mr-4 border border-white rounded-md'>
                        <MenuOpen onClick={() => {toggleSidebar('mobile')}} sx={{color: '#FFFFFF'}} style={{fontSize:25}} className='cursor-pointer'/>
                    </div>
                </section>
            </nav>
            {/* hl4 laptop & tab sideBar */}
            <section ref={tabRef} className='w-1/2 lg:w-fit h-full lg:h-fit fixed top-0 right-0 flex justify-center flex-col bg-slate-800 bg-opacity-90 z-40 transition-transform translate-x-full transform'>
                <button onClick={() => {toggleSidebar('tab')}} className='absolute top-4 right-4 text-pink-500'>
                    <Cancel style={{fontSize:45}}/>
                </button>
                <div className="txt9 mt-36 gap-4 relative flex lg:hidden flex-col ml-8 justify-start w-full" >
                    <div className='navLi'>
                        <NavLink className='navA navA1' onClick={() => {toggleSidebar('close')}} exact='true' activeclassname="active" to='/restaurant' data-text='&nbsp;Home'>&nbsp;Home&nbsp;</NavLink>
                    </div>
                    <div className='navLi'>
                        <NavLink className='navA navA2' onClick={() => {toggleSidebar('close')}} exact='true' activeclassname="active" to='/about' data-text='&nbsp;About'>&nbsp;About&nbsp;</NavLink>
                    </div>
                    <div className='navLi'>
                        <NavLink className='navA navA3' onClick={() => {toggleSidebar('close')}} exact='true' activeclassname="active" to='/contact' data-text='&nbsp;Contact'>&nbsp;Contact&nbsp;</NavLink>
                    </div>    
                    <div className='navLi'>
                        <NavLink className='navA navA4' onClick={() => {toggleSidebar('close')}} exact='true' activeclassname="active" to='/branches' data-text='&nbsp;Branches'>&nbsp;Branches&nbsp;</NavLink>
                    </div>    
                </div>
                <div className='h-full w-full mt-16 lg:mt-40 lg:mr-12 mb-16 flex justify-start ml-12 flex-col gap-4'>
                    <button onClick={profile} className='cursor-pointer w-fit rounded-lg border border-blue-300 px-2 py-1'>
                        <AssignmentInd style={{fontSize:30}} className="text-blue-300"/>                               
                        <span className='text-lg txt8 ml-2 text-blue-300'>My Profile</span>
                    </button>
                    <button onClick={activity} className='cursor-pointer w-fit rounded-lg border border-green-400 px-2 py-1'>                     
                        <Update style={{fontSize:30}} className="text-green-400"/>                       
                        <span className='text-lg txt8 ml-2 text-green-400'>My Activities</span>
                    </button>
                    <button onClick={cart} className='cursor-pointer w-fit rounded-lg border border-amber-300 px-2 py-1'>                        
                        <ShoppingCart style={{fontSize:30}} className="text-amber-300"/>
                        <span className='text-lg txt8 ml-2 text-amber-300'>My Cart</span>
                    </button>
                    <button onClick={handleLoginLogout} className='cursor-pointer w-fit rounded-lg bg-pink-600 px-2 py-1 mt-4' style={{boxShadow :"0 0 35px rgb(219,39,119)"}}>
                        {currentUser?<Logout style={{fontSize:30}} className="text-pink-100"/>:<Login style={{fontSize:30}} className="text-pink-100"/>}
                        <span className='text-xl font-bold txt8 ml-2 text-pink-100'>{currentUser?'Logout':"Login"}</span>
                    </button>
                </div>
            </section>
            {/* HL5     mobile sideBar */}
            <section ref={mobileRef} className='w-full h-full fixed top-0 right-0 flex justify-center flex-col bg-slate-800 bg-opacity-90 z-40 transition-transform translate-x-full transform'>
                <button onClick={() => {toggleSidebar('mobile')}} className='absolute top-4 right-4 text-pink-500'>
                    <Cancel style={{fontSize:45}}/>
                </button>
                <div className="txt9 mt-36 gap-4 relative flex flex-col ml-8 justify-start w-full" >
                    <div className='navLi'>
                        <NavLink className='navA navA1' onClick={() => {toggleSidebar('close')}} exact='true' activeclassname="active" to='/restaurant' data-text='&nbsp;Home'>&nbsp;Home&nbsp;</NavLink>
                    </div>
                    <div className='navLi'>
                        <NavLink className='navA navA2' onClick={() => {toggleSidebar('close')}} exact='true' activeclassname="active" to='/about' data-text='&nbsp;About'>&nbsp;About&nbsp;</NavLink>
                    </div>
                    <div className='navLi'>
                        <NavLink className='navA navA3' onClick={() => {toggleSidebar('close')}} exact='true' activeclassname="active" to='/contact' data-text='&nbsp;Contact'>&nbsp;Contact&nbsp;</NavLink>
                    </div>    
                    <div className='navLi'>
                        <NavLink className='navA navA4' onClick={() => {toggleSidebar('close')}} exact='true' activeclassname="active" to='/branches' data-text='&nbsp;Branches'>&nbsp;Branches&nbsp;</NavLink>
                    </div>    
                </div>
                <div className='h-full w-full mt-16 flex justify-start ml-12 flex-col gap-4'>
                    <button onClick={profile} className='cursor-pointer w-fit rounded-lg border border-blue-300 px-2 py-1'>
                        <AssignmentInd style={{fontSize:30}} className="text-blue-300"/>                               
                        <span className='text-lg txt8 ml-2 text-blue-300'>My Profile</span>
                    </button>
                    <button onClick={activity} className='cursor-pointer w-fit rounded-lg border border-green-400 px-2 py-1'>                     
                        <Update style={{fontSize:30}} className="text-green-400"/>                       
                        <span className='text-lg txt8 ml-2 text-green-400'>My Activities</span>
                    </button>
                    <button onClick={cart} className='cursor-pointer w-fit rounded-lg border border-amber-300 px-2 py-1'>                        
                        <ShoppingCart style={{fontSize:30}} className="text-amber-300"/>
                        <span className='text-lg txt8 ml-2 text-amber-300'>My Cart</span>
                    </button>
                    <button onClick={handleLoginLogout} className='cursor-pointer w-fit rounded-lg bg-pink-600 px-2 py-1 mt-4' style={{boxShadow :"0 0 35px rgb(219,39,119)"}}>
                        {currentUser?<Logout style={{fontSize:30}} className="text-pink-100"/>:<Login style={{fontSize:30}} className="text-pink-100"/>}
                        <span className='text-xl font-bold txt8 ml-2 text-pink-100'>{currentUser?'Logout':"Login"}</span>
                    </button>
                </div>
            </section>
        </React.Fragment>
    )
}

export {Navbar}