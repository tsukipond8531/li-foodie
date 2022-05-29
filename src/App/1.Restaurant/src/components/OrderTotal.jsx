import React, { useState , useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Tooltip, createTheme, ThemeProvider} from '@mui/material';
import { RemoveShoppingCart, AddShoppingCart } from '@mui/icons-material';

//hl4    custom mui........
const Theme = createTheme({
    palette: {
      red: {
          main: '#e91e63',
          contrastText: '#fff'
      },
      blue: {
          main: '#00e5ff',
          contrastText: '#1a237e'
      },
    }
  })  

const OrderTotal = (props) => {

    const state = useLocation().state;
    var order = [];
    order = state.from;

    const amount = props.amount;
    const [gst, setGst] = useState(amount*0.05);
    const [total, setTotal] = useState(amount + gst);

    useEffect(() => {
        setGst(amount*0.05);
    }, [amount])
    
    useEffect(() => {
        setTotal(amount + gst)
    }, [amount,gst])
    
    useEffect(() => {
        props.getTotal([gst,amount])
    },[total])
    
    return(
    <>
        <div className='relative w-auto mt-4 border-t-2 border-gray-800 flex flex-col pl-2'>
            <h1>Order Amount :<span className='txt5'> ₹{amount}</span></h1>
            <h1>sgst 2.5% : <span className='txt5'>₹{parseFloat(gst/2).toFixed(2)}</span></h1>
            <h1>cgst 2.5% : <span className='txt5'>₹{parseFloat(gst/2).toFixed(2)}</span></h1>
            <h1>Service Charge :<span className='txt5'>{`₹0`}</span></h1>
            <div className='absolute top-0 right-0 flex flex-col'>
                <Link to='/cart' state={{from: []}} className='m-1'>
                    <ThemeProvider theme={Theme}>
                        <Tooltip title='Clear Cart' placement='right-start'>
                            <Button variant='contained' color='red'>
                                <RemoveShoppingCart/>
                            </Button>
                        </Tooltip>
                    </ThemeProvider>
                </Link>
                <Link to='/restaurant' state={{from: order}} className='m-1'> 
                    <ThemeProvider theme={Theme}>
                        <Tooltip title='shop more' placement='right-start'>
                            <Button variant='contained' color='blue'>
                                <AddShoppingCart/>
                            </Button>
                        </Tooltip>
                    </ThemeProvider>
                </Link>
            </div>
            <h1 className="txt7 text-2xl font-extrabold text-blue-800 my-1">
                {`Total payable amount : `}<br/>
                <span className='txt3 text-3xl px-1'>
                    {"₹"+Math.round(total)}
                </span>
            </h1>     
        </div>
    </>
    );
}

export {OrderTotal};