//hl5 this file is use for importing  all other components for Lifoodie.jsx 


import { AuthProvider } from './src/Context/AuthContext';
import { DataProvider } from './src/Context/DataContext';
import { Order_ReviewProvider } from './src/Context/Order_and_ReviewContext';
import Auth_Route from './src/routes/Auth_PrivateRoute';
import {About, Activity, Branches, Contact, ForgotPassword, Login, Navbar, Cart, Profile, Restaurant, Signup, Payment, Checkout, Landing ,Error404, UpdateProfile, SubMenu} from './src/core/_CORE'
import { Bubbles, ScrollToTop } from './src/components/_COMPONENT';

export {AuthProvider, DataProvider, Order_ReviewProvider, Auth_Route, About, Contact, Branches, Signup, Profile, Navbar, Cart, Activity, Restaurant, Login, ForgotPassword, Payment, Checkout, Bubbles, ScrollToTop, Landing, Error404, UpdateProfile, SubMenu }