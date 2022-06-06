import React, { useState, useEffect, forwardRef} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { useHaveProfile} from '../Context/HaveProfileContext'
import { useAuth } from '../Context/AuthContext';
import { Alert, Tooltip, createTheme, ThemeProvider, Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from "@mui/material";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { Blob } from '../components/_COMPONENT'


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
//hl4    custom mui........
const Theme = createTheme({
    palette: {
      red: {
          main: '#f50057',
          contrastText: '#fff'
      },
      blue: {
        main: '#2962ff',
        contrastText: '#fff'
      },
    }
  })   


const Profile = () => {

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { currentUser, deleteUserAccount, logout } = useAuth();
    const { haveProfile, user_Have_Profile, profileData } = useHaveProfile();
    const [show, setShow] = useState(false) // show will be true if user have already created his profile.
   

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

    //hl2   delete user account 
    const [open, setOpen] = useState(false);
    function handleOpen() { setOpen(true);};
    function handleClose() {setOpen(false);};

    async function deleteAcc () {
        try {
           await deleteUserAccount(currentUser.uid)
           .then(() => {logout()})
        } catch(err) {
            setError(err)
        }
    }

    
    return(
    <>
        <section className="min-h-screen w-full flex flex-col p-4">
            {/* hl7     user have no profile */}
            {!show && <div className='mt-40 max-w-2xl mx-auto p-6 md:p-12 flex justify-center flex-col bg-yellow-300 shadow-2xl shadow-black rounded-sm'>
                <h1 className='text-6xl text-indigo-600 txt7 font-bold'>
                    <span className='text-pink-600 animate-pulse mr-4'>opps!</span> 
                    you need to compleat your profile first buddy .
                </h1>
                <Link exact='true' to='/create-profile' className='mt-10 text-2xl font-bold text-gray-600 txt1 text-center'>
                    compleat your profile
                    <span className='text-blue-500 underline ml-2'>Create Profile</span>
                </Link>     
            </div>}
            {/* hl6     user have  profile */}
            {show && <div className='mx-auto mt-32 max-w-4xl p-6 md:p-12 bg-gradient-to-b from-yellow-300 via-amber-300 to-orange-400 shadow-2xl shadow-slate-900 rounded-xl'>
                <div className="mt-4">
                    {error && <Alert severity="error" variant="outlined">{error}</Alert>}
                </div> 
                <h1 className='text-center text-3xl txt2 font-bold'>Your Profile</h1>
                <div className='flex justify-start mt-4 flex-col md:flex-row'>
                    <img src={profileData.imgUrl} className='w-32 j-32 rounded-xl mt-4 mx-auto md:mx-4'></img>
                    <div className='ml-4 mt-4 md:mt-0 flex flex-col justify-center'>
                        <h1 className='text-2xl md:text-3xl txt7 font-bold text-indigo-600'>{profileData.name}</h1>
                        <h1 className='text-lg md:text-xl txt1'><b>email:</b><span className='txt7 text-indigo-500'>{` ${profileData.email}`}</span></h1>
                        <h1 className='text-lg md:text-xl txt1'><b>phone no:</b><span className='txt7 text-indigo-500'>{` ${profileData.ph_no}`}</span></h1>
                    </div>
                </div>
                <div className='mt-8'>
                    <h1 className='md:text-xl txt1'><b>UID:</b><span className='text-rose-500'>{` ${profileData.uid}`}</span></h1>
                    <h1 className='md:text-xl txt1'><b>Shipping Address:</b><span className='txt7 text-indigo-500'>{` ${profileData.address}`}</span></h1>
                    <h1 className='md:text-xl txt1'><b>Lifoodie member since:</b><span className='txt7 text-indigo-500'>
                    {` ${profileData.time}`}</span></h1>
                </div>
                <div className='mt-8 text-center'>
                    <Link exact='true' to='/update-profile' state={{from: [profileData.name, profileData.ph_no, profileData.address, profileData.imgUrl]}} className='md:text-xl txt1 font-bold text-gray-600 hover:underline'>
                        Update your profile
                        <span className='ml-2 text-blue-500 underline'>Update Profile</span>
                    </Link>
                    <br/>
                    <button onClick={handleOpen} className='mt-8 text-xl txt1 text-gray-600 hover:text-rose-600 hover:underline'>
                        Delete Your Account
                    </button>
                </div>
                <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description" className='bg-slate-800 bg-opacity-50'>
                    <DialogTitle>{"Do you want to delete your LiFoodie account?"}</DialogTitle>
                    <DialogContent>
                        <p className='txt1'>
                            We are really very upset <b>{profileData.name}</b>.<br/>
                            Your opinion is always our first priority, however you can tell use whats wrong. <br/>
                            Please help us by your valuable suggestions. 😄 <br/>
                            <Link exact='true' to='/contact' className='text-xl txt1 underline text-indigo-500'>Suggest us</Link>
                        </p>
                    </DialogContent>
                    <DialogActions>
                        <ThemeProvider theme={Theme}>
                            <Button onClick={handleClose} variant='outlined' color='blue'>
                                cancel
                            </Button>
                            <Tooltip title='delete account'>
                                <Button onClick={deleteAcc} variant='contained' color='red'>
                                    <DeleteSweepIcon/>
                                </Button>
                            </Tooltip>
                        </ThemeProvider>
                    </DialogActions>
                </Dialog>
            </div>}
            <div key='bg' className="relative min-w-full h-full -z-20">
                <div className="fixed top-80 -right-32 h-96 w-96 sm:w-30r sm:h-30r rounded-full bg-gradient-to-b from-slate-100 via-blue-500 to-indigo-900 -z-20 shadow-black shadow-xl"></div>
                <div className="fixed top-80 -right-32 h-96 w-96 sm:w-30r sm:h-30r rounded-full bg-gradient-to-b from-slate-100 via-blue-500 to-indigo-900 -z-20"
                    style={{filter: 'blur(200px)'}}>
                </div>
                <div className="fixed -left-36 top-0 -z-20 w-96 h-96 rounded-full shadow-xl shadow-black"
                    style={{background: 'linear-gradient(#833ab4,#fd1d1d,#fcb045)'}}>
                </div>
                <div className="fixed bottom-72 -left-56">
                    <Blob
                        to='#f2709c'
                        via='#ff0084'
                        form='#33001b'
                    />
                </div>
            </div>
        </section>
    </>
    );
}

export {Profile};