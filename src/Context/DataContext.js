import React,{ useContext, useEffect, useState } from 'react'
import { db } from '../Firebase';
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from './AuthContext';
import { getApiProduct } from '../API/FoodDB';


const DataContext = React.createContext();

export function useData () {
    return useContext(DataContext)
}

export function DataProvider ({children}) {

    //hl1   for user data.
    const { userId } = useAuth();
    
    useEffect(() => {
       if(userId) {
        fetchUser(userId);
       }
    },[userId])

    async function fetchUser(args) {
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

    const getUser = () => {
        const data = localStorage.getItem('userData');
        return JSON.parse(data)
    }
   
    // hl3  for cart items.
    const setItems = (args) => {
        localStorage.setItem('item-list', JSON.stringify(args))
    }

    const getItems = () => {
        const data = JSON.parse(localStorage.getItem('item-list'));
        if (data === null) {
            localStorage.setItem('item-list', JSON.stringify([]))
            return ["0"];
        } else {
            return data;
        }
    }


    //hl5   for products.
    
    useEffect(() => {
        getApiProduct()
    },[])

    function product() {
        const pd = localStorage.getItem('product')
        if(pd === null) {
            return null;
        } else {
            return JSON.parse(pd);
        }    
    }

    function clearItem () {
        localStorage.clear()
        // localStorage.clearItem('item-list');
        // localStorage.clearItem('product');
        // localStorage.setItem('userData', JSON.stringify([]));
    }

    
    const value = {
       setItems, 
       getItems,
       getUser,
       product,
       clearItem,
    }
    return(
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}
