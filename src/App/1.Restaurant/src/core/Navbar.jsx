import React,{useState} from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { MenuOpen, Cake, AccountCircleSharp, NoAccountsSharp, Logout, AssignmentInd, Update } from '@mui/icons-material';
import { Menu, MenuItem, Button, Tooltip, Badge, styled, createTheme, ThemeProvider} from '@mui/material';
import "../../css/navbar.css";
import { useAuth } from "../Context/AuthContext";
import { SocialMedia } from '../components/_COMPONENT';


const Navbar = () =>{
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const navStyle ="text-2xl hover:text-blue-500 text-teal-400 hover:underline font-medium mx-2"
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const { logout, currentUser } = useAuth();

    const navigate = useNavigate();

    async function handleLogOut () {
        try {
            await logout()
            navigate('/')
        } catch {
            alert('Failed to Log out')
        }
    }
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

    return(
        <React.Fragment>
            <nav className={showMediaIcons?'navbar w-full xl:h-20 lg:h-32  sm:h-1/2 h-1/2 py-1 grid grid-cols-1  lg:grid-cols-3':'navbar w-full h-20 py-1 grid grid-cols-1 lg:grid-cols-3'}>
                {/*Hl1 logo */}
                <div className='xl:px-16 lg:px-5 inline-flex justify-center items-center'> 
                    <Link to='/' className='cursor-pointer w-fit flex items-center'>
                        <Cake fontSize='large' className="text-indigo-600"/>  
                        <h1 className='txt4 text-6xl font-normal px-1 animate-pulse'>
                            <span>L</span>i
                            <span>F</span>oodie
                        </h1>    
                    </Link>
                </div>
                {/*Hl1 navbar */}
                <section className="col-span-1 xl:col-span-1 lg:col-span-2 md-col-span-1 sm:col-span-1">
                    <ul className="capitalize h-full w-full py-4 lg:px-0 sm:px-24 px-16 flex justify-around items-start lg:flex-row sm:flex-col flex-col">
                        <li>
                            <NavLink className={navStyle} activeclassname="active" to='/home' onClick={()=> setShowMediaIcons(!showMediaIcons)}>Home</NavLink>
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
                        <li className='absolute top-0 right-0 pt-2 pr-2 flex ml-4 justify-end items-center xl:hidden cursor-pointer'>
                            <Button onClick={()=> setShowMediaIcons(!showMediaIcons)} aria-label='show more' aria-describedby='show more'>
                                <MenuOpen fontSize='large' className={showMediaIcons?"text-green-500 -rotate-90":"text-red-600 text-2xl"}/>
                            </Button>
                        </li>
                    </ul>
                </section>
                {/*Hl3 social media */}
                <section className='w-full flex justify-between items-center h-auto'>
                    <SocialMedia onClick={()=> setShowMediaIcons(!showMediaIcons)}/>
                    {/* Hl4  profile menu */}
                    <div className='mx-4 cursor-pointer'>
                        <Tooltip title="your account" placement="bottom">   
                            <Button id="fade-button" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>    
                                {(currentUser === null)?
                                    <NoAccountsSharp className='profile' style={{fontSize:30}}/>:
                                    <ThemeProvider theme={Theme}>
                                        <StyledBadge color='green' variant='dot' overlap="circular">
                                            <AccountCircleSharp className='profile' style={{fontSize:30}}/>
                                        </StyledBadge>
                                    </ThemeProvider>
                                }   
                            </Button>  
                        </Tooltip>
                        <Menu id="fade-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)}  onClose={handleClose}  MenuListProps={{'aria-labelledby': 'fade-button',}} >
                            <MenuItem onClick={handleClose}>
                                <Link className="text-blue-700" exact='true' to='/profile'>
                                    <Button onClick={handleClose} startIcon={<AssignmentInd/>}>My profile</Button>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link className="text-blue-700" exact='true' to='/activity'>
                                    <Button onClick={handleClose} startIcon={<Update/>}>My Activity</Button>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleLogOut} >
                                <Button onClick={handleClose} startIcon={<Logout/>}>logout</Button>
                            </MenuItem>
                        </Menu>
                    </div>
                </section>
            </nav>
        </React.Fragment>
    )
}

export {Navbar}