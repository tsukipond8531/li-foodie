import React,{ useContext, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../Firebase';

const HaveProfile = React.createContext();

export function useHaveProfile() {
   return useContext(HaveProfile)
}

export function HaveProfileProvider({children}) {

    const [user_Have_Profile, set_User_Have_Profile] = useState();
    const [profileData, setProfileData] = useState(null)

    async function haveProfile(params) {
        const docRef = doc(db,params, "userInfo");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            set_User_Have_Profile(true)
            setProfileData(docSnap.data());
        } else {
            set_User_Have_Profile(false)
            setProfileData(null)
        }
    }
   
    const value = {
        user_Have_Profile,
        profileData,
        haveProfile,
    }
    return(
        <HaveProfile.Provider value={value}>
            {children}
        </HaveProfile.Provider>
    )
}