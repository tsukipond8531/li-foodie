import React, { useState, useRef, useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import { db, storage } from '../Firebase'
import { TextField, Alert, IconButton, Tooltip, createTheme, ThemeProvider, Button} from "@mui/material";
import { Cancel, AddAPhoto, DoneAll } from "@mui/icons-material";
import {RandomImg, PreviewProfileImg } from "../components/_COMPONENT"
import { useAuth } from "../Context/AuthContext";



//hl6    custom mui........
const Theme = createTheme({
    palette: {
      black: {
          main: '#000000',
          contrastText: '#fff'
      },
    }
  })  

const CreateProfile = () => {

    const navigate = useNavigate() 
    const name = useRef();
    const address = useRef();
    const phno = useRef();

    const imgRef = useRef(null);
    const [error, setError] = useState('')
    const [disable, setDisable] = useState(true)
    const [display, setDisplay] = useState(true)
    const { currentUser, emailVerification } = useAuth();
    const [img, setImg] = useState(null)

    useEffect(() => {
        if(currentUser.emailVerified === true) {
            setDisable(false)
            setDisplay(false)
        } else {
            setDisable(true)
            setDisplay(true)
        } 
    },[currentUser])

    async function verifyEmail(e) {
        e.preventDefault()
        setError('');
        setDisable(true)

        try {
            await emailVerification(currentUser)
                .then(setError('please check your inbox(spam) for further information and reload the page after verification'))
        } catch(err) {
            setError(err.code)
        }
    }

    //HL4 upload image  
    function handelSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            setDisable(true)
            const data = {
                uid: currentUser.uid,
                name: name.current.value,
                phone_Number: phno.current.value,
                address: address.current.value,
                email: currentUser.email,
                time: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`
            }
            // createProfile(currentUser.uid, name.current.value, phno.current.value, address.current.value, currentUser.email,img,serverTimestamp())
            const photo_Name =`${data.name}_${img.name}`;
            const storageRef = ref(storage, photo_Name);
            const uploadTask = uploadBytesResumable(storageRef, img);
            uploadTask.on('state_changed', 
                (snapshot) => {
                    switch (snapshot.state) {
                    case 'paused':
                        setError('Upload is paused');
                        break;
                    case 'running':
                        setError('Upload is running');
                        break;
                    default:
                        break;
                    }
                }, 
                (err) => {
                    setError(err);
                    setDisable(false)
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        const photo_Url = downloadURL;
                        const userData = {...data,photo_Url,photo_Name}
                        uploadUser(userData)
                    })
                }
            )
            async function  uploadUser(args) {
                try {
                    await setDoc(doc(db, data.uid, 'userInfo'), {
                        ...args
                    }).then(navigate('/login'))
                } catch(err) {
                    setError(err)
                    setDisable(false)
                }
            }
           
        } 
        catch(err) {
            setError(err.code)
            setDisable(false)
        }
    }
    
  return (
    <>
      <section className="w-full h-auto mt-32 md:mt-40 flex justify-center p-4">
        <div className='flex-1 h-full max-w-4xl mx-auto bg-gradient-to-b from-slate-300 via-gray-200 to-zinc-400 rounded-2xl shadow-2xl shadow-slate-900 overflow-hidden'>
        <div className="flex flex-col md:flex-row">
            <div className="h-48 md:h-auto md:w-1/2">
              <RandomImg/>
            </div>
            <form className="flex items-center justify-center p-4 sm:p-8 md:w-1/2" autoComplete="off" onSubmit={handelSubmit}>
                <div className="w-full">
                    <h1 className="text-2xl text-center txt2">Create your profile</h1>
                    <p className='text-center mt-2'><span className="text-blue-500 font-bold">Your email:</span><span className='ml-2'>{currentUser.email}</span></p>
                    <div className="mt-2">
                        {error && <Alert severity="error" variant="outlined">{error}</Alert>}
                    </div>  
                    <div className="w-full flex  mt-4">
                        <div className="rounded-xl overflow-hidden flex justify-center items-center">
                           {img && <PreviewProfileImg file={img}/>}
                           {!img && <div className="h-28 w-28 border border-black bg-slate-300 rounded-xl flex justify-center items-center p-2">
                                <span className="txt1 w-fit font-bold">Profile image is required*</span>
                           </div>}                        
                        </div>
                        <div className="flex items-center justify-center mx-auto flex-col px-2">
                            <p><b className="text-blue-500 text-xl txt2">Email status:</b>
                                {display? <span className="ml-2">Unverified <Cancel color="error"/></span> : <span className="ml-2">Verified <DoneAll color="success"/></span>}
                            </p>
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
                    {/* hl1 verifying user email  */}
                    {display && <section className='mt-8'>
                        <div className="mt-4">
                            <Button variant='contained' fullWidth={true} disabled={!disable} onClick={verifyEmail}>verify my email</Button>
                        </div>
                    </section>}
                    {/* hl6 getting other info after email verification */}
                    {!display && <section className="mt-2">
                        <div>
                            <ThemeProvider theme={Theme}>
                                <TextField helperText="Please enter your full name" variant="standard" fullWidth={true} color='black' 
                                    inputRef={name}  required
                                    label="name" type="text"
                                    InputProps={{ style: { fontSize: 15, fontWeight: 600 } }}
                                    InputLabelProps={{ style: { fontSize: 18, fontWeight: 600 } }}
                                    FormHelperTextProps={{ style: { fontSize: 12} }}
                                />
                            </ThemeProvider>
                        </div>
                        <div className="mt-2">
                            <ThemeProvider theme={Theme}>
                                <TextField helperText="Please enter your phone number" variant="standard" fullWidth={true} color='black'
                                    inputRef={phno}  required
                                    label="phone number" type="text"
                                    InputProps={{ style: { fontSize: 15, fontWeight: 600 } }}                           
                                    InputLabelProps={{ style: { fontSize: 18, fontWeight: 600 } }}
                                    FormHelperTextProps={{ style: { fontSize: 12} }}
                                />
                            </ThemeProvider>
                        </div>
                        <div className="mt-2">
                            <ThemeProvider theme={Theme}>
                                <TextField helperText="Please enter your full address" variant="standard" fullWidth={true}      color='black' 
                                    inputRef={address} required
                                    label="address" type="text"
                                    InputProps={{ style: { fontSize: 15, fontWeight: 600 } }}
                                    InputLabelProps={{ style: { fontSize: 18, fontWeight: 600 } }}
                                    FormHelperTextProps={{ style: { fontSize: 12} }}
                                />
                            </ThemeProvider>
                        </div>                  
                        <div className="mt-8 flex justify-center">
                            <ThemeProvider theme={Theme}>
                                <Button type="submit" disabled={disable} color='black' variant="contained" fullWidth={true}>
                                    Submit
                                </Button>
                            </ThemeProvider>
                        </div>
                        <div className="w-full mt-2 text-center">
                            <NavLink to="/home"
                                className="text-base text-gray-500 mt-3 cursor-pointer">Done for now? 
                                <span className="text-indigo-500"> Home</span> 
                            </NavLink>
                        </div>
                    </section>}
                </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export { CreateProfile };
