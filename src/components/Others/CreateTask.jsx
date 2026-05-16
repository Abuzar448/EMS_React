import React, { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setuserData] = useContext(AuthContext);

  const titleElement = useRef();
  const dateElement = useRef();
  const assignElement = useRef();
  const categoryElement = useRef();
  const descriptionElement = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const taskObj = {
      title: titleElement.current.value,
      date: dateElement.current.value,
      category: categoryElement.current.value,
      description: descriptionElement.current.value,
      active: false,
      completed: false,
      failed: false,
      newTask: true,
    };

    const assignTo = assignElement.current.value;

    const updatedData = userData.map((employee) => {
      if (employee.firstName === assignTo) {
        return {
          ...employee,
          tasks: [...employee.tasks, taskObj],
          taskCount: {
            ...employee.taskCount,
            newTask: employee.taskCount.newTask + 1,
          },
        };
      }
      return employee;
    });

    setuserData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedData));

    // Reset Form
    titleElement.current.value = "";
    dateElement.current.value = "";
    assignElement.current.value = "";
    categoryElement.current.value = "";
    descriptionElement.current.value = "";
  };

  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded-xl shadow-lg">
      <form
        onSubmit={submitHandler}
        className="flex flex-col md:flex-row w-full items-start justify-between gap-10"
      >
        {/* Left Side: Inputs */}
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              ref={titleElement}
              required
              className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border-[1px] border-gray-600 focus:border-emerald-500 transition-all"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              ref={dateElement}
              required
              className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border-[1px] border-gray-600 focus:border-emerald-500 transition-all"
              type="date"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
            <input
              ref={assignElement}
              required
              className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border-[1px] border-gray-600 focus:border-emerald-500 transition-all"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              ref={categoryElement}
              required
              className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border-[1px] border-gray-600 focus:border-emerald-500 transition-all"
              type="text"
              placeholder="design, dev, etc..."
            />
          </div>
        </div>

        {/* Right Side: Textarea & Button */}
        <div className="w-full md:w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-1">Description</h3>
          <textarea
            ref={descriptionElement}
            required
            className="w-full h-44 md:h-64 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-600 focus:border-emerald-500 transition-all resize-none"
            placeholder="Detailed description of the task..."
          ></textarea>
          
          <button
            type="submit"
            className="bg-emerald-500 py-3 px-5 hover:bg-emerald-600 active:scale-95 transition-all rounded-lg text-sm mt-4 w-full font-semibold shadow-md"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;