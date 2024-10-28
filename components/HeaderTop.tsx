// components/HeaderTop.tsx
import React from "react";
import {
  FaFacebook,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const HeaderTop: React.FC = () => {
  return (
    <div className="bg-gray-200 text-black flex flex-wrap justify-between items-center gap-4 py-2 font-bold">
      <div className="flex items-center gap-4">
        <div className="header_top_icon_wrapper">
          <FaFacebook className="text-blue-600 text-xl sm:text-lg md:text-xl" />
        </div>
        <div className="header_top_icon_wrapper">
          <FaTwitterSquare className="text-blue-400 text-xl sm:text-lg md:text-xl" />
        </div>
        <div className="header_top_icon_wrapper">
          <FaInstagram className="text-pink-500 text-xl sm:text-lg md:text-xl" />
        </div>
        <div className="header_top_icon_wrapper">
          <FaLinkedin className="text-blue-700 text-xl sm:text-lg md:text-xl" />
        </div>
      </div>
      <p className="text-md tracking-wider ml-4 sm:text-sm md:text-md flex-grow text-center">
        🔥 Flash Sale! Get 20% OFF on all items – Limited Time Offer! 🔥
      </p>
      <div className="flex gap-4 flex-wrap">
        <select
          className="text-gray-500 text-[15px] w-[70px] sm:w-[60px] md:w-[70px]"
          name="currency"
          id="currency"
        >
          <option value="PKR">PKR</option>
          <option value="USD $">USD $</option>
        </select>
        <select
          className="text-gray-500 text-[15px] w-[80px] sm:w-[70px] md:w-[80px]"
          name="language"
          id="language"
        >
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
        </select>
      </div>
    </div>
  );
};

export default HeaderTop;
