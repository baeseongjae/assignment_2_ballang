import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");

  const signIn = (id) => {
    setIsLoggedIn(true);
    setUserId(id);
  };
  const logOut = () => {
    setIsLoggedIn(false);
    setUserId(null);
  };

  const value = {
    isLoggedIn,
    signIn,
    logOut,
    userId,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
