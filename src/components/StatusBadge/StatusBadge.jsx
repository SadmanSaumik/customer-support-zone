import React from "react";

const StatusBadge = ({ status }) => {
  return (
    <div>
      <div
        className={`badge ${status === "open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"}`}
      >
        <svg
          className="size-[1em]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="8"
            fill={`${status === "open" ? "#0B5E06" : "#FEBB0C"}`}
          />
        </svg>
        {status}
      </div>
    </div>
  );
};

export default StatusBadge;
