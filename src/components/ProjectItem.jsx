import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const ProjectItem = ({ img, title, library, src, gitsrc }) => {
  return (
    <div
      className="relative flex items-center justify-center h-auto  shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]"
      data-aos="fade-down"
      data-aos-delay="400"
    >
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] lg:translate-x-[-60%] translate-x-[-50%] translate-y-[-60%] ">
        <h1 className="lg:text-2xl md:mt-3  text-[10px]  md:text-base font-bold text-white tracking-wide ">
          {title}
        </h1>
        <p className="pb-2 md:pb-1  text-[10px]  md:text-base  text-white ">
          {library}
        </p>

        <div className="flex text-[10px]  md:text-base gap-2 justify-between ">
          <a
            target="_blank"
            href={`${src}`}
            className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer focus:ring hover:bg-slate-300 md:w-24  md:md:pt-2 md:text-sm md:p-0 md:h-10 md:my-auto "
          >
            check out
          </a>
          <a
            target="_blank"
            href={`${gitsrc}`}
            className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer focus:ring hover:bg-slate-300"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
