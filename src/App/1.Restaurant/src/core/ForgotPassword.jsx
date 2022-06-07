import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { TextField, Alert, ThemeProvider, createTheme, Button } from '@mui/material';
import { RandomImg, Blob} from "../components/_COMPONENT";
import { useAuth } from "../Context/AuthContext";

//hl4    custom mui........
const Theme = createTheme({
  palette: {
    black: {
        main: '#000000',
        contrastText: '#fff'
    },

  }
})  

const ForgotPassword = () => {

  const emailRef = useRef() 
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  
  
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setMessage('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('Check your inbox for further instructions');
    } catch(err) {
      setError(err.code)
    }
    setLoading(false)
  }

  return (
    <>
      <section className="flex justify-center min-h-screen p-4">
        <div className="mt-40 flex-1 h-full max-w-4xl mx-auto bg-gradient-to-b from-slate-300 via-gray-200 to-zinc-400  shadow-2xl shadow-slate-900 rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="h-48 md:h-auto md:w-1/2">
              <RandomImg/>
            </div>
            <form onSubmit={handleSubmit}
              className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 ">
              <div className="w-full">
                <div className="flex justify-center">
                  <img src='./icon/logo512.png' className='h-12 w-12'/>
                </div>
                <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                  Reset Password
                </h1>
                  {error && <Alert severity="error" >{error}</Alert>}
                  {message && <Alert severity="" >{message}</Alert>}
                <div className="my-4">
                  <ThemeProvider theme={Theme}>
                    <TextField
                        helperText="Please enter your email" variant="standard" fullWidth={true} color='black'
                        aria-level='user-email' 
                        inputRef={emailRef} required
                        label="email" type="email"
                        InputProps={{ style: { fontSize: 15, fontWeight: 600 } }}
                        InputLabelProps={{ style: { fontSize: 18, fontWeight: 600 } }}
                        FormHelperTextProps={{ style: { fontSize: 12} }}
                      />
                  </ThemeProvider>
                </div>
                <ThemeProvider theme={Theme}>
                  <Button type="submit" disabled={loading} fullWidth={true} variant='contained' color='black'>
                    Reset Password
                  </Button>
                </ThemeProvider>
                <div className="w-full mt-2 text-center">
                  <NavLink to="/login"
                    className="text-base text-gray-500 mt-3 cursor-pointer">Want to?
                    <span className="text-indigo-500 hover:underline">Log in</span> 
                  </NavLink>
                </div>
                <div className="w-full mt-2 text-center">
                  <NavLink to="/signup"
                    className="text-base text-gray-500 mt-3 cursor-pointer">Need an account? 
                    <span className="text-indigo-500">Sign up</span> 
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="max-h-screen max-w-full relative -z-20">
        <div className="fixed sm:top-20 top-10 sm:left-56 left-0">
            <Blob
                from='#00F260'
                via='#78ffd6'
                to='#0575E6'
            />
        </div>
        <div className="fixed w-96 sm:w-30r h-96 sm:h-30r rounded-full -right-40 top-96 shadow-black shadow-2xl"
          style={{background: 'linear-gradient(#0072ff,#061161,#190A05'}}>
        </div>
        <div className="fixed w-96 sm:w-30r h-96 sm:h-30r rounded-full -right-40 top-96"
          style={{background: 'linear-gradient(#0072ff,#061161,#190A05',filter:'blur(200px)'}}>
        </div>
        <div className='fixed sm:-bottom-12 -bottom-40 sm:-left-12 -left-20 w-72 h-72 rounded-full shadow-black shadow-2x'
          style={{background: 'linear-gradient(#fc6767,#ec008c)'}}>
        </div>
        <div className='fixed sm:-bottom-12 -bottom-40 sm:-left-12 -left-20 w-72 h-72 rounded-full'
          style={{background: 'linear-gradient(#fc6767,#ec008c)',filter:'blur(100px)'}}>
        </div>
      </div>
    </>
  );
};

export { ForgotPassword };
