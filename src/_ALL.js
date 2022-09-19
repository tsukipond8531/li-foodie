//hl5 this file is use for importing  all other components for Lifoodie.jsx 


import { AuthProvider } from './Context/AuthContext';
import { DataProvider } from './Context/DataContext';
import { Order_ReviewProvider } from './Context/Order_and_ReviewContext';
import Auth_Route from './routes/Auth_PrivateRoute';
import {About, Activity, Branches, Contact, ForgotPassword, Login, Cart, Profile, Restaurant, Signup, Payment, Checkout, Landing ,Error404, UpdateProfile, SubMenu} from './pages/_PAGES'
import { Navbar } from './Core/Navbar'
import { Bubbles, ScrollToTop, TopLoader } from './components/_COMPONENT';

export {AuthProvider, DataProvider, Order_ReviewProvider, Auth_Route, About, Contact, Branches, Signup, Profile, Navbar, Cart, Activity, Restaurant, Login, ForgotPassword, Payment, Checkout, Bubbles, ScrollToTop, Landing, Error404, UpdateProfile, SubMenu, TopLoader }