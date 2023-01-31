import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex p-32 items-center max-lg:flex-col max-lg:px-4"
    >
      <div className="w-1/2 flex flex-col items-center max-lg:w-full">
        <h2 className="title -mb-8 max-lg:text-6xl max-lg:text-center">
          Contact
        </h2>
        <h4 className="sub-title z-10 max-lg:text-5xl max-lg:mt-1 max-lg:text-center">
          Let's Chat
        </h4>

        <p className="text-center text-gray-400 text-sm px-16 leading-relaxed mt-8 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi earum
          perspiciatis pariatur, maiores facere fuga.
        </p>
      </div>
      <div className="w-1/2 max-lg:w-full">
        <form>
          <div className="flex flex-col">
            <label className="text-gray-500">Your Name</label>
            <input type="text" className="rounded-md my-2 border-gray-300" />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-500">Your Email</label>
            <input type="text" className="rounded-md my-2 border-gray-300" />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-500">Your Messege</label>
            <textarea
              cols="30"
              row="10"
              className="rounded-md my-2 border-gray-300"
            ></textarea>
            <div className="btn-send mt-2">
              <button className="uppercase py-2 px-5 rounded-full bg-orange-400 text-white  max-lg:w-full">
                Send Messege
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
