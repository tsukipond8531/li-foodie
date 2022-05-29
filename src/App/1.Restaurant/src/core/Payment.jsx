import React, { useState, forwardRef , useRef} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Tooltip ,TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Alert} from '@mui/material';
import { Svg8 } from '../svg/svg';
import { useOrder_Review } from '../Context/Order_and_ReviewContext';
import { useHaveProfile } from '../Context/HaveProfileContext';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export function Payment() {
  
  const state = useLocation().state;
  const navigate = useNavigate()
  const amount = state.val
  if(amount < 1) {
    navigate('/restaurant')
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

  //hl5 post review  ..................   
  const reviewRef = useRef()
  const { postReview } = useOrder_Review()
  const { profileData }= useHaveProfile()
  const [error, setError] = useState()
  async function sendReview() {
    setError('')
    const token = [...Array(24)].map(() => Math.floor(Math.random() * 21).toString(26)).join('');
    try {
      const exclusive = 'review';
      const review = reviewRef.current.value;
      const uid = profileData.uid;
      const data = {exclusive, review}
      await postReview(data,uid,token)
      navigate('/')
    } catch(err) {
      setError(err)
      console.log(err)
    }
  }

    return (
      <section className='w-full h-auto flex justify-center sm:px-4 px-2'>
        <div className='sm:mt-36 mt-24 flex-1 h-full max-w-4xl mx-auto bg-gradient-to-b from-slate-200 via-teal-300 to-amber-300 shadow-2xl shadow-zinc-900 rounded-2xl overflow-hidden py-2 '>
            {error && <Alert severity="error" variant="outlined">{error}</Alert>}
            <div className="flex w-full h-auto mt-2 flex-col text-2xl">
              <h1 className='txt8 mx-auto text-indigo-700 font-bold'>Payment</h1>
              <p className='mt-4 mx-auto txt1 text-lg px-2'>
                Thanks for choosing LiFoodie. Please have some patience and cooperate with us 🌺 
              </p>
              <p className='mt-10 mx-auto text-xl'>😆😆😆😆😆😆😆😆😆😆</p>
            </div>
            <p className='mt-4 mx-4 txt1 text-lg'>
              Lol! seriously dude?? you are amazed by those tempting food ?? Special thanks to 
              <a href='https://pixabay.com/' target='_blank' className='mx-2 text-blue-500 underline italic text-xl font-bold'>Pixaby.com</a> Photographers 🤭. Still if you really want to pay
              <span className='mx-2 font-bold'>{`₹${amount}`}</span> badly then....
            </p>
            <div className='ml-4 mt-2 text-xl font-semibold txt8'>
              <h1><span className='text-violet-700'>Upi:</span> moinak.@ybl</h1>
            </div>
            <p className='mx-4 txt1 text-lg'>
              are open to you ❤️. Feel free to pay any amount you wish  😆😆
            </p>
            <div className='w-full mt-4 relative'>
              <div className='absolute bottom-0 right-0 m-1'>
                <Tooltip title={`pay ₹${amount}`} placement='right-start'>
                  <Button endIcon={<QuestionMarkIcon/>} variant="contained" color="secondary" onClick={handleClickOpen}>
                      mystery
                  </Button>
                </Tooltip>
              </div>
              <div className='ml-4 w-fit h-auto'>
                <div className='w-fit h-auto bg-slate-50 bg-opacity-50'>
                  <TextField inputRef={reviewRef} label='write an review..' multiline={true} maxRows={3} placeholder='please brother! have some mercy. :)' color='secondary'/>
                </div>
                <div className='mt-2'>
                  <Button onClick={sendReview} variant='contained' color='info' startIcon={<DynamicFeedIcon/>}>
                      Post
                  </Button>
                </div>
              </div>
            </div>
        </div>
        <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby='lol - msg' className='bg-neutral-900 bg-opacity-70'>
          <DialogTitle>
            <span className='txt1 text-indigo-600'>Thank you for your patience</span>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="lol - description">
              <span className='text-lg txt8 text-zinc-900'>Hello brother thanks for reviewing my project 😃. Keep me encouraged for more shitty project like this.
              See you again at <b>localhost:3000</b><br/><b>PS:</b>Dont forgot those upis. 😏</span>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Bye Bye</Button>
          </DialogActions>
        </Dialog>
        <div className="fixed bottom-0 right-0 -z-10 opacity-30">
          <Svg8/>
        </div>
      </section>
    )
}
