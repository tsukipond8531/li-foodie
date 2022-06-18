import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Tooltip } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


export function UpdateCart(props) {

    const data = [props.finalPay]

    return (
      <div className='relative flex flex-col w-auto'>
        <Link to='/checkout' state={{from: data}} className='absolute right-0 bottom-0 m-1'>
          <Tooltip title='finalize your order and checkout' placement='right-start'>
            <Button variant='contained' color='secondary' endIcon={<ShoppingCartCheckoutIcon/>}>
              Checkout
            </Button>
          </Tooltip>
        </Link>
      </div>
    )
}

