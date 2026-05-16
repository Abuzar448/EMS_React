import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashBoard from "./components/DashBoard/EmployeeDashBoard";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import { getLocalStorage, setLocalStorage } from "./utils/localStoraga";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [LogedInUserData, setLogedInUserData] = useState();
  const [userData, setuserData] = useContext(AuthContext);

  useEffect(() => {
    const logedInUser = localStorage.getItem("LoggedInUser");

    if (logedInUser) {
      const userData = JSON.parse(logedInUser);
      setUser(userData.role);
      setLogedInUserData(userData.data);
    }
  }, []);

  const HandleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      setUser("admin");
      // Admin ka data find karo ya manually set karo
      const adminData = userData.find((e) => e.email == email) || {
        firstName: "Admin",
      };
      // Best practice: LocalStorage se admin ka data uthao
      const { admin } = getLocalStorage();
      const currentAdmin = admin.find((a) => a.email === email);

      setLogedInUserData(currentAdmin); // Yeh line zaroori hai!
      localStorage.setItem(
        "LoggedInUser",
        JSON.stringify({ role: "admin", data: currentAdmin }),
      );
    } else if (userData) {
      const employee = userData.find(
        (e) => e.email == email && e.password == password,
      );
      if (employee) {
        setUser("user");
        setLogedInUserData(employee);
        localStorage.setItem(
          "LoggedInUser",
          JSON.stringify({ role: "user", data: employee }),
        );
      }
    } else alert("Invalid Credentials ..");
  };

  return (
    <>
      {!user ? <Login HandleLoginMethod={HandleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashBoard data={LogedInUserData} changeUser={setUser} />
      ) : user == "user" ? (
        <EmployeeDashBoard data={userData.find((e) => e.email === LogedInUserData.email)} changeUser={setUser} />
      ) : null}
    </>
  );
};

export default App;
