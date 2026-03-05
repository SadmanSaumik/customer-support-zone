import React from "react";

const ResolvedTask = ({ task }) => {
  return (
    <div>
      <div className="card bg-[#E0E7FF] w-full shadow-sm my-3">
        <div className="card-body">
          <h2 className="card-title">{task.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ResolvedTask;
