//hl5 this file is use for importing  all other components for Lifoodie.jsx 


import { AuthProvider } from './src/Context/AuthContext';
import { HaveProfileProvider } from './src/Context/HaveProfileContext';
import { Order_ReviewProvider } from './src/Context/Order_and_ReviewContext';
import Auth_Route from './src/routes/Auth_PrivateRoute';
import Profile_Route from './src/routes/Profile_PrivateRoute';
import {About, Activity, Branches, Contact, CreateProfile, ForgotPassword, Home, Login, Navbar, Cart, Profile, Restaurant, Signup, Payment, FinalizeOrder, Landing ,Error404, UpdateProfile} from './src/core/_CORE'
import { Bubbles, BubbleDot } from './src/components/_COMPONENT';

export {AuthProvider,HaveProfileProvider,Order_ReviewProvider, Auth_Route, Profile_Route, Home, About, Contact, Branches, Signup, Profile, Navbar, Cart, Activity, Restaurant, Login, ForgotPassword, CreateProfile, Payment, FinalizeOrder, Bubbles, Landing, Error404, UpdateProfile, BubbleDot}