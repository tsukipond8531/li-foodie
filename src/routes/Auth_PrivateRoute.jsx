//HL5   this route will  check current user is authenticate, then check for profile and if he/she completed his/her profile then all page is accessible, if not then some page will not be visible.

import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'


function Auth_Route({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login"/>;
}
export default Auth_Route;