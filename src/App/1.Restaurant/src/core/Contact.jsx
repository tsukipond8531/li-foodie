import React, { useRef, useState, forwardRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { SocialMedia } from '../components/_COMPONENT';
import { Button, ThemeProvider, createTheme, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Alert} from '@mui/material';
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../Firebase'
import { Svg3 } from '../svg/svg';

const Theme = createTheme({
    palette: {
      neutral: {
          main: '#000000',
          contrastText: '#fff',
        }
    }
})  
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

const Contact = () => {

    const navigate = useNavigate();
    const nameRef = useRef();
    const emailRef = useRef();
    const msgRef = useRef();
    const [error, setError] = useState('')

    async function handelSubmit(e) {
        e.preventDefault();
        setError('')
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: msgRef.current.value
        }

        try { 
            await setDoc(doc(db, 'contact-mail', data.email), {
                ...data, 
                time: serverTimestamp()
            }).then(handleClickOpen())
        } catch(err) {
            setError(err)
        }

        console.log(data)
    }

     //hl6 mui component ..................
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        navigate('/')
    };

    return(
    <>  
        <section className="flex justify-center min-h-screen p-4 flex-col">
            <div className="mt-32 flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-teal-200">Connect With Us</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-400">Need help? We are ready for your command.</p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                {error && <Alert severity="error" variant="outlined">{error}</Alert>}
                <form className="flex flex-wrap -m-2" onSubmit={handelSubmit}>
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="name" className="leading-7 text-sm text-violet-200">Name</label>
                            <input type="text" ref={nameRef} required className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-800 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" aria-autocomplete='name'/>
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="email" className="leading-7 text-sm text-violet-200">Email</label>
                            <input type="email" ref={emailRef} required className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-800 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" aria-autocomplete='email'/>
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <div className="relative">
                            <label htmlFor="message" className="leading-7 text-sm text-violet-200">Message</label>
                            <textarea ref={msgRef} required className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-800 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                    </div>
                    <div className="py-2 px-2 md:w-72 w-full h-auto mx-auto">
                        <ThemeProvider theme={Theme}>
                            <Button type='submit' color='neutral' fullWidth={true} variant='contained'>
                                Send
                            </Button>
                        </ThemeProvider>
                    </div>
                    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 flex flex-col">
                        <a className="text-pink-300 mx-auto text-lg font-bold txt1">moinak2000@gmail.com</a>
                        <p className="leading-normal my-5 mx-auto txt1">
                                Santinagar Palta. <br/>North 24 Pgs West Bengal, India
                        </p>
                        <div className='bg-slate-800 w-fit mx-auto rounded-lg shadow-2xl shadow-black'>
                            <SocialMedia/>
                        </div>
                    </div>
                </form>
            </div>
            <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby='lol - msg' className='bg-neutral-900 bg-opacity-70'>
                <DialogTitle>
                    <span className='txt1 text-indigo-600'>Thank for raising query</span>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="lol - description">
                        <span className='text-lg txt8 text-zinc-900'>Hello user thanks for connecting with use. Your query have been send to LiFoodie team, wait for them to reply soon.<br/>
                        <b>PS: </b>stay safe stay happy ❤️</span>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
            {/* Hl4     svg */}'
            <div className='fixed bottom-0 left-0 opacity-40 -z-10'>
                <Svg3/>
            </div>
        </section>
    </>
    );
}

export {Contact};