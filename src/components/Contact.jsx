import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-[#020409] text-gray-300 h-auto min-h-screen flex justify-center items-center py-16 px-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/69a1a0a5-e77c-43bf-abee-fdb0734ac7a2"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-red-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4 text-sm sm:text-base">
            Submit the form below or shoot me an email at
            rich_higenbottam@hotmail.com.
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 mb-4"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#ccd6f6] p-2 mb-4"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 mb-4"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
