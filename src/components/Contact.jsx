import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-8">
      <h1
        className="text-4xl font-press-start text-center text-[#001b5e]"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        Contact
      </h1>
      <form
        //this also works =>  // action="https://formsubmit.co/junnexclusive@gmail.com"
        action="https://formsubmit.co/5d8d3a725ba5468f0324474143071d68"
        method="POST"
        encType="multipart/form-data"
        className="text-start"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-2 flex border-gray-300 "
              type="text"
              name="name"
              required
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone</label>
            <input
              className="border-2 rounded-lg p-2 flex border-gray-300 "
              type="number"
              name="phone"
            ></input>
          </div>
        </div>
        <div className="flex flex-col ">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p-2 flex border-gray-300 "
            type="email"
            name="email"
          ></input>
        </div>
        <div className="flex flex-col ">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="border-2 rounded-lg p-2 flex border-gray-300 "
            type="text"
            name="name"
          ></input>
        </div>
        <div className="flex flex-col ">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="border-2 rounded-lg p-2 flex border-gray-300 "
            rows="10"
            name="message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#001b5e] text-gray-100 mt-4 p-2 rounded-lg w-full  "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
