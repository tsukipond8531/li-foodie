import React, { useState, useRef} from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import { db, storage } from '../Firebase'
import { TextField, Alert, IconButton, Tooltip, createTheme, ThemeProvider, Button} from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { PreviewProfileImg } from "../components/_COMPONENT"
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

const UpdateProfile = () => {

    const navigate = useNavigate()
    const state = useLocation().state; 
    const prevData = state.from;

    const [name, setName] = useState(prevData[0]);
    const [phno, setPhno] = useState(prevData[1]);
    const [address, setAddress] = useState(prevData[2])
    const imgRef = useRef(null);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { currentUser } = useAuth();
    const [img, setImg] = useState(null)


    //HL4 upload image  
    function handelSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            const data = {
                uid: currentUser.uid,
                name: name,
                ph_no: phno,
                address: address,
                email: currentUser.email,
                time: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`
            }
            const imgName =`${data.name}_${img.name}`;
            const storageRef = ref(storage, imgName);
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
                    setLoading(false)
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        const imgUrl = downloadURL;
                        const userData = {...data,imgUrl,imgName}
                        uploadUser(userData)
                    })
                }
            )
            async function  uploadUser(args) {
                try {
                    await setDoc(doc(db, data.uid, 'userInfo'), {
                        ...args
                    }).then(navigate('/home'))
                } catch(err) {
                    setError(err)
                    setLoading(false)
                }
            }
        } 
        catch(err) {
            setError(err.code)
            setLoading(false)
        }
    }
    
  return (
    <>
      <section className="w-full h-auto mt-32 md:mt-40 flex justify-center p-4">
        <div className='flex-1 h-full max-w-4xl mx-auto bg-gradient-to-b from-amber-300 via-yellow-400 to-orange-400 rounded-2xl shadow-2xl shadow-slate-900 overflow-hidden'>
        <div className="flex flex-col md:flex-row">
            <div className="h-0 md:h-auto md:w-1/2">
              <img src={require(`../../css/images/others/foodBg4.png`)} className="h-full w-full object-contain" alt="update-profile-side-image" loading='lazy'/>
            </div>
            <form className="flex items-center justify-center p-4 sm:p-12 md:w-1/2" autoComplete="off" onSubmit={handelSubmit}>
                <div className="w-full">
                    <h1 className="text-2xl text-center txt2">Update your profile</h1>
                    <div className="mt-2">
                        {error && <Alert severity="error" variant="outlined">{error}</Alert>}
                    </div> 
                    <p className="mt-2 text-center"><span className='text-black font-bold'>Your email:</span><span>{currentUser.email}</span></p> 
                    <div className="w-full flex justify-between mt-4">
                        <div className="rounded-3xl overflow-hidden flex justify-center items-center">
                           {img && <PreviewProfileImg file={img}/>}
                           {!img && <img className="h-28 w-28" src={prevData[3]}/>}                        
                        </div>
                        <div className="flex items-center flex-col">
                            <p className="mt-2 text-center">
                                <span className='text-black font-bold'>Email status:</span>
                                <span>{(currentUser.emailVerified)?' Verified':' Unverified'}</span>
                            </p> 
                            <input hidden type="file" ref={imgRef} accept="image/*" name="image-upload" id="input" onChange={(e) => {setImg(e.target.files[0])}} disabled={loading}/> 
                            <ThemeProvider theme={Theme}>
                                <IconButton color="black" aria-label="upload profile picture" onClick={() => {imgRef.current.click()}}>
                                    <Tooltip title="Upload profile picture 📷">
                                        <AddAPhotoIcon fontSize="large"/>
                                    </Tooltip>
                                </IconButton>
                            </ThemeProvider>
                        </div>
                    </div>
                    <div className="mt-2">
                        <ThemeProvider theme={Theme}>
                            <TextField helperText="Please enter your full name" variant="standard" fullWidth={true} color='black' 
                                value={name} onChange={(e) => {setName(e.target.value)}}  required
                                label="name" type="text"
                                InputProps={{ style: { fontSize: 15, fontWeight: 600 } }}
                                InputLabelProps={{ style: { fontSize: 18, fontWeight: 600 } }}
                                FormHelperTextProps={{ style: { fontSize: 12} }}
                            />
                        </ThemeProvider>
                    </div>
                    <div className="mt-2">
                        <ThemeProvider theme={Theme}>
                            <TextField helperText="Please enter your phone no" variant="standard" fullWidth={true} color='black'
                                value={phno} onChange={(e) => {setPhno(e.target.value)}} required
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
                                value={address} onChange={(e) => {setAddress(e.target.value)}} required
                                label="address" type="text"
                                InputProps={{ style: { fontSize: 15, fontWeight: 600 } }}
                                InputLabelProps={{ style: { fontSize: 18, fontWeight: 600 } }}
                                FormHelperTextProps={{ style: { fontSize: 12} }}
                            />
                        </ThemeProvider>
                    </div>                  
                    <div className="mt-8 flex justify-center">
                        <ThemeProvider theme={Theme}>
                            <Button type="submit" disabled={loading} color='black' variant="contained" fullWidth={true}>
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
                </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export { UpdateProfile };
