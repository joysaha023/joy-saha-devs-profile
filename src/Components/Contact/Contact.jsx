import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume, FaLocationDot, FaLinkedin, FaXTwitter, FaGithub, FaFacebook  } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <h2 className="text-4xl my-16 font-bold text-center">
        Contact <span className="text-[#0077be]">Me</span>
      </h2>
      <div className="flex flex-col-reverse md:flex-row px-5 gap-5  md:px-10">
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl">Reach Out to Me Directly</h2>
          <a href="mailto: joysahacse23@gmail.com" className="flex hover:text-gray-500 items-center gap-2">
            <IoIosMail className="text-2xl text-[#0077be]" />
            <p>joysahacse23@gmail.com</p>
          </a>
          <a href="tel:+8801861490690" className="flex hover:text-gray-500 items-center gap-2">
            <FaPhoneVolume className="text-2xl text-[#0077be]" />
            <p>+8801861490690</p>
          </a>
          <a target="blank" href="https://www.google.com/maps/place/Brahmanbaria+District/@23.9411127,91.0253057,10z/data=!3m1!4b1!4m6!3m5!1s0x375410a874799185:0xaf4b58f0925d6a00!8m2!3d23.9608181!4d91.1115014!16zL20vMDZ6MHR5?entry=ttu" className="flex hover:text-gray-500 items-center gap-2">
            <FaLocationDot className="text-2xl text-[#0077be]" />
            <p><span className="font-semibold">Permanent Address:</span> Brahmanbaria, Chittagong, Bangladesh</p>
          </a>
          <div className="flex items-center gap-6 text-3xl text-[#0077be]">
            <a className="hover:text-gray-500" href="https://www.linkedin.com/in/joysaha23/" target="blank"><FaLinkedin /></a>
            <a className="hover:text-gray-500" href="https://twitter.com/joysaha023" target="blank"><FaXTwitter /></a>
            <a className="hover:text-gray-500" href="https://github.com/joysaha023" target="blank"><FaGithub /></a>
            <a className="hover:text-gray-500" href="https://www.facebook.com/joysaha23" target="blank"><FaFacebook /></a>
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl">I'd Love to Here From You</h2>
          <form className="flex flex-col space-y-6">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered w-full "
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered w-full "
            />
            <textarea
              className="textarea textarea-bordered"
              placeholder="Write Your Message"
            ></textarea>
            <input type="submit" value="Submit" className="btn text-white hover:text-black bg-[#0077be] w-1/4" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
