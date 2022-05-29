import React,{ useContext, useState, useEffect } from 'react'
import { doc, setDoc, collection ,serverTimestamp, orderBy, query, onSnapshot} from "firebase/firestore";
import { db } from '../Firebase';
import { useAuth } from './AuthContext';


const Order_Review = React.createContext();

export function useOrder_Review () {
    return useContext(Order_Review);
}

export function Order_ReviewProvider({children}) {

    const [prevOrder, setPrevOrder] = useState(null)
    const [prevReview, setPrevReview] = useState(null)
    const { currentUser } = useAuth() 

    async function getPrevActivity (uid) {
        
        var orderTemp = [];
        var reviewTemp = [];
        const colRef = collection(db, uid)
        const q = query(colRef, orderBy('timeStamp', 'desc'))
        onSnapshot(q, (snapshot) => {
            snapshot.docs.forEach((doc) => {
                if(doc.data().exclusive === 'order') {
                    const orderId = doc.id;
                    const placedAt = doc.data().placed_at;
                    const total = doc.data().totalAmount;
                    const shippingAddress = doc.data().shippingAddress;
                    const orderItems = doc.data().orderItems;
                    const status = doc.data().status;
                    const data = {orderId,orderItems,placedAt,total,shippingAddress,status}
                    orderTemp.push(data)
                }

                if(doc.data().exclusive === 'review') {
                    const reviewId = doc.id;
                    const placedAt = doc.data().placed_at;
                    const review = doc.data().review;
                    const data = {reviewId,placedAt,review}
                    reviewTemp.push(data)
                }
            })
        });
        setPrevOrder(orderTemp)
        setPrevReview(reviewTemp)
    }
    async function placeOrder(data,key,token) {        
        await setDoc(doc(db,key,token), {
            ...data,
            placed_at: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`,
            timeStamp: serverTimestamp()
        });
    }

    async function postReview(data,key,token) {
        await setDoc(doc(db,key,token), {
            ...data,
            placed_at: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`,
            timeStamp: serverTimestamp()
        });
    }

    // useEffect(() => {
    //     currentUser && getPrevActivity(currentUser.uid)
    // },[currentUser])

    
    const value = {
        prevReview,
        prevOrder,
        getPrevActivity,
        placeOrder,
        postReview,
    }
    return(
        <Order_Review.Provider value={value}>
            {children}
        </Order_Review.Provider>
    )
}