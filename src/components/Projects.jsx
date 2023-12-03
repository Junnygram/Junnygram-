import React from 'react';
import ProjectItem from './ProjectItem';
import data from './data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,

    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 ">
      <div className="">
        <h1
          className="text-4xl font-press-start text-center text-[#001b5e]"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          DevOps Mastery Showcase
        </h1>
        <p className="text-center py-8">
          {' '}
          Projects I personally explored the Art of Continuous Integration,
          Deployment, and Automation in Real-world Scenarios
        </p>

        <div className="grid sm:grid-cols-2 gap-12">
          {data.containerProjects.map((x, i) => (
            <div key={i}>
              <ProjectItem
                img={x.img}
                title={x.title}
                library={x.library}
                src={x.src}
                gitsrc={x.gitsrc}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14">
        <h1
          className="text-4xl font-press-start text-center text-[#001b5e]"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          Intern Projects
        </h1>
        <p className="text-center py-8">
          {' '}
          These are the projects i worked on as an intern. I was able to write
          nextjs , implement API endpoints, getServerSideProps and other Next.js
          function that involves fetching of data. I also used chakara ui for
          styling . Since the beginning of Here are the projects i collaborated
          while working as an intern
        </p>

        <div className="grid sm:grid-cols-2 gap-12">
          {data.internProjects.map((x, i) => (
            <div key={i}>
              <ProjectItem
                img={x.img}
                title={x.title}
                library={x.library}
                src={x.src}
                gitsrc={x.gitsrc}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14">
        <h1
          className="text-4xl font-press-start text-center text-[#001b5e]"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          Projects
        </h1>

        <p className="text-center py-8">
          {' '}
          Since the beginning of my journey as designer/developer, I've worked
          on multiple projects for myself , done internship in software
          companies and also collaborated with talented minds. Here are the
          projects i personnally worked on:
        </p>
        <Slider {...settings}>
          {data.personnalProjects.map((x, i) => (
            <div key={i} className="px-10">
              <ProjectItem
                img={x.img}
                title={x.title}
                library={x.library}
                src={x.src}
                gitsrc={x.gitsrc}
              />
            </div>
          ))}
        </Slider>
      </div>{' '}
    </div>
  );
};

export default Projects;
