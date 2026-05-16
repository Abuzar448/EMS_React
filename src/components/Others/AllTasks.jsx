import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const [userData, setuserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 shadow-lg">
      
      {/* Table Container with Horizontal Scroll for Mobile */}
      <div className="overflow-x-auto w-full scrollbar-hide">
        
        {/* Min-width ensures table doesn't shrink too much on small screens */}
        <div className="min-w-[700px]">
          
          {/* Table Header */}
          <div className="bg-emerald-600/10 border border-emerald-500/20 mb-3 py-3 px-4 flex justify-between rounded-lg">
            <h2 className="w-1/5 text-white font-semibold text-lg">Employee Name</h2>
            <h3 className="w-1/5 text-blue-400 font-semibold text-lg text-center">New Task</h3>
            <h5 className="w-1/5 text-yellow-400 font-semibold text-lg text-center">Active</h5>
            <h5 className="w-1/5 text-green-400 font-semibold text-lg text-center">Completed</h5>
            <h5 className="w-1/5 text-red-400 font-semibold text-lg text-center">Failed</h5>
          </div>

          {/* Table Body */}
          <div className="space-y-2">
            {userData.map((e, idx) => {
              return (
                <div 
                  key={idx} 
                  className="border border-gray-700/50 hover:border-emerald-500/30 transition-all py-3 px-4 flex justify-between rounded-lg bg-[#111] items-center"
                >
                  <h2 className="w-1/5 text-white font-medium text-base">
                    {e.firstName}
                  </h2>
                  <h3 className="w-1/5 text-blue-500 font-bold text-lg text-center">
                    {e.taskCount.newTask}
                  </h3>
                  <h5 className="w-1/5 text-yellow-500 font-bold text-lg text-center">
                    {e.taskCount.active}
                  </h5>
                  <h5 className="w-1/5 text-green-500 font-bold text-lg text-center">
                    {e.taskCount.completed}
                  </h5>
                  <h5 className="w-1/5 text-red-500 font-bold text-lg text-center">
                    {e.taskCount.failed}
                  </h5>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
      
      {/* Mobile Tip */}
      <p className="md:hidden text-gray-500 text-[10px] mt-4 text-center">
        Swipe left to see all stats →
      </p>
    </div>
  );
};

export default AllTasks;