import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 mt-6'>
      <div className='rounded-xl w-full py-8 px-4 bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
        <h3 className='text-xl font-medium'>New-Task</h3>
      </div>
      <div className='rounded-xl w-full py-8 px-4 bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>Completed-Task</h3>
      </div>
      <div className='rounded-xl w-full py-8 px-4 bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Accepted-Task</h3>
      </div>
      <div className='rounded-xl w-full py-8 px-4 bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed-task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
