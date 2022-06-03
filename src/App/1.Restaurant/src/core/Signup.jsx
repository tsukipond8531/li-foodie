import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IconButton,TextField,Alert, createTheme, ThemeProvider, Button} from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { RandomImg ,Blob} from "../components/_COMPONENT";
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

const Signup = () => {

  const emailRef = useRef() 
  const passRef = useRef() 
  const cPassRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if(passRef.current.value !== cPassRef.current.value) {
      return setError('Password mismatched');
    }

    try {
      setError('')
      setLoading(true)
      console.log(emailRef.current.value, passRef.current.value)
      await signup(emailRef.current.value, passRef.current.value)
      navigate('/login');
    } catch(err) {
      setError(err.code)
    }
    setLoading(false)
  }
  return (
    <>
      <section className="flex justify-center min-h-screen p-4">
        <div className="sm:mt-40 mt-32 flex-1 h-full max-w-4xl mx-auto bg-gradient-to-b from-slate-300 via-gray-200 to-zinc-400 shadow-2xl shadow-slate-900 rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="h-48 md:h-auto md:w-1/2">
              <RandomImg/>
            </div>
            <form onSubmit={handleSubmit}
              className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 border border-white border-t-0 border-l-0 border-opacity-25">
              <div className="w-full">
                <h1 className="mb-4 text-2xl font-bold text-center text-gray-800">
                  Sign up
                </h1>
                  {error && <Alert severity="error" variant="outlined">{error}</Alert>}
                <div className="mt-4">
                  <ThemeProvider theme={Theme}>
                    <TextField
                        helperText="Please enter your email" variant="standard" fullWidth={true} color="black" 
                        inputRef={emailRef} required
                        label="email" type="email"
                        InputProps={{ style: { fontSize: 15, fontWeight: 600 } }}
                        InputLabelProps={{ style: { fontSize: 18, fontWeight: 600 } }}
                        FormHelperTextProps={{ style: { fontSize: 12} }}
                      />
                  </ThemeProvider>
                </div>
                <div className="mt-4">
                  <ThemeProvider theme={Theme}>
                    <TextField 
                          helperText="Please enter your password" variant="standard" fullWidth={true} color="black" 
                          inputRef={passRef} required autoComplete="off" 
                          label="password" type={showPassword ? 'text' : 'password'}
                          InputProps={{ style: { fontSize: 15, fontWeight: 600 } }}
                          InputLabelProps={{ style: { fontSize: 18, fontWeight: 600 } }}
                          FormHelperTextProps={{ style: { fontSize: 12} }}
                      />
                  </ThemeProvider>
                </div>
                <div className="mt-2 mb-4">
                  <ThemeProvider theme={Theme}>
                  <TextField
                      helperText="password must be matched" color="black" variant="standard" fullWidth={true} 
                      inputRef={cPassRef} required autoComplete="off"
                      label="confirm password" type={showPassword ? 'text' : 'password'}
                      InputProps={{ style: { fontSize: 15, fontWeight: 600 } }}
                      InputLabelProps={{ style: { fontSize: 18, fontWeight: 600 } }}
                      FormHelperTextProps={{ style: { fontSize: 12} }}
                    />
                  </ThemeProvider>
                  <div className="mt-2">
                    <IconButton 
                        aria-label="toggle password visibility"
                        onClick={() =>{setShowPassword(!showPassword)}}>
                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                    </IconButton>
                    <span className="mt-2 hover:text-indigo-600 cursor-pointer" onClick={() =>{setShowPassword(!showPassword)}}>
                      {showPassword ? "Hide Password" : "Show Password"}
                    </span>
                  </div>
                </div>
                <ThemeProvider theme={Theme}>
                  <Button type="submit" disabled={loading} variant="contained" color='black' fullWidth={true}>
                    Sign up
                  </Button>
                </ThemeProvider>
                <div className="w-full mt-2 text-center">
                  <NavLink to="/login"
                    className="text-base text-gray-600 mt-3 cursor-pointer">Already have an account? 
                    <span className="text-indigo-600 underline">Log in</span> 
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

export { Signup };
