import React,{ useContext, useEffect, useState } from 'react'
import { db } from '../Firebase';
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from './AuthContext';

const DataContext = React.createContext();

export function useData () {
    return useContext(DataContext)
}

export function DataProvider ({children}) {

    const { userId } = useAuth();
    
    useEffect(() => {
       if(userId) {
        getUser(userId);
       }
    },[userId])

    async function getUser(args) {
        try {
            const docRef = doc(db, args, "userInfo");
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()) {
                const data = docSnap.data();
                localStorage.setItem('userData', JSON.stringify(data))
            } else {
                return null;
            }
        } catch(err) {
            console.log(err)
        }
    }

    
    const getItems = () => {
        const data = JSON.parse(localStorage.getItem('item-list'));
        return data;
    }

    function clearItem () {
        localStorage.setItem('item-list', JSON.stringify([]));
        localStorage.setItem('userData', JSON.stringify([]));
    }

    const value = {
       getItems,
       clearItem,
    }
    return(
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}
