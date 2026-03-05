import React from "react";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";

const Banner = ({ tasks, resolveTasks }) => {
  return (
    <div>
      <section className="bg-gray-100 px-10 pt-7">
        <div className="container mx-auto flex gap-5">
          <div className="relative flex-1 overflow-hidden rounded-2xl bg-linear-to-br from-violet-500 via-violet-600 to-violet-900 px-8 py-10 text-center">
            <img
              src={vector1}
              className="absolute bottom-0 leftabsolute inset-0 w-full h-full object-cover opacity-40"
              alt=""
            />
            <img
              src={vector2}
              className="absolute bottom-0 leftabsolute inset-0 w-full h-full object-cover opacity-40"
              alt=""
            />
            <div className="relative z-10">
              <p className="mb-2.5 text-lg font-medium text-white/90">
                In-Progress
              </p>
              <p className="text-6xl font-bold leading-none text-white">
                {tasks.length}
              </p>
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden rounded-2xl bg-linear-to-br from-emerald-400 via-emerald-500 to-emerald-800 px-8 py-10 text-center">
            <img
              src={vector1}
              className="absolute bottom-0 leftabsolute inset-0 w-full h-full object-cover opacity-40"
              alt=""
            />
            <img
              src={vector2}
              className="absolute bottom-0 leftabsolute inset-0 w-full h-full object-cover opacity-40"
              alt=""
            />
            <div className="relative z-10">
              <p className="mb-2.5 text-lg font-medium text-white/90">
                Resolved
              </p>
              <p className="text-6xl font-bold leading-none text-white">
                {resolveTasks.length}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
