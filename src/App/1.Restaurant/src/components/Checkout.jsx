import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Tooltip } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
function Checkout(props) {

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

    const data = [item, props.finalPay]

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

export { Checkout }