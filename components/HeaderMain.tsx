import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const HeaderMain = () => {
  return (
    <>
      <div className="boeder-b border-gray-400 py-6">
        <div className="container sm:flex justify-between items-center">
          <div className="font-bold text-4xl text-center sm:pb-0 text-black">
            <Link href="/">
              <Image src="/images/logo2.png" alt="Logo" width={150} height={50} />
            </Link>
          </div>
          <div className="w-full sm:w-[300px] md:w-[70%] relative">
            <input
              className="border-gray-200 border p-2 px-4 rounded-lg w-full"
              type="text"
              placeholder="Enter your product name ..."
            />

            <CiSearch
              className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
              size={20}
            />
          </div>

          <div className="hidden lg:flex gap-4 text-gray-400 text-[30px]">
            <FaUser />

            <div className="relative">
              <FaHeart />
              <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                0
              </div>
            </div>

            <div className="relative">
              <MdShoppingBag />
              <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMain;
