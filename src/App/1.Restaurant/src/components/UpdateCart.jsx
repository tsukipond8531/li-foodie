import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Tooltip } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useData } from '../Context/DataContext'

export function UpdateCart(props) {

  const initial = props.initial;
  const added_item = props.added;
  const remove_item = props.removed
  const item = initial.concat(added_item) //hl1   extra added items 
  for(const i of remove_item) //hl6   delete removed items  
  {
    const index = item.indexOf(i);
    if(index > -1) {
      item.splice(index, 1)
    } 
  }

  const[show, setShow] = useState(false);
  const navigate = useNavigate();
  const { getItems } = useData();
  const temp = getItems();

  useEffect (() => {
    if(JSON.stringify(temp) == JSON.stringify(item)) {
      setShow(true)
    } else {
      setShow(false)
    }
  },[])

  function go() {
    if(JSON.stringify(temp) == JSON.stringify(item)){
      const data = [item, props.finalPay]
      navigate('/checkout',{state: {from : data}})
    } else {
       navigate('/restaurant')
    }
  }
    return (
      <>
        {show && <div className='relative flex flex-col w-auto'>
          <div className='absolute right-0 bottom-0 m-1'>
            <Tooltip title='finalize your order and checkout' placement='right-start'>
              <Button onClick={go} variant='contained' disable={!show} color='secondary' endIcon={<ShoppingCartCheckoutIcon/>}>
                Checkout
              </Button>
            </Tooltip>
          </div>
        </div>}
      </>
    )
}

