import React from "react";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div>
      <h2 className="text-4xl my-16 font-bold text-center">
        Contact <span className="text-[#0077be]">Me</span>
      </h2>
      <div>
        <div className="flex items-center gap-2">
          <IoIosMail className="text-2xl " />
          <p>joysahacse23@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
