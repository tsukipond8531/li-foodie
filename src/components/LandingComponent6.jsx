import React from 'react'
import { Link } from 'react-router-dom'
import { TextField, Button, createTheme, ThemeProvider, Tooltip } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Svg10 } from '../svg/svg';
import { SocialMedia } from './SocialMedia';
import { data } from 'autoprefixer';


//hl4    custom mui........
const Theme = createTheme({
  palette: {
    black: {
        main: '#000000',
        contrastText: '#fff'
    },

  }
})  

export function LandingComponent6() {

  function handelSubmit(e) {
    e.preventDefault();

    toast('We will send you our best offers, once a week.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  const d = new Date()

  return (
    <>
      <section className='min-w-full h-auto bg-gradient-to-b from-slate-300 to-slate-500 flex px-4 sm:px-14 pb-8 flex-col'>
        <div className='w-fit h-fit mx-auto flex md:flex-row-reverse flex-col'>
          <div className='mt-8 bg-amber-400 p-6 sm:p-12 shadow-2xl shadow-black'>
              <h1 className='text-4xl font-bold'>RECEIVE OFFERS</h1>
              <h1 className='text-xl mt-8'>Taste the foods of the everyday close to home.</h1>
              <form className='mt-8' onSubmit={handelSubmit}>
                <ThemeProvider theme={Theme}>
                  <TextField  helperText="Please enter your email" variant="standard" color="black" fullWidth={true}
                    label='email' placeholder='your email' type='email'
                    required autoComplete="off"
                    InputProps={{ style: { fontSize: 15, fontWeight: 600 } }}
                    InputLabelProps={{ style: { fontSize: 18, fontWeight: 800 } }}
                    FormHelperTextProps={{ style: { fontSize: 12, fontWeight: 800 } }}/>
                  <div className='mt-6'>
                    <Tooltip title='subscribe to LiFoodie' placement='bottom-end'>
                      <Button type='submit' variant='contained' color='black' fullWidth={true}>Keep Me update</Button>
                    </Tooltip>
                  </div>  
                </ThemeProvider>
              </form>
          </div> 
          <div className='h-full flex justify-center flex-col'>
              <div className='border-4 border-black flex justify-center md:mt-24 mt-8 md:mx-8 mx-0'>
              <ThemeProvider theme={Theme}>
                  <Button color='black'>
                    <Link exact='true' to='/contact' className='text-4xl font-bold txt2 mx-4 my-2'>
                          got any questions ? need help ?                       
                    </Link>
                  </Button>
              </ThemeProvider>
              </div>
              <h1 className='mt-6 text-xl text-center mx-8'>We are here to help. Get in touch!</h1>
              <div className='mt-8 w-14 h-14 mx-auto'>
               <Svg10/>
              </div>
              <div className='mx-auto mt-4'>
                <div className='flex h-fit items-center'>
                  <img src='./icon/icon.png' className='h-18 w-20' alt='icon'/>
                  <img src={require('../css/images/heading2.png')} className='h-12 w-40 -ml-2' alt='icon'/>
                </div>
                <SocialMedia/>
              </div>
          </div>
        </div>
        <ToastContainer />
      </section>
      <h1 className='bg-slate-500 text-center text-white'>&copy;{` LiFoodie ${d.getFullYear()} - Moinak Majumdar`}</h1>  

    </>
  )
}
