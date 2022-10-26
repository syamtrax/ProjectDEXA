import React from "react";
import { RiDashboardLine } from "react-icons/ri";
// import { MdMenu } from 'react-icons/md'

function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-red-900 h-full">
      <div className="flex w-full h-16 bg-orange-700 text-center items-center px-6 py-3 hover:bg-orange-600">
        <div className="text-gray-50 text-center text-2xl">
          <RiDashboardLine />
        </div>
        <div className="text-gray-50 text-center text-xl font-medium ml-1">
          Dashboard
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
