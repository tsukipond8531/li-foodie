import React,{ useContext, useEffect, useState } from 'react'
import { auth, db } from '../Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, onAuthStateChanged, sendEmailVerification } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState();
    const [userId, setUserId] = useState('');
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
   
    function getUserId() {
        const user = auth.currentUser;
        if(user) {
            setUserId(user.uid)
        }
    }

    async function signup (args, password) {
        return createUserWithEmailAndPassword(auth, args.email, password)
        .then((userCredential) => {
            const uID = userCredential.user.uid
            setUserId(uID);
            creteUser(args, uID);
            navigate('/restaurant')
        })
    }

    async function creteUser (args, key) {
        try {
            await setDoc(doc(db, key, 'userInfo'), {
                ...args,
                uid: key
            })
        } catch(err) {
            console.log(err)
        } 
        
    }

    async function login (email, password) {
        return signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const uID = userCredential.user.uid;
            setUserId(uID);
            navigate('/restaurant')
        })
    }


    async function logout () {
        return signOut(auth)
    }

    function resetPassword (email) {
        return sendPasswordResetEmail(auth,email)
    }

    function emailVerification (user) {
        return sendEmailVerification(user)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe;
    },[])

    useEffect(() => {
       getUserId()
    },[])

    const value = {
        currentUser,
        userId,
        login,
        signup,
        logout,
        resetPassword,
        emailVerification
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
