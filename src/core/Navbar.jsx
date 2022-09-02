import React,{useState } from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { MenuOpen, AccountCircleSharp, NoAccountsSharp, Logout, AssignmentInd, Update } from '@mui/icons-material';
import { Tooltip, Badge, styled, createTheme, ThemeProvider} from '@mui/material';
import "../css/navbar.css";
import { useAuth } from "../Context/AuthContext";
import { useData } from '../Context/DataContext';

//hl5   mui styling component ............
const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
      right: 3,
      top: 8,
      border: `2px solid #1f2937`,
      borderRadius: "10px",
      padding: '4.5px',
    },
  }));
const Theme = createTheme({
  palette: {
    blue: {
        main: '#18ffff',
        contrastText: '#fff'
    },
    green: {
        main: '#00e676',
        contrastText: '#fff'
    },
  }
})  

const Navbar = () =>{
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const navStyle ="text-2xl hover:text-blue-500 text-teal-400 hover:underline font-medium mx-2"
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
        setShowMediaIcons(false)
    };

    const { logout, currentUser } = useAuth();

    const navigate = useNavigate();
    const { clearItem } = useData();

    function profile () {
        navigate('/profile')
        handleClose()
    }

    function activity () {
        navigate('/activity')
        handleClose()
    }
    
    async function handleLogOut () {
        try {
            await logout()
            handleClose()
            navigate('/')
            clearItem()
        } catch {
            handleClose()
            alert('Failed to Log out')
        }
    }


    return(
        <React.Fragment>
            <nav className={showMediaIcons?'navbar w-full xl:h-20 lg:h-32  sm:h-1/2 h-1/2 py-1 grid grid-cols-1  lg:grid-cols-3':'navbar w-full h-20 py-1 grid grid-cols-1 lg:grid-cols-3'}>
                {/*Hl1 logo */}
                <div className='xl:px-16 lg:px-5 inline-flex justify-center items-center'> 
                    <Link to='/' className='cursor-pointer w-fit flex'>
                        <img src={require('../css/images/heading2.png')} className='h-14 w-60 md:w-64' alt='heading'/>
                    </Link>
                </div>
                {/*Hl1 navbar */}
                <section className="col-span-1 xl:col-span-1 lg:col-span-2 md-col-span-1 sm:col-span-1">
                    <ul className="capitalize h-full w-full py-4 lg:px-0 sm:px-24 px-16 flex justify-around items-start lg:flex-row sm:flex-col flex-col">
                        <li>
                            <NavLink className={navStyle} activeclassname="active" to='/restaurant' onClick={()=> setShowMediaIcons(!showMediaIcons)}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={navStyle} exact='true' activeclassname="active" to='/about' onClick={()=> setShowMediaIcons(!showMediaIcons)}>About</NavLink>
                        </li>
                        <li>
                            <NavLink className={navStyle} exact='true' activeclassname="active" to='/contact' onClick={()=> setShowMediaIcons(!showMediaIcons)}>Contact</NavLink>
                        </li>    
                        <li>
                            <NavLink className={navStyle} exact='true' activeclassname="active" to='/branches' onClick={()=> setShowMediaIcons(!showMediaIcons)}>Branches</NavLink>
                        </li>    
                        {/* HL2 hamburger button */}
                        <li className='absolute top-0 right-0 flex justify-end items-center xl:hidden cursor-pointer'>
                            <MenuOpen onClick={()=> setShowMediaIcons(!showMediaIcons)} fontSize='large' className={showMediaIcons?"text-green-500 -rotate-90":"text-red-600 text-2xl"}/>
                        </li>
                    </ul>
                </section>
                {/*Hl3 social media */}
                <section className='w-full flex justify-between items-center h-auto'>
                    <ul className='h-full w-full py-4 flex justify-center items-center'>
                        <li className='mx-4 cursor-pointer'>
                            <Tooltip title="My profile" placement="bottom">
                                <AssignmentInd onClick={profile} style={{fontSize:30}} className="text-blue-300"/>                               
                            </Tooltip>
                        </li>
                        <li className='mx-4 cursor-pointer'>
                            <Tooltip title="My activities" placement="bottom">
                                <Update onClick={activity} style={{fontSize:30}} className="text-green-300"/>
                            </Tooltip>
                        </li>
                        <li className='mx-4 cursor-pointer'>
                            <Tooltip title="logout" placement="bottom">
                                <Logout onClick={handleLogOut} style={{fontSize:30}} className="text-pink-600"/>
                            </Tooltip>
                        </li>
                    </ul>
                    {/* Hl4  profile menu */}
                    <div className='mx-8 cursor-pointer'>     
                        {(currentUser === null)?
                            <NoAccountsSharp className='profile' style={{fontSize:30}}/>:
                            <ThemeProvider theme={Theme}>
                                <StyledBadge color='green' variant='dot' overlap="circular">
                                    <AccountCircleSharp className='profile' style={{fontSize:30}}/>
                                </StyledBadge>
                            </ThemeProvider>
                        }                       
                    </div>
                </section>
            </nav>
        </React.Fragment>
    )
}

export {Navbar}