import React, { useState, useEffect } from 'react';
import { useOrder_Review } from '../Context/Order_and_ReviewContext';
import { useAuth } from '../Context/AuthContext';
import { Blob } from '../components/_COMPONENT'
import { Button, createTheme, ThemeProvider } from '@mui/material';
//hl4    custom mui........
const Theme = createTheme({
    palette: {
      black: {
          main: 'rgb(31,41,55)',
          contrastText: '#fff'
      },
  
    }
  })  

const Activity = () => {

    const { getPrevActivity } = useOrder_Review();
    const { currentUser } = useAuth()
    const [showOrder, setShowOrder] = useState(false);
    const [showReview, setShowReview] = useState(false);
    const [data, setData] = useState(false)
    
    useEffect(() => {
       currentUser && setActivity(currentUser.uid)
    },[])

    async function setActivity(uid) {
        try {
            const temp = await getPrevActivity(uid)
            setData(temp)
        } catch(err) {
            console.log(err)
        } 
    }

    function orders () {
        setShowReview(false)
        setShowOrder(true)
    }

    function reviews () {
        setShowOrder(false)
        setShowReview(true)
    }
   
    return(
    <>  
        <section className='w-full min-h-screen flex flex-col px-2'>
            <div className='mx-auto mt-24 bg-white bg-opacity-70 backdrop-blur-sm shadow-2xl shadow-black rounded-lg w-full md:max-w-4xl border-b border-r border-white border-opacity-25'>
                {/* hl5 select order / review */}
                <div className='w-full flex px-6 pt-6 h-fit justify-center flex-col'>
                    <div className='w-full flex justify-center'>
                        <ThemeProvider theme={Theme}>
                            <div className='m-2'>
                                <Button onClick={orders} variant='contained' color='black'>Show orders</Button>
                            </div>
                            <div className='m-2'>
                                <Button onClick={reviews} variant='contained' color='black'>show reviews</Button>
                            </div>
                        </ThemeProvider>
                    </div>
                    <h1 className='text-center text-xs txt1'>*Please reload the page incase you don't find your resent activity.</h1>
                </div>
                {/* hl7 order section */}
                {showOrder && <div className='p-6'>
                    <h1 className='text-2xl md:text-4xl text-center txt1 text-bold'>your previous order summary</h1>
                    {data.order.map((currElm,index) => {
                        return(
                            <div className='p-2 mt-2 border border-slate-900' key={currElm.orderId}>
                                <h1 className="text-bold text-xl txt1 text-pink-500 font-semibold">{`order: ${index+1}`}
                                    <span className='ml-4 txt7 text-base text-black'>{`order Id : ${currElm.orderId}`}</span>
                                </h1>
                                <h1 className='mt-1 txt1'>{`shipping address : ${currElm.shippingAddress}`}</h1>
                                <h1 className='mt-1 txt1'>{`order placed at : ${currElm.placedAt}`}</h1>
                                <span className='mt-1 txt1 text-blue-600'>{`Ordered Items :`}</span>
                                {currElm.orderItems.map((elm,indx) => {
                                    return(
                                        <span className='mt-2 ml-2' key={indx}>
                                            <span>{`${elm.name} `}</span><span className="italic font-bold text-indigo-600">{`X${elm.quantity},`}</span>
                                        </span>                                        
                                    )
                                })}
                                <h1 className='mt-1 txt1'>{`Order status : ${currElm.status}`}</h1>
                                <h1 className='mt-2 txt7 text-lg text-indigo-600'>{`Total amount paid : ₹${currElm.total}`}</h1>
                            </div>
                        )
                        }) 
                    }
                </div>}
                {/* hl6 review section */}
                {showReview && <div className='p-6'>
                    <h1 className='text-2xl md:text-4xl text-center txt1 text-bold'>your previous review summary</h1>
                     {data.review.map((currElm,index) => {
                        return(
                            <div className='p-2 mt-2 border border-slate-900' key={currElm.reviewId}>
                                <h1 className="text-bold text-xl txt1 text-pink-500 font-semibold">{`review no: ${index+1}`}
                                    <span className='ml-4 txt7 text-base text-black'>{`review Id : ${currElm.reviewId}`}</span>
                                </h1>
                                <h1 className='mt-1 txt1'>{`Review : ${currElm.review}`}</h1>
                                <h1 className='mt-1 txt1'>{`posted at : ${currElm.placedAt}`}</h1>
                            </div>
                        )
                    })}                   
                </div>}
            </div>
            <div key='bg' className="relative min-w-full h-full -z-20">
                <div className="fixed top-80 -right-32 h-96 w-96 sm:w-30r sm:h-30r rounded-full bg-gradient-to-b from-slate-100 via-blue-500 to-indigo-900 -z-20 shadow-black shadow-xl"></div>
                <div className="fixed top-80 -right-32 h-96 w-96 sm:w-30r sm:h-30r rounded-full bg-gradient-to-b from-slate-100 via-blue-500 to-indigo-900 -z-20"
                    style={{filter: 'blur(200px)'}}>
                </div>
                <div className="fixed -left-36 top-0 -z-20 w-96 h-96 rounded-full shadow-xl shadow-black"
                    style={{background: 'linear-gradient(#833ab4,#fd1d1d,#fcb045)'}}>
                </div>
                <div className="fixed bottom-72 -left-56">
                    <Blob
                        to='#f2709c'
                        via='#ff0084'
                        form='#33001b'
                    />
                </div>
            </div>
        </section>
    </>
    );
}

export {Activity};