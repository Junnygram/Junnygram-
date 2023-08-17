import React from 'react';
import WorkItem from './WorkItem';
import { data } from './data.js';

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-8">
      <h1
        className="text-4xl font-press-start text-center text-[#001b5e] my-2"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        Work
      </h1>

      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
