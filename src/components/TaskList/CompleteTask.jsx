import React from "react";

const CompleteTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl">
      <div className="p-5 flex justify-between items-center">
        <h2 className="bg-red-600 px-3 py-1 rounded text-sm">{data.category}</h2>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold px-5">{data.title}</h2>
      <p className="text-sm px-5 mt-2">
       {data.description}
      </p>
      <div className='h-1/4 flex items-end justify-evenly m-4'>
        <button className="w-4/5 m-2 bg-green-600 text-white px-3 py-2 rounded">Completed</button>
      </div>
    </div>
  );
};

export default CompleteTask;
