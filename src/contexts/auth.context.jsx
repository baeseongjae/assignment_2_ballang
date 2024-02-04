import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  const value = {
    isLoggedIn,
    signIn,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
