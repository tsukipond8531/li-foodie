import React, { useEffect, useState, forwardRef } from 'react'
import { useNavigate, useLocation} from 'react-router-dom';
import { Food } from '../../API/FoodDB';
import { Svg8 } from '../svg/svg';
import { useOrder_Review } from '../Context/Order_and_ReviewContext';
import { useHaveProfile } from '../Context/HaveProfileContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, tableCellClasses, styled, Slider , Button, createTheme, ThemeProvider, Alert, Dialog, DialogActions, DialogContent, DialogTitle, Slide} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Blob } from '../components/_COMPONENT'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const Theme = createTheme({
    palette: {
      neutral: {
          main: 'rgb(41,51,55)',
          contrastText: '#fff',
        },
      vio: {
          main: '#03a9f4',
          contrastText: '#fff'
      },
    }
})  

export function FinalizeOrder() {

    const state = useLocation().state;
    const navigate = useNavigate()
    var data = [];
    data = state.from;
    if(data.length < 1) {
        navigate('/home')
    }
    //hl6       items and other payment details     
    const item = data[0]
    const payment_data = data[1]
    const gst = payment_data[0];
    const total = payment_data[1]
    const [tip, setTip] = useState(10)
    const [grandTotal, setGrandTotal] = useState(total + gst + tip); 
    //hl7   get items info ......
    const item_quantity_pair = {};
    for (const elm of item) 
    {
        if (item_quantity_pair[elm]) 
        {
            item_quantity_pair[elm] += 1;
        } 
        else 
        {
            item_quantity_pair[elm] = 1;
        }
    }
    let temp1 = [... new Set(item)]
    const names = temp1.sort((a, b) => { return a - b;});
    const item_quantity = Object.values(item_quantity_pair);
    const menu = Food;
    var list = [];
    var list2 = [];
    var i;
    
    let orderAmount = 0;
    for(i = 0; i <= names.length; i = i+1)
    {
        const elm = names[i];
        menu.map(fnc)
        function fnc(a)
        {
            if(elm == a.id)
            {
                const name = a.name;
                const rate = a.rate;
                const offer = a.offer;
                const quantity = item_quantity[i];
                const prise = parseInt(rate - (rate*(offer/100)))
                let cost = 0;
                if(offer > 0){
                    cost = parseInt((rate - (rate*(offer/100)))*quantity);
                    
                } else {
                    cost = parseInt(rate*quantity);
                }
                orderAmount += cost;
                list.push({name,prise,quantity,cost})
                list2.push({name,quantity})
            }
        }
    }
    //hl6   adjust tip ......   
    function adjustTip(value) {
        setTip(value)
    }
    useEffect(() => {
        setGrandTotal(total + gst + tip)
    },[tip]);
    //hl1     place order ...........
    const {placeOrder} = useOrder_Review();
    const { profileData }= useHaveProfile()
    const [error, setError] = useState()

    async function putOrder() {
        setError('')
        const token = [...Array(24)].map(() => Math.floor(Math.random() * 21).toString(26)).join('');
        try{
            const exclusive = 'order'; 
            const status = 'ok';
            const shippingAddress = profileData.address;
            const totalAmount = Math.round(grandTotal);
            const uid = profileData.uid;
            const userEmail = profileData.email;
            const userName = profileData.name;
            const userPhNo = profileData.ph_no;
            const orderItems = list2
            const data = {status,userName,userEmail,userPhNo,totalAmount,shippingAddress,orderItems,exclusive}
            await placeOrder(data,uid,token)
            navigate('/payment',{state: {val: grandTotal}})
        } catch(err) {
            setError(err)
            console.log(err)
        }
          
    }
    //hl5   mui styling component .............................
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#1f2937',
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));  
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
    //hl2  tip alert .......................
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    useEffect(() => {
        handleClickOpen()
    },[])
  
    return (
        <>
            <section className='relative w-full min-h-screen flex justify-center sm:px-4 px-2'>
                <div className='sm:mt-36 mt-24 flex-1 h-full max-w-4xl mx-auto shadow-2xl bg-gradient-to-br from-pink-300 via-cyan-300 to-green-400 shadow-zinc-900 rounded-2xl overflow-hidden py-2 '>
                    <div className="flex w-full h-auto justify-center text-2xl mt-2">
                        <h1 className='txt8'>Order Summary</h1>
                    </div>
                    {error && <Alert severity="error" variant="outlined">{error}</Alert>}
                    <div className='w-full flex justify-center mt-2 sm:px-4 px-1'>
                        <TableContainer component={Paper}>
                            <Table size="small" aria-label="order summary table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>No</StyledTableCell>
                                        <StyledTableCell align="right">Item Name</StyledTableCell>
                                        <StyledTableCell align="right">Rate</StyledTableCell>
                                        <StyledTableCell align="right">Quantity</StyledTableCell>
                                        <StyledTableCell align="right">Total</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {list.map((currElm, index) => (
                                        <StyledTableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <StyledTableCell component="th" scope="row">{index+1}</StyledTableCell>
                                            <StyledTableCell align="right">{currElm.name}</StyledTableCell>
                                            <StyledTableCell align="right">₹{currElm.prise}</StyledTableCell>
                                            <StyledTableCell align="right">X{currElm.quantity}</StyledTableCell>
                                            <StyledTableCell align="right">₹{currElm.cost}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className='relative w-full mt-4 sm:px-4 px-0'>
                        <div className='border-t-2 border-slate-800'>
                            <h1 className='ml-2 mt-1'>Order Amount :<span className='txt5'> ₹{orderAmount}</span></h1>
                            <h1 className='ml-2'>sgst 2.5% : <span className='txt5'>₹{parseFloat(gst/2).toFixed(2)}</span></h1>
                            <h1 className='ml-2'>cgst 2.5% : <span className='txt5'>₹{parseFloat(gst/2).toFixed(2)}</span></h1>
                            <h1 className='ml-2'>Tip : <span className='txt5'>₹{tip}</span></h1>
                            <div className=' sm:w-80 w-full px-3'>
                                <ThemeProvider theme={Theme}>
                                    <Slider aria-label="Temperature" defaultValue={10} getAriaValueText={adjustTip}
                                            valueLabelDisplay="auto" step={5} min={0} max={100} marks color='neutral'
                                    />
                                </ThemeProvider>
                            </div>
                            <h1 className="txt1 text-2xl text-blue-600 my-1">
                                {`Total payable amount : `}<br/>
                                <span className='txt3 mx-2'>
                                    {"₹"+Math.round(grandTotal)}
                                </span>
                            </h1> 
                        </div>
                        <div className='absolute bottom-0 right-0 mr-2'>
                            <ThemeProvider theme={Theme}>
                                <Button endIcon={<SendIcon/>} variant='contained' color='vio' onClick={putOrder}  aria-label='payment'>Pay now</Button>
                            </ThemeProvider>             
                        </div> 
                    </div>        
                </div>
                {/* Hl3     svg ......................................*/}
                <div className="fixed bottom-0 right-0 -z-20 opacity-30">
                    <Svg8/>
                </div>
                <div className="-z-10 fixed top-3/4 md:right-1/3">
                        <Blob
                            from='#4ade80'
                            via='rgb(103,232,249)'
                            to='rgb(249,168,212)'
                        />
                </div>    
                <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">
                    <DialogTitle className='text-indigo-500'>Adjust your tip bar</DialogTitle>
                    <DialogContent>
                        <h1 className='txt7 font-bold text-lg'>
                           Default tip amount set to ₹10 . However you can adjust it between ₹0 to ₹100. 😄
                        </h1>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>ok</Button>
                    </DialogActions>
                </Dialog>
            </section>
        </>
    )
}
