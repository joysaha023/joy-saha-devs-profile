import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume, FaLocationDot, FaLinkedin, FaXTwitter, FaGithub, FaFacebook  } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <h2 className="text-4xl my-16 font-bold text-center">
        Contact <span className="text-[#0077be]">Me</span>
      </h2>
      <div className="flex flex-col md:flex-row  px-10">
        <div className="flex-1">
          <h2 className="text-2xl">Reach Out to Me Directly</h2>
          <div className="flex items-center gap-2">
            <IoIosMail className="text-2xl " />
            <p>joysahacse23@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneVolume className="text-2xl " />
            <p>+8801861490690</p>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-2xl " />
            <p>Permanent Address: Brahmanbaria, Chittagong, Bangladesh</p>
          </div>
          <div className="flex items-center gap-3 text-2xl text-[#0077be]">
            <a href="https://www.linkedin.com/in/joysaha23/" target="blank"><FaLinkedin /></a>
            <a href="https://twitter.com/joysaha023" target="blank"><FaXTwitter /></a>
            <a href="https://github.com/joysaha023" target="blank"><FaGithub /></a>
            <a href="https://www.facebook.com/joysaha23" target="blank"><FaFacebook /></a>
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
            <input type="submit" value="submit" className="btn bg-[#0077be] w-1/4" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
