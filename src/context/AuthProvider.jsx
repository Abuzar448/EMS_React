import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStoraga";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null);
  useEffect(() => {
    const { employees } = getLocalStorage();

    // Agar localstorage khali hai tabhi set karein, varna jo hai wahi use karein
    if (!employees || employees.length === 0) {
      setLocalStorage();
      const { employees: initialEmployees } = getLocalStorage();
      setuserData(initialEmployees);
    } else {
      setuserData(employees);
    }
  }, []);

  return (
    <AuthContext.Provider value={[userData, setuserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
