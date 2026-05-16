import React from 'react'
import Header from '../Others/Header';
import TaskListNumbers from '../Others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashBoard = ({data,changeUser}) => {
  return (
    <div className='p-4 bg-[#1C1C1C] min-h-screen md:p-10'>
        <Header data={data} changeuser={changeUser}></Header>
        <TaskListNumbers data={data}></TaskListNumbers>
        <TaskList data={data}></TaskList>
    </div>
  )
}

export default EmployeeDashBoard;