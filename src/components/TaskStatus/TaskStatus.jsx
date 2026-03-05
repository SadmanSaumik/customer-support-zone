import React from "react";

const TaskStatus = ({ task, handleResolveTask }) => {
  return (
    <div>
      <div className="card card-border bg-base-100 w-full my-3">
        <div className="card-body">
          <h2 className="card-title">{task.title}</h2>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleResolveTask(task)}
              className="btn bg-[#02A53B] text-white w-full"
            >
              Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
