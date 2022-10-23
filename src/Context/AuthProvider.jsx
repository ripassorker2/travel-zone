import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);

  const createUserEmailPassword = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name) => {
    setLoader(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const signInEmailPassword = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoader(true);
    return signOut(auth).then(() => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  const AuthInfo = {
    user,
    signWithGoogle,
    logOut,
    createUserEmailPassword,
    signInEmailPassword,
    loader,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
