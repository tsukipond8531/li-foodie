import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import { db, storage } from '../Firebase'
import { TextField, Alert, IconButton, Tooltip, createTheme, ThemeProvider, Button} from "@mui/material";
import { PreviewProfileImg } from "../components/_COMPONENT"
import { FormatListNumberedRtlTwoTone, AddAPhoto } from "@mui/icons-material";
import { useData } from "../Context/DataContext";

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

    const navigate = useNavigate();
    const state = useLocation().state;
    const temp = localStorage.getItem('userData');
    const userData = JSON.parse(temp); 
   
    useEffect(() => {
        if(!state) {
            navigate('/profile')
        }
    },[])    
    
    const [name, setName] = useState(userData.displayName);
    const [phno, setPhno] = useState(userData.phoneNumber);
    const [address, setAddress] = useState(userData.address)
    const imgRef = useRef(null);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
   
    const [img, setImg] = useState(null)

    let data = {
        uid: userData.uid,
        displayName: name,
        phoneNumber: phno,
        address: address,
        email: userData.email,
        photoUrl: userData.photoUrl,
        photoName: userData.photoName
    }

    function handelSubmit(e) {
        e.preventDefault()

        if(img === null) {
            uploadWithoutImage()
        } else {
            uploadWithImage()
        }
    }

    //HL4 upload profile with  image  
    function uploadWithImage() { 
        try {
            setError('')
            setLoading(true)
            
            const photoName =`${data.name}_${img.name}`;
            const storageRef = ref(storage, photoName);
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
                        const photoUrl = downloadURL;
                        data.photoUrl = photoUrl;
                        data.photoName = photoName
                        uploadUser(data)
                    })
                }
            )
            async function  uploadUser(args) {
                const docRef = doc(db, data.uid, 'userInfo')
                try {
                    await updateDoc(docRef, {
                        ...args
                    }).then(navigate('/restaurant',{state:{from: []}}))
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

    //hl4   upload without image    
    async function uploadWithoutImage () {
        const docRef = doc(db, data.uid, 'userInfo')
        try {
            setError('')
            setLoading(true)

            await updateDoc(docRef, {
                ...data
            }).then(navigate('/restaurant',{state:{from: []}}))
        } catch(err) {
            setError(err)
            setLoading(FormatListNumberedRtlTwoTone)
        }
    }

    const { getItems } = useData();
    const items = getItems();
    
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
                    <h1 className="text-2xl text-center txt2 font-bold">Update your profile</h1>
                    <div className="mt-2">
                        {error && <Alert severity="error" variant="outlined">{error}</Alert>}
                    </div> 
                    <p className="mt-4 text-center text-sm md:text-base"><span className='text-black font-bold'>Your email:</span><span>{userData.email}</span></p> 
                    <div className="w-full flex justify-between mt-4">
                        <div className="rounded-3xl overflow-hidden flex justify-center items-center">
                           {img && <PreviewProfileImg file={img}/>}
                           {!img && <img className="h-28 w-28" src={userData.photoUrl}/>}                        
                        </div>
                        <div className="mx-auto my-auto">
                            <input hidden type="file" ref={imgRef} accept="image/*" name="image-upload" id="input" onChange={(e) => {setImg(e.target.files[0])}} disabled={loading}/> 
                            <ThemeProvider theme={Theme}>
                                <IconButton color="black" aria-label="upload profile picture" onClick={() => {imgRef.current.click()}}>
                                    <Tooltip title="Upload profile picture 📷">
                                        <AddAPhoto fontSize="large"/>
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
                        <NavLink to="/restaurant" state={{ from : items}}
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
