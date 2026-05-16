import React, { useState } from "react";

const Header = ({ data, changeuser }) => {
  // const [userName, setuserName] = useState();
  // if(!data){
  //   setuserName('Admin')
  // }else{
  //   setuserName(data.firstName);
  // }

  const LogOutUser = () => {
    localStorage.setItem("LoggedInUser", "");
    // window.location.reload();
    changeuser("");
  };
  return (
    <div className="flex items-end justify-between p-5 md:p-0 md:px-10">
      <h1 className="text-lg md:text-2xl font-medium">
        Hello, <br />
        <span className="text-2xl md:text-3xl font-semibold">
          {data?.firstName || "Admin"} 👋
        </span>
      </h1>
      <button
        onClick={LogOutUser}
        className="bg-red-600 text-white px-3 py-1 md:px-5 md:py-2 rounded-sm md:rounded text-sm md:text-lg font-medium active:scale-95 transition-all"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
