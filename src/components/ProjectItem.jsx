import React from "react";

const ProjectItem = ({ img, title, library, src }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] lg:translate-x-[-60%] translate-x-[-50%] translate-y-[-60%] ">
        <h1 className="text-2xl font-bold text-white tracking-wide ">
          {title}
        </h1>
        <p className="pb-4 pt-2 text-white ">{library}</p>
        <a href={`${src}`}>
          <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer focus:ring hover:bg-slate-300">
            check out
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
