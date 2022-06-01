import React,{useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import "../1.Restaurant/css/FontFamily.css"
import {AuthProvider,HaveProfileProvider,Order_ReviewProvider, Auth_Route, Profile_Route, Home, About, Contact, Branches, Signup, Profile, Navbar, Cart, Activity, Restaurant, Login, ForgotPassword, CreateProfile, Payment, FinalizeOrder, Bubbles, Landing, Error404, UpdateProfile } from './_ALL'

const LiFoodie = () => {

    useEffect(() => {
        document.title='LiFoodie.com';
        document.body.style.background = "linear-gradient(to bottom left, #04293A, #064663, #dddddd)";
        document.body.style.backgroundAttachment = 'fixed';
    });

    
    return(
    <React.Fragment>
        <AuthProvider>
            <HaveProfileProvider>
                <Order_ReviewProvider>
                    <Navbar/>
                    <Bubbles/>
                    <Routes>
                        <Route path='*' element={<Error404/>}/>
                        <Route path='/' element={<Landing/>}/>
                        <Route exact='true' path="/login" element={<Login/>}/>
                        <Route exact='true' path='/contact' element={<Contact/>}/>
                        <Route exact='true' path='/branches' element={<Branches/>}/>
                        <Route exact='true' path='/signup' element={<Signup/>}/>
                        <Route exact='true' path='/about' element={<About/>}/>
                        <Route exact='true' path='/forgot-password' element={<ForgotPassword/>}/>
                        <Route exact path="/home" element={
                            <Auth_Route>
                                <Home/>
                            </Auth_Route>
                        }/>
                        <Route exact='true' path='/profile' element={
                            <Auth_Route>
                                <Profile/>
                            </Auth_Route>
                        }/>
                        <Route exact='true' path='/create-profile' element={
                            <Auth_Route>
                                <CreateProfile/>
                            </Auth_Route>
                        }/>
                        <Route exact='true' path="/restaurant" element={
                            <Profile_Route>                                
                                <Restaurant/>
                            </Profile_Route>
                        }/>
                        <Route exact='true' path='/cart' element={
                            <Profile_Route>
                                <Cart/>
                            </Profile_Route>
                        }/>
                        <Route exact='true' path='/activity' element={
                            <Auth_Route>                                
                                <Activity/>
                            </Auth_Route>
                        }/>
                        <Route exact='true' path="/payment" element={
                            <Profile_Route>                                
                                <Payment/>
                            </Profile_Route>
                        }/>
                        <Route exact='true' path="/checkout" element={
                            <Profile_Route>                                
                                <FinalizeOrder/>
                            </Profile_Route>
                        }/>
                        <Route exact='true' path="/update-profile" element={
                            <Profile_Route>                                
                                <UpdateProfile/>
                            </Profile_Route>
                        }/>
                    </Routes>
                </Order_ReviewProvider>
            </HaveProfileProvider>
        </AuthProvider>
    </React.Fragment>
    );
}

export default LiFoodie;