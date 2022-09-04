import React, { useState, forwardRef , useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Tooltip ,TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Alert} from '@mui/material';
import { Facebook, GitHub, Email, Phone, LinkedIn, QuestionMark, DynamicFeed, WhatsappOutlined } from '@mui/icons-material';
import { Svg8 } from '../svg/svg';
import { useData } from '../Context/DataContext';
import { useOrder_Review } from '../Context/Order_and_ReviewContext';


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export function Payment() {
  
  const state = useLocation().state;
  const navigate = useNavigate()
  const [amount, setAmount] = useState('')
  const [show, setShow] = useState(false);
  const { getItems, getUser } = useData();
  const items =  getItems();
  useEffect(() => {
      if(!state) {
        navigate('/restaurant')
      } else if(items.length <1){
        navigate('/restaurant')
      } else {
        setShow(true);
        setAmount(state.val);
        localStorage.setItem('item-list', JSON.stringify([]));
      }
  },[])
  
  //hl6 mui component ..................
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    navigate('/')
  };

  //hl5 post review  ..................   
  const reviewRef = useRef()
  const { postReview } = useOrder_Review()
  const [error, setError] = useState()
  const userData = getUser(); 
  async function sendReview(e) {
    e.preventDefault();
    setError('')
    const token = [...Array(24)].map(() => Math.floor(Math.random() * 21).toString(26)).join('');
    try {
      const exclusive = 'review';
      const review = reviewRef.current.value;
      const uid = userData.uid;
      const data = {exclusive, review}
      await postReview(data,uid,token)
      navigate('/')
    } catch(err) {
      setError(err.message)
      console.log(err)
    }
  }

    return (
     <>
       {show && <section className='w-full h-auto flex justify-center sm:px-4 px-2'>
        <div className='sm:mt-36 mt-24 flex-1 h-full max-w-4xl mx-auto bg-gradient-to-b from-slate-200 via-teal-300 to-amber-300 shadow-2xl shadow-zinc-900 rounded-2xl overflow-hidden py-2 '>
            {error &&  <div className= 'm-4'>
              <Alert severity="error" variant="outlined">{error}</Alert>
            </div>} 
            <div className="flex w-full h-auto mt-2 flex-col p-4">
              <h1 className='txt2 mx-auto text-indigo-700 font-bold text-2xl'>Payment</h1>
              <p className='mt-4 txt1 text-lg px-2'>
                Thanks for choosing LiFoodie.🌺 
              </p>
              <p className='mt-4 txt2 font-semibold ml-2'>
                Thanks everyone for reaching till here, this page will be completed after adding some payment getway for paying  <span className='mx-2 font-bold text-indigo-500'>{`₹${amount}`}</span>, but I have decided to end this project here. 😄 Maybe I will  work further more in future. Before ending I would like to thanks 
                <span className='ml-2 txt1 font-bold'>
                1.<a href='https://swiperjs.com/' target='_blank' rel='noreferrer' className='txt1 mx-2 text-blue-500 underline font-bold'>swiper</a>
                2.<a href='https://github.com/jscottsmith/react-scroll-parallax' target='_blank' rel='noreferrer' className='txt1 mx-2 text-blue-500 underline font-bold'>react-scroll-parallax</a>  
                2.<a href='https://github.com/mkosir/react-parallax-tilt' target='_blank' rel='noreferrer' className='txt1 mx-2 text-blue-500 underline font-bold'>react-parallax-tilt</a>  
                3.<a href='https://github.com/lamyfarai/react-typing-effect' target='_blank' rel='noreferrer' className='txt1 mx-2 text-blue-500 underline font-bold'>react-typing-effect</a>  
                4.<a href='https://github.com/fkhadra/react-toastify' target='_blank' rel='noreferrer' className='txt1 mx-2 text-blue-500 underline font-bold'>react-toastify</a> 
                </span> for making awesome react library. And also like to thanks for beautiful images : 
                <a href='https://pixabay.com/' target='_blank' rel='noreferrer' className='txt1 mx-2 text-blue-500 underline font-bold'>Pixaby.com</a>
                and for making ui designing easy 
                1.<a href='https://tailwindcss.com/' target='_blank' rel='noreferrer' className='txt1 mx-2 text-blue-500 underline font-bold'>Tailwindcss</a>
                2.<a href='https://mui.com/' target='_blank' rel='noreferrer' className='txt1 mx-2 text-blue-500 underline font-bold'>Material-UI</a>
                and<a href='https://firebase.google.com/' target='_blank' rel='noreferrer' className='txt1 mx-2 text-blue-500 underline font-bold'>firebase</a>
                for backend support . 😃 
              </p>
            </div>
            <p className='mt-4 mx-4 txt1 text-lg'>
              If you have any suggestions for improvement of this project or having new idea for other projects feel free to connect with me any time. Thank you ❤️
            </p>
            <div className='flex justify-between w-64 ml-8 my-4'>
              <a href='https://github.com/Moinak-Majumdar' target='_blank' rel="noreferrer">
                <Tooltip title='github'>
                  <GitHub/>
                </Tooltip>                  
              </a>
              <a href='mailto:moinak2000@gmail.com' rel="noreferrer">
                <Tooltip title='gmail'>
                  <Email/>
                </Tooltip>                  
              </a>
              <a href='tel:9804139678'>
                <Tooltip title='contact number' rel="noreferrer">
                  <Phone/>
                </Tooltip>                  
              </a>
              <a href='https://www.facebook.com/moinak.majumdar.9' target='_blank' rel="noreferrer">
                <Tooltip title='facebook'>
                  <Facebook/>
                </Tooltip>                  
              </a>
              <a href='https://www.linkedin.com/in/moinak-majumdar-b7a85b238/' target='_blank' rel="noreferrer">
                <Tooltip title='linkedin'>
                  <LinkedIn/>
                </Tooltip>                  
              </a>
              <a href='https://api.whatsapp.com/send?phone=+919804139678&text=Hi' target='_blank' rel="noreferrer">
                <Tooltip title="whatsapp">
                    <WhatsappOutlined/>
                </Tooltip>
              </a>
            </div>
            <div className='w-full mt-4 relative'>
              <div className='absolute bottom-0 right-0 m-1'>
                <Tooltip title={`pay ₹${amount}`} placement='right-start'>
                  <Button endIcon={<QuestionMark/>} variant="contained" color="secondary" onClick={handleClickOpen}>
                      mystery
                  </Button>
                </Tooltip>
              </div>
              <form className='ml-4 w-fit h-auto' autoComplete='off' onSubmit={sendReview}>
                <div className='w-fit h-auto bg-slate-50 bg-opacity-50'>
                  <TextField inputRef={reviewRef} label='write a review..' multiline={true} maxRows={3} placeholder='please brother! have some mercy. :)' color='secondary' required/>
                </div>
                <div className='mt-2'>
                  <Button type='submit' variant='contained' color='info' startIcon={<DynamicFeed/>}>
                      Post
                  </Button>
                </div>
              </form>
            </div>
        </div>
        <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby='lol - msg' className='bg-neutral-900 bg-opacity-70'>
          <DialogTitle>
            <span className='txt1 text-indigo-600'>Thank you for your patience</span>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="lol - description">
              <span className='text-lg txt8 text-zinc-900'>Hello brother thanks for reviewing my project 😃. Keep me encouraged for more shitty project like this.
              See you again at <b>localhost:3000</b><br/><b>PS: </b>stay safe stay happy ❤️</span>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Bye Bye</Button>
          </DialogActions>
        </Dialog>
        <div className="fixed bottom-0 right-0 -z-10 opacity-30">
          <Svg8/>
        </div>
      </section>}
     </>
    )
}
