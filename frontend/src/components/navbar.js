import React from "react";
import { MdMenu, MdExitToApp } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";

function Navbar() {
  return (
    <div className="fixed w-full z-50 bg-red-700 h-20 shadow-md">
      <div className="flex justify-between h-full mx-auto">
        <div className="flex">
          <div className="flex item-center text-3xl italic font-bold w-64 text-center px-12 py-5 bg-red-800 text-gray-50">
            dexa group
          </div>
          <div className="w-20 h-20 items-center text-gray-50 text-center text-2xl px-7 py-7 hover:bg-red-800">
            <MdMenu />
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mr-6">
            <div className="text-gray-50 text-center text-2xl">
              <RiAccountCircleLine />
            </div>
            <div className="text-gray-50 text-center text-lg font-medium ml-1">
              Nama Pengguna
            </div>
          </div>
          <div className="flex flex-col w-20 h-20 px-4 py-4 items-center hover:bg-red-800">
            <div className="text-gray-50 text-center text-2xl">
              <MdExitToApp />
            </div>
            <div className="text-gray-50 text-center text-base font-medium">
              Keluar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
