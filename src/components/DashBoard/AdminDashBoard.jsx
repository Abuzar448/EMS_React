import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTasks from "../Others/AllTasks";

const AdminDashBoard = ({data,changeUser}) => {
  return (
    <div className="min-h-screen w-full p-4 md:p-12">
      <Header data={data} changeuser={changeUser}></Header>
      <CreateTask></CreateTask>
      <AllTasks></AllTasks>
    </div>
  );
};

export default AdminDashBoard;