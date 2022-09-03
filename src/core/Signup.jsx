import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { IconButton,TextField,Alert, createTheme, ThemeProvider, Button, Tooltip} from '@mui/material';
import { Visibility, VisibilityOff, AddAPhoto, ArrowCircleRightSharp } from "@mui/icons-material";
import { Blob, PreviewProfileImg } from "../components/_COMPONENT";
import { useAuth } from "../Context/AuthContext";
import { ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import { storage } from '../Firebase'

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
  const nameRef = useRef();
  const addressRef = useRef();
  const phnoRef = useRef();
  const imgRef = useRef(null);
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [msg, setMsg] = useState('')
  const [disable, setDisable] = useState(false)
  const [img, setImg] = useState(null)
  const [showPassword, setShowPassword] = useState(false)


  async function handleSubmit(e) {
    e.preventDefault()

    let data = {
      displayName : nameRef.current.value,
      email : emailRef.current.value,
      phoneNumber : phnoRef.current.value,
      address: addressRef.current.value,
    }

    if(passRef.current.value !== cPassRef.current.value) {
      return setError('Password mismatched');
    }

    try {
      setError('')
      setDisable(true)
      const photoName =`${data.name}_${img.name}`;
      const storageRef = ref(storage, photoName);
      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on('state_changed', 
          (snapshot) => {
              switch (snapshot.state) {
              case 'paused':
                  setError(false)
                  setMsg('Upload is paused');
                  break;
              case 'running':
                setError(false)
                  setMsg('Upload is running');
                  break;
              default:
                  break;
              }
          }, 
          (err) => {
            setMsg(false)
            setError(err);
            setDisable(false)
          }, 
          () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  const photoUrl = downloadURL;
                  const userData = {...data,photoUrl,photoName}
                  createAuth(userData)
              })
          }
      )
      async function  createAuth(args) {
        try {
          await signup(args, passRef.current.value)
          setMsg('Profile Created')
        } catch(err) {
          setMsg(false)
          setError(err.code)
          setDisable(false)
        } 
      }
  
    } catch(err) {
      setError(err.code)
    }
    setDisable(false)
  }
  return (
    <>
      <section className="flex justify-center min-h-screen p-4">
        <div className="sm:mt-40 mt-24 flex-1 h-full max-w-3xl mx-auto bg-gradient-to-b from-amber-300 via-yellow-400 to-orange-400 shadow-2xl shadow-slate-900 rounded-2xl overflow-hidden">
          <h1 className='txt7 my-4 text-xl font-bold text-center text-gray-800 capitalize'>
            Sign up / Create an account
          </h1>
          {msg && <div className="my-6 w-80 mx-auto">
                <Alert severity="success" variant="filled">{msg}</Alert>
          </div> }
          {error && <div className="my-6 w-80 mx-auto">
                <Alert severity="error" variant="outlined">{error}</Alert>
          </div> }
          <form className="grid grid-cols-1 md:grid-cols-2 mb-6" onSubmit={handleSubmit}>
            <div className='px-6'>
              <div className="w-full flex">
                <div className="rounded-xl overflow-hidden flex justify-center items-center">
                  {img && <PreviewProfileImg file={img}/>}
                  {!img && <div className="h-28 w-28 border border-black bg-yellow-200 rounded-xl flex justify-center items-center p-2 cursor-pointer" onClick={() => {imgRef.current.click()}}>
                      <span className="txt7 w-fit font-bold">Profile image is require*</span>
                  </div>}                        
                </div>
                <div className="flex items-center justify-center mx-auto flex-col px-2">
                  <input hidden type="file" ref={imgRef} accept="image/*" name="image-upload" id="input" onChange={(e) => {setImg(e.target.files[0])}} disabled={disable}/> 
                  <ThemeProvider theme={Theme}>
                    <IconButton color="black" aria-label="upload profile picture" onClick={() => {imgRef.current.click()}} required>
                      <Tooltip title="Upload profile picture 📷">
                          <AddAPhoto fontSize="large"/>
                      </Tooltip>
                    </IconButton>
                  </ThemeProvider>
                </div>
              </div>
              <div className='mt-2'>
                <ThemeProvider theme={Theme}>
                    <TextField helperText="Please enter your full name" label="name" type="text"
                        inputRef={nameRef}  required
                        variant="standard" fullWidth={true} color='black' 
                        InputProps={{ style: { fontSize: 15, fontWeight: 600 } }}
                        InputLabelProps={{ style: { fontSize: 18, fontWeight: 600 } }}
                        FormHelperTextProps={{ style: { fontSize: 12} }}
                    />
                </ThemeProvider>
              </div>
              <div className="mt-2">
                <ThemeProvider theme={Theme}>
                    <TextField helperText="Please enter your phone number"  label="phone number" type="tel"
                        inputRef={phnoRef}  required
                        variant="standard" fullWidth={true} color='black' 
                        InputProps={{ style: { fontSize: 15, fontWeight: 600 } }}
                        InputLabelProps={{ style: { fontSize: 18, fontWeight: 600 } }}
                        FormHelperTextProps={{ style: { fontSize: 12} }}
                    />
                </ThemeProvider>
              </div>
                <div className="mt-2">
                  <ThemeProvider theme={Theme}>
                    <TextField
                        helperText="Please enter your email" label="email" type="email"
                        inputRef={emailRef} required autoComplete='email'
                        variant="standard" fullWidth={true} color="black" 
                        InputProps={{ style: { fontSize: 15, fontWeight: 600 } }}
                        InputLabelProps={{ style: { fontSize: 18, fontWeight: 600 } }}
                        FormHelperTextProps={{ style: { fontSize: 12} }}
                      />
                  </ThemeProvider>
                </div>            
            </div>
            <div className="px-6">
                <div className="">
                  <ThemeProvider theme={Theme}>
                    <TextField helperText="Please enter your full address" label="address" type="text"
                        inputRef={addressRef} required
                        variant="standard" fullWidth={true} color='black' 
                        InputProps={{ style: { fontSize: 15, fontWeight: 600 } }}
                        InputLabelProps={{ style: { fontSize: 18, fontWeight: 600 } }}
                        FormHelperTextProps={{ style: { fontSize: 12} }}
                    />
                  </ThemeProvider>
                </div>      
                <div className="mt-2">
                  <ThemeProvider theme={Theme}>
                    <TextField 
                          helperText="Please enter your password"  label="password" type={showPassword ? 'text' : 'password'}
                          inputRef={passRef} required autoComplete='new-Password'
                          variant="standard" fullWidth={true} color="black" 
                          InputProps={{ style: { fontSize: 15, fontWeight: 600 } }}
                          InputLabelProps={{ style: { fontSize: 18, fontWeight: 600 } }}
                          FormHelperTextProps={{ style: { fontSize: 12} }}
                      />
                  </ThemeProvider>
                </div>
                <div className="mt-2">
                  <ThemeProvider theme={Theme}>
                  <TextField
                      helperText="password must be matched" label="confirm password" type={showPassword ? 'text' : 'password'}
                      inputRef={cPassRef} required autoComplete='new-password'
                      color="black" variant="standard" fullWidth={true} 
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
                  <Button type="submit" disabled={disable} variant="contained" color='black' fullWidth={true}>
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
