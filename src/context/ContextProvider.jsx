import { createContext, useEffect, useState } from "react";
import {onAuthStateChanged} from 'firebase/auth';
import PropTypes from 'prop-types';
import { auth } from "../firebase.config";

export const AllContext = createContext(null);

export const ContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
      setUserLoaded(true);
    });
    return () => {
      unSubscribe();
    }
  }, []);

  const value = {
    user,
    setUser,
    userLoaded,
  };
  return (
    <AllContext.Provider value={value}>
      {children}
    </AllContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node
}