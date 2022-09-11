import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {AuthProvider, DataProvider, Order_ReviewProvider, Auth_Route, About, Contact, Branches, Signup, Profile, Navbar, Cart, Activity, Restaurant, Login, ForgotPassword, Payment, Checkout, Bubbles, ScrollToTop, Landing, Error404, UpdateProfile, SubMenu } from './_ALL'


const LiFoodie = () => {

    return(
    <React.Fragment>
       <AuthProvider>  
            <DataProvider >
                <Order_ReviewProvider>
                    <Navbar/>
                    <Bubbles/>
                    <ScrollToTop/>   
                    <Routes>
                        <Route path='*' element={<Error404/>}/>
                        <Route path='/' element={<Landing/>}/>
                        <Route exact='true' path="/login" element={<Login/>}/>
                        <Route exact='true' path='/contact' element={<Contact/>}/>
                        <Route exact='true' path='/branches' element={<Branches/>}/>
                        <Route exact='true' path='/signup' element={<Signup/>}/>
                        <Route exact='true' path='/about' element={<About/>}/>
                        <Route exact='true' path='/forgot-password' element={<ForgotPassword/>}/>
                        <Route exact='true' path="/restaurant" element={<Restaurant/>}/>
                        <Route exact='true' path='/cart' element={<Cart/>}/> 
                        <Route exact='true' path='/sub-menu' element={<SubMenu/>}/>                   
                        <Route exact='true' path='/profile' element={
                            <Auth_Route>
                                <Profile/>
                            </Auth_Route>
                        }/>            
                        <Route exact='true' path='/activity' element={
                            <Auth_Route>                                
                                <Activity/>
                            </Auth_Route>
                        }/>
                        <Route exact='true' path="/payment" element={
                            <Auth_Route>
                                <Payment/>
                            </Auth_Route>                                            
                        }/>
                        <Route exact='true' path="/checkout" element={
                            <Auth_Route>
                                <Checkout/>
                            </Auth_Route>                                                     
                        }/>
                        <Route exact='true' path="/update-profile" element={
                            <Auth_Route>
                                <UpdateProfile/>
                            </Auth_Route>                             
                        }/>
                    </Routes>
                </Order_ReviewProvider>
            </DataProvider>        
        </AuthProvider>
    </React.Fragment>
    );
}

export default LiFoodie;