import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AcceptTask = ({ data, user }) => {
  const [userData, setuserData] = useContext(AuthContext);

  const updateStatus = (status) => {
    const updatedData = userData.map((employee) => {
      if (employee.firstName === user.firstName) {
        
        // Check: Kya task sach mein active hai abhi?
        const isTaskActive = employee.tasks.some(t => t.title === data.title && t.active === true);

        if (isTaskActive) {
          const updatedTasks = employee.tasks.map((t) => {
            if (t.title === data.title) {
              if (status === 'completed') return { ...t, active: false, completed: true };
              if (status === 'failed') return { ...t, active: false, failed: true };
            }
            return t;
          });

          return {
            ...employee,
            tasks: updatedTasks,
            taskCount: {
              ...employee.taskCount,
              active: Math.max(0, employee.taskCount.active - 1),
              completed: status === 'completed' ? employee.taskCount.completed + 1 : employee.taskCount.completed,
              failed: status === 'failed' ? employee.taskCount.failed + 1 : employee.taskCount.failed,
            },
          };
        }
      }
      return employee;
    });

    setuserData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedData));
  };

  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
      <div className='flex justify-between items-center'>
        <h2 className='bg-red-600 px-3 py-1 rounded text-sm text-white font-medium'>{data.category}</h2>
        <h4 className='text-sm text-gray-800 font-medium'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold text-gray-900'>{data.title}</h2>
      <p className='text-sm mt-2 text-gray-800'>{data.description}</p>
      <div className='flex justify-between mt-4 gap-2'>
        <button 
          onClick={() => updateStatus('completed')}
          className='flex-1 rounded bg-green-500 hover:bg-green-600 py-2 px-2 text-xs font-bold text-white transition-all'
        >
          Mark Completed
        </button>
        <button 
          onClick={() => updateStatus('failed')}
          className='flex-1 rounded bg-red-500 hover:bg-red-600 py-2 px-2 text-xs font-bold text-white transition-all'
        >
          Mark Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;