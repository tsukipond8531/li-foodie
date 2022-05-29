//HL5   this route will  check current user do have profile or not, if profile found then all page is accessible, if not then some page will not be visible.

import React from 'react'
import { Navigate } from 'react-router-dom'
import { useHaveProfile } from '../Context/HaveProfileContext'

function Profile_Route ({ children }) {
    const { user_Have_Profile } = useHaveProfile();
   
    return user_Have_Profile ? children : <Navigate to='/home'/> 
}

export default Profile_Route
