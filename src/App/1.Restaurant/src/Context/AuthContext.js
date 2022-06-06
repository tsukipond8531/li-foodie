import React,{ useContext, useEffect, useState } from 'react'
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, onAuthStateChanged, deleteUser, sendEmailVerification, updateProfile } from 'firebase/auth';


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    
    function signup (email, password) {
        return  createUserWithEmailAndPassword(auth,email, password)
    }

    function login (email, password) {
        return signInWithEmailAndPassword(auth,email, password)
    }

    function logout () {
        return signOut(auth)
    }

    function resetPassword (email) {
        return sendPasswordResetEmail(auth,email)
    }

    function emailVerification (user) {
        return sendEmailVerification(user)
    }

    function deleteUserAccount (uid) {
        return deleteUser(uid)
    }

    function updateAccount (uid, data) {
        return updateProfile(uid, data)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe;
    },[])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        emailVerification,
        updateAccount,
        deleteUserAccount,
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
