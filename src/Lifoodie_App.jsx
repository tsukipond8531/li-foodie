import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {AuthProvider, DataProvider, Order_ReviewProvider, Auth_Route, About, Contact, Branches, Signup, Profile, Navbar, Cart, Activity, Restaurant, Login, ForgotPassword, Payment, Checkout, Bubbles, ScrollToTop, Landing, Error404, UpdateProfile, SubMenu, TopLoader } from './_ALL'



const LiFoodie = () => {

    const [progress, setProgress] = React.useState(0)
    React.useEffect(() => {
        if(progress > 90) {
            setProgress(0)
        }
    },[progress])

    return(
    <React.Fragment>
       <AuthProvider>  
            <DataProvider >
                <Order_ReviewProvider>
                    <Navbar/>
                    <TopLoader progress={progress}/>
                    <Bubbles/>
                    <ScrollToTop/>   
                    <Routes>
                        <Route path='*' element={<Error404 setProgress={setProgress}/>}/>
                        <Route path='/' element={<Landing setProgress={setProgress}/>}/>
                        <Route exact='true' path="/login" element={<Login setProgress={setProgress}/>}/>
                        <Route exact='true' path='/contact' element={<Contact setProgress={setProgress}/>}/>
                        <Route exact='true' path='/branches' element={<Branches setProgress={setProgress}/>}/>
                        <Route exact='true' path='/signup' element={<Signup setProgress={setProgress}/>}/>
                        <Route exact='true' path='/about' element={<About setProgress={setProgress}/>}/>
                        <Route exact='true' path='/forgot-password' element={<ForgotPassword setProgress={setProgress}/>}/>
                        <Route exact='true' path="/restaurant" element={<Restaurant setProgress={setProgress}/>}/>
                        <Route exact='true' path='/cart' element={<Cart setProgress={setProgress}/>}/> 
                        <Route exact='true' path='/sub-menu' element={<SubMenu setProgress={setProgress}/>}/>                   
                        <Route exact='true' path='/profile' element={
                            <Auth_Route>
                                <Profile setProgress={setProgress}/>
                            </Auth_Route>
                        }/>            
                        <Route exact='true' path='/activity' element={
                            <Auth_Route>                                
                                <Activity setProgress={setProgress}/>
                            </Auth_Route>
                        }/>
                        <Route exact='true' path="/payment" element={
                            <Auth_Route>
                                <Payment setProgress={setProgress}/>
                            </Auth_Route>                                            
                        }/>
                        <Route exact='true' path="/checkout" element={
                            <Auth_Route>
                                <Checkout setProgress={setProgress}/>
                            </Auth_Route>                                                     
                        }/>
                        <Route exact='true' path="/update-profile" element={
                            <Auth_Route>
                                <UpdateProfile setProgress={setProgress}/>
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