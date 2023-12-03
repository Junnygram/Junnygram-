import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { SocialIcon } from 'react-social-icons';

const Main = () => {
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  let date = new Date();
  let formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div id="main">
      <img
        src="/assets/junny.jpg"
        className="w-full  h-[80vh] object-cover transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl mb-0"
        data-aos="fade-down"
        data-aos-delay="400"
        alt=""
      />
      <div className="w-full h-[80vh] mt-8 absolute top-0 left-0 bg-white/60">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl  text-3xl font-bold text-gray-900">
            <span className="text-xl  ">Hi there, </span>
            <br /> <span className="text-xl">
              welcome to my portfolio{' '}
            </span>{' '}
            <br />
            I'm Olaleye Oyewunmi
          </h1>
          <h1>
            I'm a
            <TypeAnimation
              sequence={[
                'Frontend-Developer', // Types 'One'
                2000, // Waits 2s
                'Coder', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Tech Enthusiast', // Types 'Three' without deleting 'Two'
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '0.8em' }}
            />
          </h1>
          <h1
            className="text-[#131518] text-sm"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            {' '}
            visted my portfolio on {formattedDate}
          </h1>
          <div
            className="flex justify-center gap-4 py-3"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <SocialIcon
              url="https://www.linkedin.com/in/olaleyeoyewunmi"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://github.com/Junnygram"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://api.whatsapp.com/send/?phone=08055408100&text&type=phone_number&app_absent=0"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://twitter.com/badboyjunny07"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
