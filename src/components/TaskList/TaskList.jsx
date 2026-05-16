import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="taskList"
      className="flex items-center justify-start gap-5 flex-nowrap overflow-x-auto  h-[55%] w-full mt-10 py-5 "
    >
      {data.tasks.slice(0).reverse().map((e, idx) => {
        if (e.active) return <AcceptTask key={idx} data={e} user={data} />;
        if (e.newTask) return <NewTask key={idx} data={e} user={data} />;
        if (e.completed) return <CompleteTask key={idx} data={e} />;
        if (e.failed) return <FailedTask key={idx} data={e} />;
      })}
    </div>
  );
};

export default TaskList;
