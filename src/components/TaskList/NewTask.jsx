import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ data, user }) => {
  const [userData, setuserData] = useContext(AuthContext);

  const handleAccept = () => {
    const updatedData = userData.map((employee) => {
      if (employee.firstName === user.firstName) {
        // Check: Kya ye task abhi bhi 'newTask' hai?
        const isAlreadyActive = employee.tasks.some(t => t.title === data.title && t.active === true);
        
        if (!isAlreadyActive) {
          const updatedTasks = employee.tasks.map((t) => {
            if (t.title === data.title) {
              return { ...t, newTask: false, active: true };
            }
            return t;
          });

          return {
            ...employee,
            tasks: updatedTasks,
            taskCount: {
              ...employee.taskCount,
              newTask: Math.max(0, employee.taskCount.newTask - 1),
              active: employee.taskCount.active + 1,
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
    <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h2 className="bg-red-600 px-3 py-1 rounded text-sm text-white font-medium">{data.category}</h2>
        <h4 className="text-sm text-gray-800 font-medium">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-gray-900">{data.title}</h2>
      <p className="text-sm mt-2 text-gray-800">{data.description}</p>
      <div className="mt-4">
        <button 
          onClick={handleAccept}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-medium transition-all"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;