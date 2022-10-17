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
        const data = localStorage.getItem('userData')
        const dummy = {address: undefined, displayName :undefined, email :undefined, phoneNumber :undefined, photoName :undefined, photoUrl :undefined, uid :undefined}

        if(data === null) {
            return dummy
        } else {
            return JSON.parse(data);
        }
    }
   
    // hl3  for cart items.
    const setItems = (args) => {
        localStorage.setItem('item-list', JSON.stringify(args))
    }

    const getItems = () => {
        const data = JSON.parse(localStorage.getItem('item-list'));
        if (data === null) {
            setItems([])
            return [];
        } else {
            return data;
        }
    }


    //hl5   for products.
    const [productState, setProductState] = useState(false)

    //this useEffect` for fetch product information before everything starts, As for now i am not changing the backend a lot so i don't fetch the api every time, but for actual use the if statement must be bypassed, and uncomment the first line of function clearItem() .
    useEffect(() => {
        const pd = localStorage.getItem('product')
        if(pd === null) {
            setProductState(getApiProduct())
        } else {
            setProductState(true)
        }   
    },[])

    function product() {
        const pd = localStorage.getItem('product')
        if(pd === null) {
            setProductState(getApiProduct())
            const newPd = localStorage.getItem('product')
            return JSON.parse(newPd);
        } else {
            return JSON.parse(pd)  
        }    
    }

    function clearItem () {
        // localStorage.removeItem('product');
        localStorage.removeItem('item-list')
        localStorage.setItem('userData', JSON.stringify([]));
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
            {productState && children}
        </DataContext.Provider>
    )
}
