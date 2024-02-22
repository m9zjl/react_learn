import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const ret = await axios.post("/login", inputs);
    if (ret.data.success) {
      localStorage.setItem("user", JSON.stringify(ret.data.user));
      setCurrentUser(ret.data.user);
    } else {
      setCurrentUser(null);
    }
  };

  const logout = async () => {
    const ret = await axios.post("/logout");
    console.log(ret);
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
