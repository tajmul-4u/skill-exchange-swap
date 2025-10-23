import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)

console.log(loading,user)

const createUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut = ()=>{
    setLoading(false)
    return signOut(auth);
}

useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false)
    });
    return ()=>{
        unsubscribe();
    }
},[])
const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading
}
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;