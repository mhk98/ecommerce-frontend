import React from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaUser,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className=" px-12 hidden lg:flex justify-between items-center max-w-screen-xl  py-2">
        <div className="flex items-center space-x-4 text-white">
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <small>support@medleybiz.com.bd</small>
          </div>
          <div className="flex items-center space-x-2">
            <FaWhatsapp />
            <small>+8801601872740</small>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-white">
          <a href="#" className="hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaPinterestP />
          </a>
          <button className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center space-x-2">
            <FaUser />
            <small>Login</small>
          </button>
        </div>
      </div>

      <div className="container  lg:hidden flex-col md:flex-row justify-center px-4 py-2 space-y-2 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <small>support@medleybiz.com.bd</small>
          </div>
          <div className="flex items-center space-x-2">
            <FaWhatsapp />
            <small>+8801601872740</small>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <a href="#" className="text-white hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaPinterestP />
          </a>
          <button className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center space-x-2">
            <FaUser />
            <small>Login</small>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
