import React, { useState } from 'react';
import { Add, Remove, HighlightOff } from '@mui/icons-material';
import { Button, createTheme, ThemeProvider } from '@mui/material';

//hl4    custom mui........
const Theme = createTheme({
    palette: {
      red: {
          main: '#ff1744',
          contrastText: '#fff'
      },
      green: {
          main: '#2196f3',
          contrastText: '#fff'
      },
    }
  })  

const OrderCard = (props) => {


    const [amt, setAmt] = useState(props.quantity);

    const prise = parseInt(props.rate - (props.rate*(props.offer/100)));
    const inc = () => { 
        setAmt(amt+1); 
        props.change(parseInt(prise), props.id, 'add')
    }
    const dec = () => { 
        setAmt(amt-1);
        props.change(parseInt(prise), props.id, 'remove')
    }

    return(
    <>
        <div className='h-auto w-80 sm:w-96 rounded-lg overflow-hidden sm:hover:shadow-2xl shadow-neutral-900 transform transition duration-500 sm:hover:scale-105'>
            <img className="w-full h-44 sm:h-56" src={require(`../images/product-images/${props.img}`)} alt={props.name}></img>                
            <div className='w-full flex justify-between bg-gradient-to-br from-slate-100 to-cyan-300'>
                <div>
                    <h2 className='txt5 text-3xl capitalize m-2 text-indigo-900'>
                        {props.name}
                    </h2>
                    <span className={(props.offer < 1)?'txt3 text-lg ml-2':'txt5 font-semibold text-rose-500 mr-2 line-through ml-2'}>{`₹${props.rate}/plate`}</span>
                    <span className={(props.offer > 0)?'txt3 text-lg':'hidden'}>{`₹${prise}/plate`}</span>
                    <h1 className='txt5 ml-2'>
                        <span className='txt1 text-indigo-600 text-lg'>Total : </span>{`₹${amt*prise}`}
                    </h1>
                </div>
                <div className='my-auto mx-2'>
                    <div className='h-auto rounded-full overflow-hidden'>
                        <ThemeProvider theme={Theme}>
                            <Button variant='contained' color='green' onClick={inc} >
                                <Add/>
                            </Button>
                        </ThemeProvider>
                        <h1 className='txt3 border-x-2 border-gray-900 text-xl text-center animate-pulse'>{"X"+amt}</h1>
                        <ThemeProvider theme={Theme}>
                            <Button variant='contained' color='red' onClick={dec}>
                                {(amt === 1) ? <HighlightOff/>: <Remove/>}
                            </Button>
                        </ThemeProvider>
                    </div>
                </div>
            </div>        
        </div>
    </>
    );
}

export {OrderCard};